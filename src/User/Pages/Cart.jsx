import React from 'react'

export default function Cart() {

  const storedCartItems = localStorage.getItem('cartItems');
  const cartItemsArray = storedCartItems ? JSON.parse(storedCartItems) : [];

  console.log(cartItemsArray)

  return (
    <div className='cart-section'>
      <h3>MY CART</h3>

      {
        cartItemsArray.map( ( value, key ) => (
          <div className='items-div' key={key}>
          <img src={value.ProductImg} alt='Product Image' style={{width: '50px', height: '50px', margin: '10px 0', marginRight: '20px'}}/>
            <div>
              <p><span>Name</span>: {value.ProductName}</p> 
              <p><span>Price</span>: <span className='color-blue'>{value.ProductPrice}$</span></p>
            </div> 
            <div>
              <p><span>Quantity</span>: {value.productQuantity}</p>
              <p><span>Brand</span>: {value.ProductBrand}</p>
            </div>
        </div>
        ))
      }

    </div>
  )
}
