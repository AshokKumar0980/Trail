import React, { useState } from "react";
import Sidebar from "./components/dashboard/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import CandidateDetails from "./components/profilequeue/CandidateDetails";
import CandidateInfo from "./components/profilequeue/CandidateInfo";
import Rejected from "./components/trackingqueue/Rejected";
import Submitted from "./components/trackingqueue/Submitted";
import NotSubmitted from "./components/trackingqueue/NotSubmitted";
import JobQueue from "./components/jobqueue/JobQueue";
import "./App.css";

export default function App() {
  const [section, setSection] = useState("dashboard");
  const [queueType, setQueueType] = useState("");

  const renderContent = () => {
    switch (section) {
      case "dashboard":
        return <Dashboard setSection={setSection} setQueueType={setQueueType} />;
      case "candidateDetails":
        return <CandidateDetails />;
      case "candidateInfo":
        return <CandidateInfo />;
      case "interviewRejected":
        return <Rejected />;
      case "interviewSubmitted":
        return <Submitted />;
      case "interviewNotSubmitted":
        return <NotSubmitted />;
      case "jobQueue":
        return <JobQueue type={queueType} />;
      default:
        return <h1>Welcome to MARS Dashboard</h1>;
    }
  };

  return (
    <div className="app">
      <Sidebar setSection={setSection} setQueueType={setQueueType} />
      <div className="content">{renderContent()}</div>
    </div>
  );
}