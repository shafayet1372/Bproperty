import React from "react";

export default function Title({ title }) {
  return (
    <small className="text-secondary fw-bold " style={{ fontSize: "10px" }}>
      {title}
    </small>
  );
}
