import React from "react";
import { Col } from "react-bootstrap";
import { BiErrorCircle } from "../js/icons";
export default function EmptyData({ title }) {
  return (
    <Col sm={12}>
      <div
        style={{ height: "350px" }}
        className="border-top border-5 border-info shadow d-flex justify-content-center align-items-center"
      >
        <div>
          <div className="text-center">
            <BiErrorCircle className="text-info display-5 " />
          </div>
          <h5 className="text-info">{title}</h5>
        </div>
      </div>
    </Col>
  );
}
