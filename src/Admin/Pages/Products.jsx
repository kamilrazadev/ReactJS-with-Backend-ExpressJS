import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddBrandModal from '../Components/AddBrandModal';

export default function Products() {

  const [product, setProduct] = useState([]);

  useEffect( () => {
    axios.get('http://localhost:1234/api/get-all-product')
      .then( json => {
        setProduct(json.data.product)
      })
      .catch( err => console.log(err))
  })

  return (
    <>
      <div>
          <div className='d-flex align-items-center justify-content-between mt-3'>
            <h2>Product</h2>
            <AddBrandModal />
          </div>

          <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Brand Name</th>
                    <th scope="col">Logo</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    
                    product.map( (val, key)=> 
                      <tr key={key}>
                        <th scope="row">{key + 1}</th>
                        <td>{val.BrandName}</td>
                        <td>
                          <img style={{width: '40px'}} className='img-fluid' src={val.BrandImg} />
                        </td>
                      </tr>
                    )
                  
                  }
                </tbody>
              </table>

            </div>
            
      </div>
    </>
  )
}