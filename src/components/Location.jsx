import React from "react";
import { Col, Form, ListGroup } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars-2";
import regexifyString from "regexify-string";
import style from "../css/style.module.css";

export default function Location({
  searchHandler,
  search,
  getAllAddress,
  selectAddressHandler,
  selectMode,
}) {
  let getRegexifiedData = (data) => {
    return regexifyString({
      pattern: new RegExp(`${search}`, "i"),
      decorator: (match, index) => {
        if (index == 0) {
          return <span className="bg-info text-white">{match}</span>;
        }
        return null;
      },
      input: data,
    });
  };

  return (
    <Col sm={3} className="p-1">
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
          position: "relative",
        }}
      >
        <small className="text-secondary fw-bold" style={{ fontSize: "10px" }}>
          LOCATION
        </small>
        <br />
        <Form.Control
          type="text"
          className={style.input_fix}
          onChange={searchHandler}
          value={search}
        />

        <div
          style={{
            position: "absolute",
            zIndex: "999",
            left: "0",
            width: "100%",
            border: "1px solid white",
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
            <ListGroup as="ul" className=" p-0">
              {search &&
                !selectMode &&
                getAllAddress.map((x) => (
                  <ListGroup.Item
                    as="li"
                    className="border-top"
                    onClick={() => selectAddressHandler(x)}
                  >
                    {getRegexifiedData(x)}
                  </ListGroup.Item>
                ))}
              {!getAllAddress.length && search && (
                <ListGroup.Item as="li" className="border-top">
                  no results
                </ListGroup.Item>
              )}
            </ListGroup>
          </Scrollbars>
        </div>
      </div>
    </Col>
  );
}
