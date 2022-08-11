import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        logout,
      } = useAuth0();
      console.log(user);
    return (
        <Wrapper>
            <Div1>
                <StyeldLink to="/">
                    <Img src={logo} alt="logo"/>  
                </StyeldLink>
            </Div1>
          
            
            <H1> Color palette generator</H1>
        
            {isAuthenticated?<button >{user.name}</button>:null }
            {isAuthenticated? <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>:null}
        <LogIn to="/account/login"><h4>LogIn</h4></LogIn>
      
        </Wrapper>
    )
}

const Div1 = styled.div`

`;
const StyeldLink = styled(Link)`
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
const LogIn = styled(NavLink)`
text-decoration: none;
border: 1px solid black;
border-radius: 3px;
padding: 5px 5px;
cursor: pointer;
  :hover {
    background-color: var(--color-black);
    color: var(--color-navbar-beige);
  }
`;

export default Header;