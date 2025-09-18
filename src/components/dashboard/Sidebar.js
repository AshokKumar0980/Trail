import React, { useState } from "react";

export default function Sidebar({ setSection, setQueueType }) {
  const [openMenu, setOpenMenu] = useState("");

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  return (
    <div className="sidebar">
      <h2>MARS</h2>

      <a onClick={() => setSection("dashboard")}>Dashboard</a>

      {/* Job Queue */}
      <a onClick={() => toggleMenu("jobQueue")}>Job Queue ▼</a>
      {openMenu === "jobQueue" && (
        <div className="submenu">
          {["global", "personal", "wip", "escalation", "failed", "completed"].map((type) => (
            <a
              key={type}
              onClick={() => {
                setQueueType(type);
                setSection("jobQueue");
              }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Queue
            </a>
          ))}
        </div>
      )}

      {/* Profile Queue */}
      <a onClick={() => toggleMenu("profile")}>Profile Queue ▼</a>
      {openMenu === "profile" && (
        <div className="submenu">
          <a onClick={() => setSection("candidateDetails")}>Candidate Details</a>
        </div>
      )}

      {/* Tracking */}
      <a onClick={() => toggleMenu("tracking")}>Tracking ▼</a>
      {openMenu === "tracking" && (
        <div className="submenu">
          <a onClick={() => setSection("candidateInfo")}>Candidate Info</a>
          <a onClick={() => setSection("interviewRejected")}>Rejected</a>
          <a onClick={() => setSection("interviewSubmitted")}>Submitted</a>
          <a onClick={() => setSection("interviewNotSubmitted")}>Not Submitted</a>
        </div>
      )}
    </div>
  );
}
