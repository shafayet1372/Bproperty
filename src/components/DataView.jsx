import React from "react";
import { Col, ListGroup, Button } from "react-bootstrap";
import { FaBath, FaBed, BsGrid3X3, IoCallSharp, MdEmail } from "../js/icons";
import image from "../image/background.jpg";

export default function DataView({ datas }) {
  return (
    <Col sm={12}>
      <ListGroup as="ul" className="bg-white p-0">
        {datas.map((x) => (
          <ListGroup.Item as="li" className="my-2 border p-0" key={x.id}>
            <div className="d-flex">
              <div style={{ width: "30%", height: "auto" }}>
                <img
                  src={image}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div style={{ width: "70%" }} className="mx-5">
                <h6>
                  BDT <span style={{ fontSize: "30px" }}>{x.price}</span>
                </h6>
                <p>{`${x.location}, ${x.city}`}</p>
                <p>{x.propertyType.propertyName}</p>
                <p className="text-success fw-bold">
                  {x.purpose == "sell"
                    ? `Brand New ${x.area} SFT Apartment For Sale`
                    : `Worthy ${x.area} Sq FT is For Rent`}
                </p>
                <div className="d-flex ">
                  <div className=" d-flex align-items-center ">
                    <FaBed className="mx-1" />
                    <small>{x.beds}</small>
                  </div>
                  <div className="mx-2 d-flex align-items-center ">
                    <FaBath className="mx-1" />
                    {x.baths}
                  </div>
                  <div className="mx-2 d-flex align-items-center ">
                    <BsGrid3X3 className="mx-1" />
                    {x.area}
                  </div>
                </div>
                <div className="my-2 d-flex">
                  <Button
                    variant="success"
                    className="px-5 d-flex align-items-center"
                  >
                    <IoCallSharp className="mx-1" />
                    Call
                  </Button>
                  <Button
                    variant="success"
                    className="mx-3 d-flex px-5 align-items-center"
                  >
                    <MdEmail className="mx-1" /> Email
                  </Button>
                </div>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  );
}
