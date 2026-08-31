import express from "express";

import {
  trackVisitor,
  getVisitorStats,
  visitorLeave,
} from "../Controllers/VisitorController.js";

const visitorRouter = express.Router();

visitorRouter.post("/", trackVisitor);
visitorRouter.get("/stats", getVisitorStats);
visitorRouter.post("/leave", visitorLeave);

export default visitorRouter;
