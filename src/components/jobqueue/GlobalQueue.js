import React, { useEffect, useState } from "react";
import marsData from "src/mars-api.json";

const GlobalQueue = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Set the global queue data from imported JSON file
    setJobs(marsData.mars.jobQueue.globalQueue);
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "OPEN":
        return { color: "green", fontWeight: "bold" };
      case "IN_PROGRESS":
        return { color: "blue", fontWeight: "bold" };
      case "CLOSED":
        return { color: "gray", fontWeight: "bold" };
      default:
        return { color: "black" };
    }
  };

  return (
    <div>
      <h3>Global Queue</h3>
      <div style={{ marginBottom: "20px", color: "#666" }}>
        Showing {jobs.length} jobs in global queue
      </div>
      <table>
        <thead>
          <tr>
            <th>Job ID</th>
            <th>Employer ID</th>
            <th>Job Title</th>
            <th>Location</th>
            <th>Salary Range</th>
            <th>Visa Type</th>
            <th>Job Type</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {jobs.length > 0 ? (
            jobs.map((job, idx) => (
              <tr key={idx}>
                <td>{job.jobId}</td>
                <td>{job.employerId}</td>
                <td>{job.jobTitle}</td>
                <td>{job.location}</td>
                <td>{job.salaryRange}</td>
                <td>{job.visaType}</td>
                <td>{job.jobType}</td>
                <td style={getStatusStyle(job.jobStatus)}>{job.jobStatus}</td>
                <td>{formatDate(job.createdAt)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" style={{ textAlign: "center", color: "#666" }}>
                No jobs available in global queue
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GlobalQueue;