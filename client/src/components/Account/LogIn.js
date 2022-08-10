
import styled from "styled-components"
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UsersContext } from "../Context/UsersContext";
import { useAuth0 } from "@auth0/auth0-react";

const LogIn = () => {
    const {currentUser, setCurrentUser, loading, setLoading } = useContext(UsersContext);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    let navigate = useNavigate();

    // const logIn = (ev) => {
    //     ev.preventDefault();
    //     fetch("/api/signin", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({name:email}),
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if (data.status === 200) {
    //             setCurrentUser(data.data);
    //             console.log(data.data)
    //             // sessionStorage.setItem('user',JSON.stringify(data.data));
    //             // navigate("/");
    //             setLoading(!loading);
    //             // setUserFriendsArr(data.data.friends)
    //         } else {
    //             setErrorMessage(data.message)
    //         }

    //     })
    // };
    
        const { loginWithRedirect } = useAuth0();
      
    //     return <button onClick={() => loginWithRedirect()}>Log In</button>;
    //   };
      


    return (
    <Wrapper>
        {/* <Form onSubmit={logIn}>
            <h3>Log in to your account</h3>
            <h5>Email Address</h5>
                <Input onChange={(ev) => setEmail(ev.target.value)} type="email" value={email}/>
                <Input type="submit" value="LogIn"/>
               {errorMessage&&<ErrorMsg>{errorMessage}</ErrorMsg>}
               Don't have an account? <Link to="/account/register">Sign Up</Link>
            </Form> */}
 <button onClick={() => loginWithRedirect()}>Log In</button>;
    </Wrapper>

    )
}

const Wrapper = styled.div`
height: 100vh;
width: auto;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 15px 15px 15px;
background-color: rgba(242, 238, 234, 0.647);

position:relative;
top:30%;
text-align: center;
margin-left: auto;
margin-right: auto;
width: 200px;


`
const Input = styled.input`
align-items: center;
&[type=text]{
    width:180px;
    height: 23px;
    margin-bottom:5px;
}
&[type=submit]{
    width:180px;
    height: 23px;
    border:none;
    background-color: orange;
    color:fuchsia;
}`;

const ErrorMsg = styled.div``;

export default LogIn;