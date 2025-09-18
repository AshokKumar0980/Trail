import React, { useState } from "react";
import GlobalQueue from "./GlobalQueue";
import WipQueue from "./WipQueue";
import EscalationQueue from "./EscalationQueue";
import FailedQueue from "./FailedQueue";
import CompletedQueue from "./CompletedQueue";

const JobQueue = () => {
  const [activeTab, setActiveTab] = useState("global");

  const renderContent = () => {
    switch (activeTab) {
      case "global":
        return <GlobalQueue />;
      case "wip":
        return <WipQueue />;
      case "escalation":
        return <EscalationQueue />;
      case "failed":
        return <FailedQueue />;
      case "completed":
        return <CompletedQueue />;
      default:
        return <GlobalQueue />;
    }
  };

  return (
    <div>
      <h2>Job Queue</h2>
      <div className="tab-menu">
        <button onClick={() => setActiveTab("global")}>Global</button>
        <button onClick={() => setActiveTab("wip")}>WIP</button>
        <button onClick={() => setActiveTab("escalation")}>Escalation</button>
        <button onClick={() => setActiveTab("failed")}>Failed</button>
        <button onClick={() => setActiveTab("completed")}>Completed</button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default JobQueue;
