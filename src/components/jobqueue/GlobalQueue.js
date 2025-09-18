import React, { useEffect, useState } from "react";

const GlobalQueue = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/jobqueue/global")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching global queue", err));
  }, []);

  return (
    <div>
      <h3>Global Queue</h3>
      <table>
        <thead>
          <tr>
            <th>Job ID</th>
            <th>Candidate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, idx) => (
            <tr key={idx}>
              <td>{job.jobId}</td>
              <td>{job.candidate}</td>
              <td>{job.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GlobalQueue;
