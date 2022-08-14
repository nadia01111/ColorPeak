import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

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

        const [currentUser, setCurrentUser] = useState(null);
        const [friends, setFriends] = useState(null);
        const [loading, setLoading] = useState("false");
        // const [userEmail, setUserEmail] = useState(user.email)
        const { userID } = useParams();

    useEffect(() => {
            //     fetch(`/api/users/${userEmail}`)
            //     .then ((res) => res.json())
            //     .then((data)=> {
            //         console.log(data.data);
            //         // setCurrentUser(data?.data)
            // })
            //     .catch((err) => {
            //         throw new Error (err.stack)
            //     })
            },[])
    


    return (
        <UsersContext.Provider
        value={{
            // userData, setUserData,
            currentUser, setCurrentUser,
            friends, setFriends,
            loading, setLoading
            }}>
        {children}
        </UsersContext.Provider>
    )

    }

    

