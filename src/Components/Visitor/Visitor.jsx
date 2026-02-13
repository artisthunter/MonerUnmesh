import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import "./Visitor.css";

const Visitor = () => {
  const [data, setData] = useState({
    live: 0,
    today: 0,
    week: 0,
    month: 0,
    year: 0,
    allTime: 0
  });

  /*useEffect(() => {
    fetch("https://your-backend.com/api/visitor")
      .then(res => res.json())
      .then(stats => setData(stats));

    const handleUnload = () => {
      navigator.sendBeacon("https://your-backend.com/api/visitor/leave");
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);*/

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
