import Visitor from "../Models/VisitorModel.js";
import crypto from "crypto";

const LIVE_TIMEOUT = 2 * 60 * 1000;

export const trackVisitor = async (req, res) => {
  try {
    const { visitorId } = req.body;

    if (!visitorId) {
      return res.status(400).json({
        success: false,
        message: "Visitor ID is required",
      });
    }

    const now = new Date();

    let visitor = await Visitor.findOne({
      visitorId,
    });

    if (!visitor) {
      visitor = await Visitor.create({
        visitorId,
        firstVisit: now,
        lastSeen: now,
        visitCount: 1,
      });

      return res.status(201).json({
        success: true,
        message: "New visitor registered",
        visitorId,
      });
    }

    const thirtyMinutes = 30 * 60 * 1000;

    if (now.getTime() - visitor.lastSeen.getTime() > thirtyMinutes) {
      visitor.visitCount += 1;
    }

    visitor.lastSeen = now;

    await visitor.save();

    return res.status(200).json({
      success: true,
      message: "Visitor updated",
      visitorId,
    });
  } catch (error) {
    console.error("Track visitor error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to track visitor",
      error: error.message,
    });
  }
};

export const getVisitorStats = async (req, res) => {
  try {
    const now = new Date();

    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
    );

    const startOfWeek = new Date(startOfToday);
    const day = startOfWeek.getDay();
    const difference = day === 0 ? 6 : day - 1;

    startOfWeek.setDate(startOfWeek.getDate() - difference);

    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const liveSince = new Date(Date.now() - LIVE_TIMEOUT);

    const live = await Visitor.countDocuments({
      lastSeen: {
        $gte: liveSince,
      },
    });

    const today = await Visitor.countDocuments({
      lastSeen: {
        $gte: startOfToday,
      },
    });

    const week = await Visitor.countDocuments({
      lastSeen: {
        $gte: startOfWeek,
      },
    });

    const month = await Visitor.countDocuments({
      lastSeen: {
        $gte: startOfMonth,
      },
    });

    const year = await Visitor.countDocuments({
      lastSeen: {
        $gte: startOfYear,
      },
    });

    const allTime = await Visitor.countDocuments();

    return res.status(200).json({
      success: true,

      live,
      today,
      week,
      month,
      year,
      allTime,
    });
  } catch (error) {
    console.error("Get visitor statistics error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get visitor statistics",
      error: error.message,
    });
  }
};

export const visitorLeave = async (req, res) => {
  try {
    const { visitorId } = req.body;

    if (!visitorId) {
      return res.status(400).json({
        success: false,
        message: "Visitor ID is required",
      });
    }

    await Visitor.findOneAndUpdate(
      {
        visitorId,
      },
      {
        lastSeen: new Date(0),
      },
    );

    return res.status(200).json({
      success: true,
      message: "Visitor marked as inactive",
    });
  } catch (error) {
    console.error("Visitor leave error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update visitor status",
      error: error.message,
    });
  }
};
