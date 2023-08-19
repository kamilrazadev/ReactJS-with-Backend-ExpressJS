import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SignUpForm from './SignUpForm/SignUpForm';
export default function SignUp() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='btn btn-outline-secondary mx-1' onClick={handleShow}>
        SignUp
      </button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className='bg-dark'>
        <Modal.Title className='text-light'>SignUp</Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-dark'>
        <SignUpForm/>
      </Modal.Body>
    </Modal>
  </>
  )
}
