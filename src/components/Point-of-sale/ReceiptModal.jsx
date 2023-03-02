import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ReceiptModal = ({ showModal, setShowModal }) => {
  const [receipt, setReceipt] = useState('');
  
  const handleClose = () => setShowModal(false);

  const handleSave = () => {
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Receipt Number</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Receipt No: </Form.Label>
            <Form.Control type="text" placeholder="2012784512" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReceiptModal;
