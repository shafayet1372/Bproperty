import React from "react";
import { Col, Dropdown, ListGroup } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import DropDownContainer from "./DropDownContainer";
import style from "../css/style.module.css";
const purpose = ["Rent", "Buy"];
export default function Purpose({ changePurposeHandler, purposeType }) {
  return (
    <Col sm={2} className="p-1">
      <DropDownContainer type="PURPOSE" subtitle={purposeType}>
        <Dropdown.Menu
          className=" p-1"
          style={{ minWidth: "100%", fontSize: "12px" }}
        >
          <ListGroup as="ul" className=" p-0">
            {purpose.map((x) => (
              <ListGroup.Item
                className={style.listItem}
                as="li"
                active={purposeType == x}
                key={uuidv4()}
                onClick={() => changePurposeHandler(x)}
              >
                {x}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Dropdown.Menu>
      </DropDownContainer>
      {/* <Dropdown style={{ minWidth: "100%" }}>
        <Dropdown.Toggle
          id="dropdown-basic"
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            color: "black",
            textAlign: "left",
            padding: "0px 15px",
            width: "100%",
          }}
        >
          <small
            className="text-secondary fw-bold "
            style={{ fontSize: "10px" }}
          >
            PURPOSE
          </small>
          <br />
          Buy
        </Dropdown.Toggle>

        <Dropdown.Menu
          className=" p-1"
          style={{ minWidth: "100%", fontSize: "12px" }}
        >
          <ListGroup as="ul" className=" p-0">
            <ListGroup.Item as="li" active>
              BUY
            </ListGroup.Item>
            <ListGroup.Item as="li">RENT</ListGroup.Item>
          </ListGroup>
        </Dropdown.Menu>
      </Dropdown> */}
    </Col>
  );
}
