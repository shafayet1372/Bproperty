import React from "react";
import { Form, Col } from "react-bootstrap";
import style from "../css/style.module.css";

export default function Keyword() {
  return (
    <Col sm={5} className="p-1">
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid black",
          color: "black",
          textAlign: "left",
          padding: "0px 15px",
          width: "100%",
          height: "100%",
          borderRadius: "5px",
        }}
      >
        <small className="text-secondary fw-bold" style={{ fontSize: "10px" }}>
          KEYWORDS
        </small>
        <br />
        <Form.Control type="text" className={style.input_fix} />
      </div>
    </Col>
  );
}
