import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"
import { UsersContext } from "../Context/UsersContext";
import UserFeed from "./UserFeed";

const UserPage = () => {

    const {userID} = useParams();
    console.log(userID)

    // const {currentUserID} = useContext(UsersContext);

    useEffect(() => {
        console.log("hello");
        const getUser = async () => {
        const response = await fetch(`/api/users/${userID}`)
        const user = await response.json();
        console.log(user.data);
        }
        getUser()
    },[])
    return (<Wrapper>
        UserPage placeholder
        <UserFeed/>
    </Wrapper>

    )
}

const Wrapper = styled.div`
`

export default UserPage;