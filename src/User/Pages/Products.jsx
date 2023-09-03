import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

export default function Products() {

    const [cartItems, setCartItems] = useState([]); 
    const [product, setProduct] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:1234/api/get-all-products')
            .then( json => {
                setProduct(json.data.product)
            })
            .catch( (err) => console.log(err.message))
    })

    const addToCart = (productData) => {
        const existingProductIndex = cartItems.findIndex((item) => item._id === productData._id);
    
        if (existingProductIndex !== -1) {
          const updatedCartItems = [...cartItems];
          updatedCartItems[existingProductIndex].productQuantity += 1;
          updatedCartItems[existingProductIndex].totalPrice = +(updatedCartItems[existingProductIndex].ProductPrice) * updatedCartItems[existingProductIndex].productQuantity;          
          setCartItems(updatedCartItems);
        } else {
          const updatedProductData = { ...productData, productQuantity: 1, totalPrice: +(productData.ProductPrice)};
          setCartItems([...cartItems, updatedProductData]);
        }
      };

   useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div className='container'>

    <div className='text-center my-5'>
        <h1>Products</h1>
        <p>Our All Products</p>
    </div>

    <div className='row'>
        {
            product.map( (val, key) => 
                <div className='col-md-4 my-2' key={key}>  
                    <div className="card product_card">
                        <img style={{height: '200px'}} src={val.ProductImg} />
                        Price<h4>${val.ProductPrice}</h4>
                        <div className="card__content">
                            <div>
                                <p className="product_card_title">{val.ProductName}</p>
                                <p className='text-dark'>{val.ProductDiscription}</p>
                                Brand: <p className="product_card_title d-inline me-5">{val.ProductBrand}</p>
                                Category: <p className="product_card_title d-inline">{val.ProductCategory}</p>
                            </div>
                            <NavLink className='buy-btn' onClick={() => addToCart(val)}>Buy Now</NavLink>
                        </div>
                    </div>

                </div>
            )
        }
    </div>

</div>
  )
}
