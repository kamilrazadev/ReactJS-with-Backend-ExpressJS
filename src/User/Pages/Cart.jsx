import React from 'react'

export default function Cart() {

  const items = [
    {
      name: 'shoes',
      price: '10$',
      quantity: '2',
      brand: 'Nike'
    },
    {
      name: 'shirt',
      price: '18$',
      quantity: '1',
      brand: 'Nike'
    }
  ]

  return (
    <div className='cart-section'>
      <h3>MY CART</h3>

      {
        items.map( ( value, key ) => (
          <div className='items-div' id='key'>
            <div>
              <p><span>Name</span>: {value.name}</p> 
              <p><span>Price</span>: <span className='color-blue'>{value.price}</span></p>
            </div> 
            <div>
              <p><span>Quantity</span>: {value.quantity}</p>
              <p><span>Brand</span>: {value.brand}</p>
            </div>
        </div>
        ))
      }

    </div>
  )
}
