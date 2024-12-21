import React from 'react'
import Productcard from './Productcard'
export default function Products() {
    let productList = [
        {id:1,name:'laptop',price:50000,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToiJZgatF3QsL4VTjtI4mEuAU3YgW-FKmWmA&s"},
        {id:2,name:'mobile',price:10000,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToiJZgatF3QsL4VTjtI4mEuAU3YgW-FKmWmA&s"},
        {id:3,name:'tv',price:20000,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToiJZgatF3QsL4VTjtI4mEuAU3YgW-FKmWmA&s"},
        {id:4,name:'refrigerator',price:30000,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToiJZgatF3QsL4VTjtI4mEuAU3YgW-FKmWmA&s"}
    ]
  return (
    <div>
        <h1>Welcome to shopoholic</h1>

        <div className="container">
            <div className="row">
                {
                    productList.map(p=>(
                    <div className='col-sm-3 p-2'>
                        <Productcard product={p} />
                    </div>
                ))
                }
            </div>
        </div>

    </div>
  )
}
