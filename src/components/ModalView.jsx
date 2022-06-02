import React from "react";
import { Modal } from "react-bootstrap";
export default function ModalView({ show, setShowHandler }) {
  return (
    <Modal show={show} onHide={setShowHandler}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-danger">
          Please use Desktop Version(or {">="}768px)
        </p>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
