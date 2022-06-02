import React from "react";
import { Tab, Tabs, Col, Dropdown, ListGroup } from "react-bootstrap";
import { residential, commercial } from "../js/propertyType";
import { v4 as uuidv4 } from "uuid";
import DropDownContainer from "./DropDownContainer";
import style from "../css/style.module.css";
export default function PropertyType({
  propertyTypeHandler,
  subtile,
  propertyType,
  resetPropertyHandler,
}) {
  let { type, propertyName } = propertyType;
  return (
    <Col sm={3} className="p-1">
      <DropDownContainer
        type="PROPERTY TYPE"
        subtitle={!subtile ? "Residential" : subtile}
      >
        <Dropdown.Menu className="px-2 w-100">
          {/* <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        BUY
      </ListGroup.Item>
      <ListGroup.Item as="li">RENT</ListGroup.Item>
    </ListGroup> */}
          <Tabs defaultActiveKey="residential" className="mb-3">
            <Tab
              eventKey="residential"
              title="Residential"
              style={{ fontSize: "12px" }}
            >
              <ListGroup
                as="ul"
                className="d-flex text-center flex-row flex-wrap justify-content-between"
              >
                {residential.map((x) => (
                  <ListGroup.Item
                    as="li"
                    href="#"
                    className={`px-2 my-1 w-50 border overflow-hidden ${style.property_list}`}
                    active={type == "Residential" && propertyName == x}
                    key={uuidv4()}
                    onClick={() =>
                      propertyTypeHandler({ type: "Residential", name: x })
                    }
                  >
                    {x}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Tab>
            <Tab
              eventKey="commercial"
              title="COMMERCIAL"
              style={{ fontSize: "12px" }}
            >
              <ListGroup
                as="ul"
                className="d-flex text-center flex-row flex-wrap justify-content-between"
              >
                {commercial.map((x) => (
                  <ListGroup.Item
                    as="li"
                    href="#"
                    className={`px-2 my-1 w-50 border overflow-hidden ${style.property_list}`}
                    active={type == "Commercial" && propertyName == x}
                    key={uuidv4()}
                    onClick={() =>
                      propertyTypeHandler({ type: "Commercial", name: x })
                    }
                  >
                    {x}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Tab>
          </Tabs>
          <ListGroup.Item
            as="li"
            href="#"
            className="border-0 bg-dark d-inline text-white p-0 rounded"
            onClick={resetPropertyHandler}
          >
            {" "}
            Reset
          </ListGroup.Item>
          {/* <small
            className=" justify-content-end bg-dark text-white rounded"
            onClick={resetPropertyHandler}
            href="#"
          >
          
          </small> */}
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
            PROPERTY TYPE
          </small>
          <br />
          Residential
        </Dropdown.Toggle>

       
      </Dropdown> */}
    </Col>
  );
}
