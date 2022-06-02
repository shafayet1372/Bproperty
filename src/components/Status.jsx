import React from "react";
import { Col, Dropdown, ListGroup } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { completionStatus, occupancyStatus } from "../js/status";
import style from "../css/style.module.css";
export default function Status({ purpose, statusHandler, status }) {
  return (
    <Col md={8} sm={12} className="d-flex justify-content-even my-1">
      <p className="m-0" style={{ fontSize: "14px" }}>
        {purpose == "Buy" ? "Completion status :" : "Occupancy Status:"}
      </p>

      <div className="d-flex align-items-center mx-1" style={{ width: "70%" }}>
        <ListGroup
          style={{ fontSize: "13px" }}
          as="ul"
          className="flex-row  border border-secondary rounded-0 me-2  "
        >
          {purpose == "Buy"
            ? completionStatus.map((x) => (
                <ListGroup.Item
                  key={uuidv4()}
                  as="li"
                  className={`${status == x ? "text-white" : "text-success"} ${
                    style.listItem
                  } border-0 py-0 `}
                  active={status == x}
                  onClick={() => statusHandler(x)}
                >
                  {x}
                </ListGroup.Item>
              ))
            : occupancyStatus.map((x) => (
                <ListGroup.Item
                  key={uuidv4()}
                  as="li"
                  className={`${status == x ? "text-white" : "text-success"} ${
                    style.listItem
                  } border-0 py-0 `}
                  active={status == x}
                  onClick={() => statusHandler(x)}
                >
                  {x}
                </ListGroup.Item>
              ))}
        </ListGroup>
      </div>
    </Col>
  );
}
