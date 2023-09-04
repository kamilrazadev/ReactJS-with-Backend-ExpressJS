import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Cart from './Cart';
import ProductModal from '../Components/productModal';

export default function Products() {
  const [cartItems, setCartItems] = useState([]);
  const [product, setProduct] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(0);

  useEffect(() => {
    // Retrieve cartItems from localStorage when the component mounts
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:1234/api/get-all-products')
      .then((json) => {
        setProduct(json.data.product);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const addToCart = (productData) => {
    // Clone the cartItems array
    const updatedCartItems = [...cartItems];

    // Check if the product is already in the cart
    const existingProductIndex = updatedCartItems.findIndex((item) => item._id === productData._id);

    if (existingProductIndex !== -1) {
      // If it's already in the cart, increase its quantity by 1
      updatedCartItems[existingProductIndex].productQuantity += 1;
      updatedCartItems[existingProductIndex].totalPrice =
        updatedCartItems[existingProductIndex].ProductPrice *
        updatedCartItems[existingProductIndex].productQuantity;
    } else {
      // If it's not in the cart, add it with a quantity of 1
      const updatedProductData = { ...productData, productQuantity: 1, totalPrice: +productData.ProductPrice };
      updatedCartItems.push(updatedProductData);
    }

    // Update the cartItems state
    setCartItems(updatedCartItems);

    // Store the updated cartItems in localStorage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const increaseQuantity = () => {
    console.log('increaseQuantity')
  }

  const decreaseQuantity = () => {
    console.log('decreaseQuantity')
  }

  return (
    <div className="container">
      <div className="text-center my-5">
        <h1>Products</h1>
        <p>Our All Products</p>
      </div>

      <div className="row">
        {product.map((val, key) => (
          <div className="col-md-4 my-2" key={key}>
            <div className="card product_card">
              <img style={{ height: '200px' }} src={val.ProductImg} alt={val.ProductName} />
              Price<h4>${val.ProductPrice}</h4>
              <div className="card__content">
                <div>
                  <p className="product_card_title mb-1" style={{ fontSize: '20px', color: '#082861' }}>
                    {val.ProductName}
                  </p>
                  Brand: <p className="product_card_title mb-0">{val.ProductBrand}</p>
                  Category: <p className="product_card_title ">{val.ProductCategory}</p>
                </div>
                <div className='d-flex align-items-center'>
                  <NavLink className="buy-btn mb-1" onClick={() => addToCart(val)}>
                    Add to Cart
                  </NavLink>
                  <div> <span className='quantityhandle-btn' onClick={decreaseQuantity}>-</span>  {itemQuantity} <span className='quantityhandle-btn' onClick={increaseQuantity}>+</span> </div>
                </div>
                  <ProductModal />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
