import React from "react";
import { Col, ListGroup } from "react-bootstrap";
import { ImCross } from "../js/icons";
export default function FilterList({
  filterLists,
  removeFilterListHandler,
  resetAllFilters,
}) {
  let modifiedList = (data) => {
    let arr = data.lists.slice();
    let sortedArr = arr.slice().sort((a, b) => {
      if (a == "Studio" || b == "Studio") {
        return null;
      }
      return parseInt(a) - parseInt(b);
    });
    console.log(sortedArr);
    return arr.length > 1
      ? `${
          sortedArr.find((x) => x == "Studio")
            ? [
                sortedArr.slice(sortedArr.length - 1, sortedArr.length),
                ...sortedArr.slice(0, sortedArr.length - 2),
              ].join(",")
            : sortedArr.slice(0, sortedArr.length - 1).join(",")
        } and ${
          !sortedArr.find((x) => x == "Studio")
            ? sortedArr.slice(sortedArr.length - 1, sortedArr.length)
            : sortedArr.slice(sortedArr.length - 2, sortedArr.length - 1)
        } ${data.type}`
      : `${sortedArr} ${data.type}`;
  };

  return (
    <Col sm={12}>
      <ListGroup
        as="ul"
        className="text-center p-1 flex-row"
        style={{ fontSize: "12px" }}
      >
        {filterLists.map((x) => {
          if (x.type == "price") {
            return (
              <ListGroup.Item
                as="li"
                className="mx-1 p-0 d-flex border-1 "
                style={{ cursor: "pointer" }}
              >
                <div className="mx-2">
                  {" "}
                  {x.min} to - {x.max}
                </div>
                <div className="px-1">
                  <ImCross onClick={() => removeFilterListHandler(x.type)} />
                </div>
              </ListGroup.Item>
            );
          }
          if (x.type == "area") {
            return (
              <ListGroup.Item
                as="li"
                className="mx-1 p-0 d-flex border-1 "
                onClick={() => removeFilterListHandler(x.type)}
                style={{ cursor: "pointer" }}
              >
                <div className="mx-2">
                  {" "}
                  {x.min} sqft - {x.max}
                </div>
                <div className="px-1">
                  <ImCross onClick={() => removeFilterListHandler(x.type)} />
                </div>
              </ListGroup.Item>
            );
          }
          if (x.type == "beds" || x.type == "baths") {
            return (
              <ListGroup.Item
                as="li"
                className="mx-1 p-0 d-flex border-1 "
                onClick={() => removeFilterListHandler(x.type)}
                style={{ cursor: "pointer" }}
              >
                <div className="mx-2">{modifiedList(x)}</div>
                <div className="px-1">
                  <ImCross onClick={() => removeFilterListHandler(x.type)} />
                </div>
              </ListGroup.Item>
            );
          }
        })}
        {filterLists.length ? (
          <p className="text-success m-0" onClick={resetAllFilters}>
            Clear All Filters
          </p>
        ) : null}
        {/* <ListGroup.Item as="li" className="mx-1 border-1 p-0 d-flex ">
          <div className="mx-2"> 800 sqft -any</div>
          <div className="px-1">
            <ImCross />
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="mx-1 border-0 p-0 d-flex ">
          <p className="text-success  m-0">clear all filters</p>
        </ListGroup.Item> */}
      </ListGroup>
    </Col>
  );
}
