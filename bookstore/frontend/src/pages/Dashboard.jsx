import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export default function Dashboard() {
  const navigate = useNavigate();
  const [books,setBooks] = useState([]);
  let base_uri = 'http://localhost:8080';
  async function getAllBooks(){
    try {
      let result = await axios.get(`${base_uri}/books`);
      if(result.status === 200){
        setBooks(result.data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(function(){
    getAllBooks();
  },[]);


  return (
    <div>
        <h1 className='p-3 bg-secondary-subtle display-3 fw-bolder'>
          ALL BOOKS THAT YOU LOVE AT ONE PLACE!
        </h1>

        <div className="container">
           <div className="row">
              {
                books.map(book=>(
                  <div key={book.id}>
                    <div className="col-sm-4">
                        <div className="card" onClick={()=>{navigate(`/product/${book.id}`)}}>
                            <img src={`${base_uri}/books/getimage/${book.image}`} alt="" className="card-img-top" />
                            <div className="card-body">
                                <h3>{book.name}</h3>
                            </div>
                        </div>
                    </div>
                  </div>
                ))
              }
           </div>
        </div>
    </div>
  )
}
