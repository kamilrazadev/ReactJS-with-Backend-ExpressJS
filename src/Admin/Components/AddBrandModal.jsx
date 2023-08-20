import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import Cookies from 'js-cookie'
import Modal from 'react-bootstrap/Modal';

export default function AddBrandModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [addBrandBtn, setAddBrandBtn] = useState("Add Brand");
    const [brandName, setBrandName] = useState("");
    const [brandImg, setBrandImg] = useState("");

    const addBrand = (e) => {

        setAddBrandBtn("Please Wait...");
    
        e.preventDefault()
    
        const payload = {BrandName: brandName, BrandImg : brandImg};
        console.log(payload)
    
        axios.post('http://localhost:1234/api/add-brand', payload)
          .then( json => {
            console.log(json.data)
            setShow(false);
          }
          )
          .catch( err => console.log(err))
      }

  return (
    <>
      <button className='btn btn-secondary mx-1' onClick={handleShow}>
        Add Brand
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title className='text-light'>Add Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
        <form className="form" onSubmit={addBrand}>
            <div className="field">
                
                <input
                autoComplete="off"
                placeholder="Brand Name"
                className="input-field"
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                />
            </div>
            <div className="field">
                
                <input 
                placeholder="Brand Image" 
                className="input-field" 
                type="brandImg" 
                value={brandImg}
                onChange={(e) => setBrandImg(e.target.value)}  
                />
            </div>
            <div className="btn">
                <button className="button1">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{addBrandBtn}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </button>

            </div>
            </form>
                    </Modal.Body>
                    
                </Modal>
    </>
  )
}
