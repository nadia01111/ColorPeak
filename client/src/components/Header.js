import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from "react";
import { UsersContext } from "./Context/UsersContext";
import {FcApprove} from "react-icons/fc";


const Header = () => {
    const {currentUserID} = useContext(UsersContext);
    const {isAuthenticated, user, loginWithRedirect, logout} = useAuth0();
    console.log(user);
      
    return (
        <Wrapper>
            <Div1>
                <StyeldLink to="/"><Img src={logo} alt="logo"/> </StyeldLink>
            </Div1>
          
            <StyeldLink to="/"> <H1> Color palette generator</H1></StyeldLink>
            
        
          {isAuthenticated? <Div2>
          <h3>Hello, {user.nickname} !</h3>
          <StyeldLink to={`/users/${currentUserID}`}><FcApprove size={"40px"}/></StyeldLink>
          <LogInBtn onClick={() => logout({ returnTo: window.location.origin })}>LogOut</LogInBtn></Div2>
          :   <>
          <Div2><h5>Sing in to save and explore palettes</h5></Div2>
          <LogInBtn onClick={() => loginWithRedirect()}>LogIn</LogInBtn></> }
        
          
            
         
        
       
        </Wrapper>
    )
}

const Div1 = styled.div`
display: flex;
align-items: center;
`;
const Div2 = styled.div`
display: flex;
align-items: center;
justify-content: center;

`;
const StyeldLink = styled(Link)`
color:black;
text-decoration:none;
`;
const Img = styled.img`
height:100px;
margin-left:50px;
`;

const H1 = styled.h2``;
const Wrapper = styled.div`
margin-left: 20px;
margin-right: 20px;
display: flex;
height: 100px;
align-items: center;
justify-content: space-between;
`;
// const  = styled.div``;
const LogInBtn = styled.button`

text-decoration: none;
border: 1px solid gray;
border-radius: 3px;
padding: 10px 10px;
cursor: pointer;
  :hover {
    background-color: var(--color-black);
    color: var(--color-navbar-beige);
  }
`;

export default Header;