import React from "react";

function Statistics({ shortenedUrls }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Statistics Page</h1>
      {shortenedUrls.length === 0 ? (
        <p>No URLs shortened yet.</p>
      ) : (
        <ul>
          {shortenedUrls.map((item, index) => (
            <li key={index}>
              <b>Original:</b> {item.original} <br />
              <b>Short:</b> <a href={item.original}>{item.short}</a> <br />
              <b>Expiry:</b> {item.expiry}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Statistics;
