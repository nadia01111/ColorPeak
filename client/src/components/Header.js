import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
console.log(logo);
    return (
        <Wrapper>
            <Div1>
                <StyeldLink to="/">
                    <Img src={logo} alt="logo"/>  
                </StyeldLink>
            </Div1>
          
            
            <H1>Palette generator</H1>
  
        <LogIn to="/account/login"><h4>LogIn</h4></LogIn>
      
        </Wrapper>
    )
}

const Div1 = styled.div`

`;
const StyeldLink = styled(Link)`
`;
const Img = styled.img`
height:150px;


/* .saturate { filter: saturate(3); }
.grayscale { filter: grayscale(100%); }
.contrast { filter: contrast(160%); }
.brightness { filter: brightness(0.25); }
.blur { filter: blur(3px); }
.invert { filter: invert(100%); }
.sepia { filter: sepia(100%); }
.huerotate { filter: hue-rotate(180deg); }
.rss.opacity { filter: opacity(50%); } */
`

const H1 = styled.h1``;
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