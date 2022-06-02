import React from "react";
import { Dropdown, ListGroup, Col } from "react-bootstrap";
import { BsSortUp } from "react-icons/bs";
import style from "../css/style.module.css";

const sorting = ["Lowest Price", "Highest Price"];
export default function Sorting({ sortingHandler, sortingType }) {
  return (
    <Col md={3} sm={12} className="my-1">
      <Dropdown style={{ minWidth: "100%" }}>
        <Dropdown.Toggle
          id="dropdown-basic"
          style={{
            backgroundColor: "white",
            border: "1px solid grey",
            color: "black",
            textAlign: "left",
            padding: "0px 15px",
            minWidth: "150px",
          }}
        >
          <BsSortUp />
          <small
            className="text-secondary fw-bold "
            style={{ fontSize: "12px" }}
          >
            {sortingType}
          </small>
        </Dropdown.Toggle>

        <Dropdown.Menu
          className=" p-1"
          style={{ minWidth: "100%", fontSize: "12px" }}
        >
          <ListGroup as="ul" className=" p-0 text-center">
            {sorting.map((x) => (
              <ListGroup.Item
                as="li"
                active={sortingType == x}
                onClick={() => sortingHandler(x)}
                className={style.listItem}
              >
                {x}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
  );
}
