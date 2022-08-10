import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const UsersContext = createContext(null);


    export const  UsersProvider = ({children}) => {

        //for new users (create account)
            const [userData, setUserData] = useState({
                userName: "",
                email: "",
                password:"",
                savedColors:["#34BA3B"],
                friends:[],
            
            });
        //for existing users (logIn)
            const [currentUser, setCurrentUser] = useState(null);
            const [friends, setFriends] = useState(null);
            const [loading, setLoading] = useState("false");
            const { id } = useParams();

            useEffect(() => {
                fetch(`/api/users/${id}`)
                .then ((res) => res.json())
                .then((data)=> {
                    console.log(data.data);
                    // setCurrentUser(data?.data)
            })
                .catch((err) => {
                    throw new Error (err.stack)
                })
            },[])
    


    return (
        <UsersContext.Provider
        value={{
            userData, setUserData,
            currentUser, setCurrentUser,
            friends, setFriends,
            loading, setLoading
            }}>
        {children}
        </UsersContext.Provider>
    )

    }

    

