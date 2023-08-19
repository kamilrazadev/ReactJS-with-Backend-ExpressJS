import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import LoginForm from './LoginForm/LoginForm';
import './LoginForm/LoginForm.css'

export default function Login() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='btn btn-secondary mx-1' onClick={handleShow}>
        Login
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title className='text-light'>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
            <LoginForm />
        </Modal.Body>
        
      </Modal>
    </>
  )
}
