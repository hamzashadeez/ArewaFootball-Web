import React from "react";
import Modal from "react-bootstrap/Modal";
import { useRecoilState } from "recoil";
import { show } from "../Recoil/PostModelState";

function PostModal() {
  const [showState, setShowState] = useRecoilState(show);

  const handleClose = () => setShowState(false);
  return (
    <Modal show={showState} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    </Modal>
  );
}

export default PostModal;
