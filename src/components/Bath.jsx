import React from "react";
import { Col, Dropdown, ListGroup } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars-2";
import { v4 as uuidv4 } from "uuid";
import DropDownContainer from "./DropDownContainer";
import style from "../css/style.module.css";
export default function Bath({ bathsHandler, baths }) {
  return (
    <Col sm={2} className="p-1">
      <DropDownContainer
        type="BATH"
        subtitle={!baths.length ? "All" : baths.slice(0, 3).join(",") + "..."}
      >
        <Dropdown.Menu
          className=" p-1 "
          style={{
            minWidth: "100%",
            fontSize: "12px",
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
                active={!baths.length}
                onClick={() => bathsHandler("All")}
                className={style.listItem}
              >
                ALL
              </ListGroup.Item>
              {Array(6)
                .fill(0)
                .map((x, i, arr) =>
                  arr.length - 1 != i ? (
                    <ListGroup.Item
                      key={uuidv4()}
                      as="li"
                      active={baths.find((x) => x == (i + 1).toString())}
                      onClick={() => bathsHandler((i + 1).toString())}
                      className={style.listItem}
                    >
                      {i + 1}
                    </ListGroup.Item>
                  ) : (
                    <ListGroup.Item
                      key={uuidv4()}
                      as="li"
                      active={baths.find((x) => x == (i + 1).toString())}
                      onClick={() => bathsHandler((i + 1).toString())}
                      className={style.listItem}
                    >
                      {`${i + 1}+`}
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
