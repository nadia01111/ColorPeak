import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from "react";
import { UsersContext } from "./Context/UsersContext";
import {BsPersonCircle} from "react-icons/bs";


const Header = () => {
    const {currentUser} = useContext(UsersContext);
    const {isAuthenticated, user, loginWithRedirect, logout} = useAuth0();
    console.log(currentUser);
   
      
    return (
        <Wrapper>
            <Div1>
                <StyeldLink to="/"><Img src={logo} alt="logo"/> </StyeldLink>
            </Div1>
            <H1>
            <Name to="/"><h1>Color palette generator</h1></Name>
            {isAuthenticated? null:<Div2><h5>Sing in to save and explore palettes</h5></Div2>}
            </H1>
        
          {isAuthenticated? <Div2>
          <H3>Hello,<Lnk to={`/users/${currentUser?._id}`}>{user.nickname}</Lnk>!</H3>
          
          <LogInBtn onClick={() => logout({ returnTo: window.location.origin })}>LogOut</LogInBtn></Div2>
          :
          
          <LogInBtn onClick={() => loginWithRedirect()}>LogIn</LogInBtn> }
        
          
            
         
        
       
        </Wrapper>
    )
}

const Name = styled(Link)`
color:black;
text-decoration:none;
text-align: start;
`;
const Lnk = styled(Link)`

:hover{
  cursor: pointer;
  color: lightgray;
  background-color: black;
  /* text-decoration: underline 1px red; */
  margin-bottom: 2px;
}
`;

const H3 = styled.h3`
margin-right: 20px;
`;
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

const H1 = styled.div`

`;
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
margin-right: 30px;
margin-left: 10px;
text-decoration: none;
border: 1px solid gray;
border-radius: 3px;
padding: 10px 10px;
cursor: pointer;
  :hover {
    background-color:lightgray;
    color: var(--color-navbar-beige);
  }
`;

export default Header;