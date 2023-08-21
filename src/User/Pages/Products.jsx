import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Products() {

    const [product, setProduct] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:1234/api/get-all-products')
            .then( json => {
                setProduct(json.data.product)
            })
            .catch( (err) => console.log(err.message))
    })

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
                            <p className="product_card_title">{val.ProductName}</p>
                            <p className='text-dark'>{val.ProductDiscription}</p>
                            Brand: <p className="product_card_title">{val.ProductBrand}</p>
                            Category<p className="product_card_title">{val.ProductCategory}</p>
                        </div>
                    </div>

                </div>
            )
        }
    </div>

</div>
  )
}
