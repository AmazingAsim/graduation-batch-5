import React from 'react'

export default function Productcard({product}) {
  return (
    <div className='card rounded shadow'>
        <img src={product.image} alt="" className='card-img-fluid' />
        <p>{product.name}</p>
        <p>{product.price}</p>
    </div>
  )
}
