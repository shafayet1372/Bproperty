import React, { useState } from "react";
import {
  Col,
  Dropdown,
  Form,
  ListGroup,
  Tooltip,
  ListGroupItem,
  OverlayTrigger,
} from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars-2";
import DropDownContainer from "./DropDownContainer";
import style from "../css/style.module.css";
export default function Area({
  min,
  max,
  changeAreaHandler,
  resetAreaHandler,
  changeMinAreaHandler,
  changeMaxAreaHandler,
}) {
  let [focusInput, setFocusInput] = useState("");
  let showMiniMumPriceList = () => {
    let minimumList = [];
    let len = max == 0 ? 42000 : max - 200;

    minimumList.push(
      <ListGroup.Item
        as="li"
        active={min == 0}
        onClick={() => changeMinAreaHandler(0)}
        className={style.listItem}
      >
        0
      </ListGroup.Item>
    );

    for (let i = 800; i <= len; i += 200) {
      minimumList.push(
        <ListGroup.Item
          as="li"
          active={min == i}
          onClick={() => changeMinAreaHandler(i)}
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
        onClick={() => changeMaxAreaHandler("any")}
        className={style.listItem}
      >
        Any
      </ListGroup.Item>
    );
    let start = min == 0 ? 600 : min % 200 != 0 ? 0 : min;

    for (let i = start; i < 42000; i += 200) {
      maximumList.push(
        <ListGroup.Item
          as="li"
          action
          active={i + 200 == max}
          onClick={() => changeMaxAreaHandler(i + 200)}
          className={style.listItem}
        >
          {(i + 200).toLocaleString()}
        </ListGroup.Item>
      );
    }
    return maximumList;
  };
  return (
    <Col sm={3} className="p-1 ">
      <DropDownContainer type="AREA" rangeF={min} rangeT={!max ? "Any" : max}>
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
                    onChange={changeAreaHandler}
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
                    onChange={changeAreaHandler}
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
            onClick={resetAreaHandler}
          >
            reset
          </ListGroupItem>
        </Dropdown.Menu>
      </DropDownContainer>
      {/* <DropDownContainer type="AREA" rangeF={0} rangeT="Any">
        <Dropdown.Menu
          className="px-2 w-100  overflow-hidden"
          style={{ height: "400px" }}
        >
          <div className="d-flex w-100 my-2">
            <div>
              <div className="sticky-top bg-white">
                <h6 className="text-center">MIN:</h6>

                <Form.Control type="text" placeholder="0" />
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
                {" "}
                <ListGroup as="ul" className="text-center p-0 ">
                  <ListGroup.Item href="#" as="li">
                    500
                  </ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>

                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                </ListGroup>
              </Scrollbars>
            </div>
            <div className="mx-2 ">
              <div className="sticky-top bg-white">
                <h6 className="text-center">MAX:</h6>

                <Form.Control type="text" placeholder="0" />
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
                {" "}
                <ListGroup as="ul" className="text-center p-0 ">
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>

                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                </ListGroup>
              </Scrollbars>
            </div>
          </div>
        </Dropdown.Menu>
      </DropDownContainer> */}
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
            AREA(SQFT)
          </small>
          <br />0 <small>to</small> Any
        </Dropdown.Toggle>

        <Dropdown.Menu
          className="px-2 w-100  overflow-hidden"
          style={{ height: "400px" }}
        >
          <div className="d-flex w-100 my-2">
            <div>
              <div className="sticky-top bg-white">
                <h6 className="text-center">MIN:</h6>

                <Form.Control type="text" placeholder="0" />
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
                {" "}
                <ListGroup as="ul" className="text-center p-0 ">
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>

                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                </ListGroup>
              </Scrollbars>
            </div>
            <div className="mx-2 ">
              <div className="sticky-top bg-white">
                <h6 className="text-center">MAX:</h6>

                <Form.Control type="text" placeholder="0" />
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
                {" "}
                <ListGroup as="ul" className="text-center p-0 ">
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>

                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                  <ListGroup.Item as="li">500</ListGroup.Item>
                </ListGroup>
              </Scrollbars>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown> */}
    </Col>
  );
}
