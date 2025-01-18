import {createContext, useState} from 'react'

export const UserContext = createContext();


export const UserProvider = ({children}) => {
    const [userData,setUserData]  = useState({name:"Asim",email:"asim@gmail.com"});
    return(
        <UserContext.Provider value={{userData,setUserData}}>
            {children}
        </UserContext.Provider>
    )
}



