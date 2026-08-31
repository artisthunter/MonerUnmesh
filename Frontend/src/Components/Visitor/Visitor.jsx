import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { StoreContext } from ".././Context/StoreContext";
import axios from "axios";
import "./Visitor.css";

const Visitor = () => {
  const { url } = useContext(StoreContext);

  const [data, setData] = useState({
    live: 0,
    today: 0,
    week: 0,
    month: 0,
    year: 0,
    allTime: 0,
  });

  const getVisitorId = () => {
    let visitorId = localStorage.getItem("visitorId");

    if (!visitorId) {
      visitorId = crypto.randomUUID();
      localStorage.setItem("visitorId", visitorId);
    }

    return visitorId;
  };

  const trackVisitor = async () => {
    try {
      const visitorId = getVisitorId();

      await axios.post(`${url}/api/visitor`, {
        visitorId,
      });
    } catch (error) {
      console.error("Visitor tracking error:", error);
    }
  };

  const fetchVisitorStats = async () => {
    try {
      const response = await axios.get(`${url}/api/visitor/stats`);

      if (response.data.success) {
        setData({
          live: response.data.live || 0,
          today: response.data.today || 0,
          week: response.data.week || 0,
          month: response.data.month || 0,
          year: response.data.year || 0,
          allTime: response.data.allTime || 0,
        });
      }
    } catch (error) {
      console.error("Visitor stats error:", error);
    }
  };

  useEffect(() => {
    if (!url) return;

    const visitorId = getVisitorId();

    trackVisitor();
    fetchVisitorStats();

    const heartbeatInterval = setInterval(() => {
      trackVisitor();
    }, 60 * 1000);

    const statsInterval = setInterval(() => {
      fetchVisitorStats();
    }, 30 * 1000);

    const handleUnload = () => {
      const payload = JSON.stringify({
        visitorId,
      });

      navigator.sendBeacon(
        `${url}/api/visitor/leave`,
        new Blob([payload], {
          type: "application/json",
        }),
      );
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      clearInterval(heartbeatInterval);
      clearInterval(statsInterval);

      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [url]);

  return (
    <div className="visitor-dashboard">
      <div className="vd-item">
        <span>Live Visitors:</span>
        <CountUp start={0} end={data.live} duration={1.2} />
      </div>

      <div className="vd-item">
        <span>Today's Visitors:</span>
        <CountUp start={0} end={data.today} duration={1.2} />
      </div>

      <div className="vd-item">
        <span>This Month Visitor:</span>
        <CountUp start={0} end={data.month} duration={1.2} />
      </div>

      <div className="vd-item">
        <span>This Year Visitors:</span>
        <CountUp start={0} end={data.year} duration={1.2} />
      </div>

      <div className="vd-item">
        <span>All Visitors:</span>
        <CountUp start={0} end={data.allTime} duration={1.2} />
      </div>
    </div>
  );
};

export default Visitor;
