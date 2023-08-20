import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddBrandModal from '../Components/AddCategoryModal';

export default function Categories() {

  const [category, setCategory] = useState([]);

  useEffect( () => {
    axios.get('http://localhost:1234/api/get-all-category')
      .then( json => {
        setCategory(json.data.category)
      })
      .catch( err => console.log(err))
  })

  return (
    <>
      <div>
          <div className='d-flex align-items-center justify-content-between mt-3'>
            <h2>Categories</h2>
            <AddBrandModal />
          </div>

          <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Categories Name</th>
                    <th scope="col">Logo</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    
                    category.map( (val, key)=> 
                      <tr key={key}>
                        <th scope="row">{key + 1}</th>
                        <td>{val.CategoryName}</td>
                        <td>
                          <img style={{width: '40px'}} className='img-fluid' src={val.CategoryImg} />
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
