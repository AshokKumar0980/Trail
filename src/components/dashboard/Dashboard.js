import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController,
} from "chart.js";

// Register everything needed
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, BarController);

export default function Dashboard({ setSection, setQueueType }) {
  useEffect(() => {
    const ctx = document.getElementById("statusChart");
    if (!ctx) return;

    // Create chart instance
    const chart = new ChartJS(ctx, {
      type: "bar",
      data: {
        labels: ["WIP", "Escalated", "Failed", "Completed"],
        datasets: [
          {
            label: "Jobs",
            data: [45, 7, 10, 68],
            backgroundColor: ["blue", "red", "orange", "green"],
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup: destroy chart to prevent "canvas already in use"
    return () => {
      chart.destroy();
    };
  }, []);

  const handleTotalLeadsClick = () => {
    if (setQueueType && setSection) {
      setQueueType("global");
      setSection("jobQueue");
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="kpi-container">
        <div 
          className="kpi-card" 
          onClick={handleTotalLeadsClick}
          style={{ cursor: "pointer", transition: "transform 0.2s" }}
          onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
        >
          <h3>Total Leads</h3>
          <p style={{ color: "green" }}>120</p>
        </div>
        <div className="kpi-card">
          <h3>WIP Deals</h3>
          <p style={{ color: "blue" }}>45</p>
        </div>
        <div className="kpi-card">
          <h3>Escalations</h3>
          <p style={{ color: "red" }}>7</p>
        </div>
        <div className="kpi-card">
          <h3>Completed</h3>
          <p style={{ color: "purple" }}>68</p>
        </div>
      </div>

      {/* Chart.js canvas */}
      <canvas id="statusChart" width="300" height="150"></canvas>

      <div className="alert-box">
        <h3>🚨 Escalation Alerts</h3>
        <ul>
          <li>Client XYZ - Pending 12 hrs</li>
          <li>Candidate John - Interview rescheduled</li>
          <li>Deal ABC Inc - High Value</li>
        </ul>
      </div>

      <div className="quick-actions">
        <button 
          className="add-lead"
          onClick={() => (window.location.href = "/add-lead.html")}
        >
          + Add Lead
        </button>
        <button className="add-candidate">
          + Add Candidate
        </button>
        <button className="view-reports">📊 View Reports</button>
      </div>
    </div>
  );
}