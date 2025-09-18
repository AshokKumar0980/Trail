import React from "react";

export default function NotSubmitted() {
  return (
    <div>
      <h1>Not Submitted Candidates</h1>
      <table>
        <thead>
          <tr><th>Name</th><th>Reason</th></tr>
        </thead>
        <tbody>
          <tr><td>Paul Adams</td><td>Pending resume update</td></tr>
        </tbody>
      </table>
    </div>
  );
}
