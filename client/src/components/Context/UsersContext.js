import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
// import { response } from "express";
const { v4: uuidv4 } = require("uuid");
export const UsersContext = createContext(null);

    export const  UsersProvider = ({children}) => {
        const {
            isLoading,
            isAuthenticated,
            error,
            user,
            loginWithRedirect,
            logout,
          } = useAuth0();
          console.log(user);
          console.log(isAuthenticated);
    const [currentUserID, setCurrentUserID]=useState(null);
               
       
        useEffect(() => {
            const addUserToMongo = async () => {
                console.log("in use effect", isAuthenticated)
              if (isAuthenticated) {
                  await fetch("/api/user/create-user", {
                    method: "POST", 
                    headers: {"Content-Type": "application/json",},
                    body: JSON.stringify({
                        _id: uuidv4(), 
                        email: user.email,
                        nickname:user.nickname,
                        avatar:user.picture,
                        savedPalettes:[],
                        friends: []
                    })})
                    .then((res)=>res.json())
                    .then((data) => {
                        console.log(data.message)
                        setCurrentUserID(data.data);
                    })
                }};
            addUserToMongo();
          }, [isAuthenticated]);
        


    return (
        <UsersContext.Provider
        value={{
            currentUserID
            }}>
        {children}
        </UsersContext.Provider>
    )

    }

    

