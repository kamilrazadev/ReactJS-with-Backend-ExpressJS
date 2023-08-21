import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import { storage } from '../utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
//input fields puri banani hain
export default function AddProductModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [addProductBtn, setAddProductBtn] = useState("Add Product");

    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productBrand, setProductBrand] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDiscription, setProductDiscription] = useState("");
    const [productStock, setProductStock] = useState("");
    const [productRating, setProductRating] = useState("");
    const [productImg, setProductImg] = useState(null);

    const addProduct = (e) => {

        setAddProductBtn("Please Wait...");
    
        e.preventDefault()
        
        const storageRef = ref(storage, `product-images/${productImg.name}`);
        uploadBytes(storageRef, productImg).then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((url) => {
              const payload = {
                ProductName : productName, 
                ProductImg : productImg, 
                ProductCategory : productCategory, 
                ProductBrand : productBrand, 
                ProductPrice : productPrice, 
                ProductDiscription : productDiscription,
                ProductStock : productStock, 
                ProductRating : productRating
              };

            axios.post('http://localhost:1234/api/add-product', payload)
              .then( json => {
                console.log(json.data)
                setShow(false);
              }
              )
              .catch( err => console.log(err))

            })  
            .catch((error) => {
              console.log(error.message)
            });

        });
      }

  return (
    <>
      <button className='btn btn-secondary mx-1' onClick={handleShow}>
        Add Product
      </button>

      <Modal show={show} onHide={handleClose} backdrop='static'>
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title className='text-light'>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>

        <form className="form" onSubmit={addProduct}>
            <div className="field">
                
                <input
                placeholder="Product Name"
                className="input-field"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                />
            </div>
            <div className="field">
                
                <input 
                style={{borderRadius: '20px'}}
                placeholder="Product Image" 
                className="input-field" 
                type="file" 
                id='formFile'
                onChange={(e) => setProductImg(e.target.files[0])}  
                />
            </div>
            <div className="btn">
                <button className="button1">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{addProductBtn}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </button>

            </div>
            </form>
                    </Modal.Body>
                    
                </Modal>
    </>
  )
}
