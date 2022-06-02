import React from "react";
import { Col, Dropdown, ListGroup } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars-2";
import DropDownContainer from "./DropDownContainer";
import style from "../css/style.module.css";
import { v4 as uuidv4 } from "uuid";
export default function Beds({ beds, changeBedsHandler }) {
  return (
    <Col sm={2} className="p-1">
      <DropDownContainer
        type="BEDS"
        subtitle={
          !beds.length
            ? "All"
            : beds
                .sort((a, b) => a - b)
                .slice(0, 3)
                .join(",") + "..."
        }
      >
        <Dropdown.Menu
          className=" p-1 overflow-auto"
          style={{
            minWidth: "100%",
            fontSize: "12px",
            height: "250px",
          }}
        >
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            autoHeight
            autoHeightMin={0}
            autoHeightMax={200}
            thumbMinSize={5}
          >
            {" "}
            <ListGroup as="ul" className="text-center p-0">
              <ListGroup.Item
                as="li"
                active={beds.find((x) => x == "All") || !beds.length}
                onClick={() => changeBedsHandler("All")}
                key={uuidv4()}
                className={style.listItem}
              >
                All
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                active={beds.find((x) => x == "Studio")}
                onClick={() => changeBedsHandler("Studio")}
                key={uuidv4()}
                className={style.listItem}
              >
                STUDIO
              </ListGroup.Item>
              {Array(8)
                .fill(0)
                .map((x, i, arr) =>
                  i != arr.length - 1 ? (
                    <ListGroup.Item
                      as="li"
                      active={beds.find((x) => x == (i + 1).toString())}
                      onClick={() => changeBedsHandler((i + 1).toString())}
                      key={uuidv4()}
                      className={style.listItem}
                    >
                      {i + 1}
                    </ListGroup.Item>
                  ) : (
                    <ListGroup.Item
                      as="li"
                      active={beds.find((x) => x == (i + 1).toString())}
                      key={uuidv4()}
                      onClick={() => changeBedsHandler((i + 1).toString())}
                      className={style.listItem}
                    >
                      {i + 1}+
                    </ListGroup.Item>
                  )
                )}
            </ListGroup>
          </Scrollbars>
        </Dropdown.Menu>
      </DropDownContainer>
    </Col>
  );
}
