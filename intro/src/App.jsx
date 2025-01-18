import React, { useEffect, useState,useContext } from 'react'
import { UserContext } from './Global/userContext';
import axios from 'axios'
export default function App() {

  const {userData,setUserData} = useContext(UserContext);
  console.log(userData);

  const url = 'https://jsonplaceholder.typicode.com/users'
  const [users,setUsers] = useState([]);
  useEffect(function(){
   try {
    async function getUsersData(){
      let response = await axios.get(url);
      console.log(response);
      setUsers(response.data);
    }
    getUsersData();
   } catch (error) {
      console.log(error);
   }
  },[])

  return (
    <div>
      <h1>Users List</h1>
      {
        users.map((user)=>
          (
            <div>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <hr />
            </div>
          )
        )
      }
    </div>
  )
}
