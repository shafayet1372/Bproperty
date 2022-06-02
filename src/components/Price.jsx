import React, { useState, useEffect } from "react";
import {
  Col,
  ListGroup,
  Dropdown,
  Form,
  ListGroupItem,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

import { Scrollbars } from "react-custom-scrollbars-2";
import DropDownContainer from "./DropDownContainer";
import style from "../css/style.module.css";
export default function Price({
  min,
  max,
  changeMaxPriceHandler,
  changeMinPriceHandler,
  changePriceHandler,
  resetPriceHandler,
}) {
  let [focusInput, setFocusInput] = useState("");
  let showMiniMumPriceList = () => {
    let minimumList = [];
    let len = max == 0 ? 20000000 : max - 500000;
    if (max % 500000 != 0) {
      minimumList.push(
        <ListGroup.Item
          as="li"
          active
          onClick={() => changeMinPriceHandler(0)}
          className={style.listItem}
        >
          0
        </ListGroup.Item>
      );
      return minimumList;
    }
    for (let i = 0; i <= len; i += 500000) {
      minimumList.push(
        <ListGroup.Item
          as="li"
          active={min == i}
          onClick={() => changeMinPriceHandler(i)}
          className={style.listItem}
        >
          {i.toLocaleString()}
        </ListGroup.Item>
      );
    }
    return minimumList;
  };

  let showMaximumPriceList = () => {
    let maximumList = [];
    maximumList.push(
      <ListGroup.Item
        as="li"
        active={max == 0}
        onClick={() => changeMaxPriceHandler("any")}
        className={style.listItem}
      >
        Any
      </ListGroup.Item>
    );
    let start = min == 0 ? 0 : min % 500000 != 0 ? 0 : min;

    for (let i = start; i < 20000000; i += 500000) {
      maximumList.push(
        <ListGroup.Item
          as="li"
          action
          active={i + 500000 == max}
          onClick={() => changeMaxPriceHandler(i + 500000)}
          className={style.listItem}
        >
          {(i + 500000).toLocaleString()}
        </ListGroup.Item>
      );
    }
    return maximumList;
  };
  return (
    <Col sm={4} className="p-1 ">
      <DropDownContainer type="PRICE" rangeF={min} rangeT={!max ? "Any" : max}>
        <Dropdown.Menu className="px-2 w-100  " style={{ fontSize: "14px" }}>
          <div className="d-flex w-100 my-2">
            <div className="me-1 ">
              <div className="sticky-top bg-white">
                <h6 className="text-center">MIN:</h6>

                <OverlayTrigger
                  key="top"
                  placement="top"
                  show={min > max && max && focusInput == "min"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      minimum price should be less than maximum price
                    </Tooltip>
                  }
                >
                  <Form.Control
                    type="text"
                    value={min ? min : ""}
                    placeholder={!min ? "0" : min}
                    name="min"
                    onChange={changePriceHandler}
                    onFocus={(e) => setFocusInput(e.target.name)}
                  />
                </OverlayTrigger>
              </div>
              <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                autoHeight
                autoHeightMin={0}
                autoHeightMax={300}
                thumbMinSize={5}
              >
                <ListGroup as="ul" className=" p-0 text-center">
                  {showMiniMumPriceList()}
                </ListGroup>
              </Scrollbars>
            </div>

            <div>
              <div className="sticky-top bg-white">
                <h6 className="text-center">MAX:</h6>

                <OverlayTrigger
                  key="top"
                  placement="top"
                  show={min > max && min && max && focusInput == "max"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      maximum price should be greater than minimum price
                    </Tooltip>
                  }
                >
                  <Form.Control
                    type="text"
                    value={max ? max : ""}
                    placeholder={!max ? "any" : max}
                    name="max"
                    onChange={changePriceHandler}
                    onFocus={(e) => setFocusInput(e.target.name)}
                  />
                </OverlayTrigger>
              </div>
              <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                autoHeight
                autoHeightMin={0}
                autoHeightMax={300}
                thumbMinSize={5}
              >
                <ListGroup as="ul" className="text-center p-0 ">
                  {showMaximumPriceList()}
                </ListGroup>
              </Scrollbars>
            </div>
          </div>

          <ListGroupItem
            className="border-0 p-0 rounded bg-dark text-white d-inline-block"
            onClick={resetPriceHandler}
          >
            reset
          </ListGroupItem>
        </Dropdown.Menu>
      </DropDownContainer>
    </Col>
  );
}
