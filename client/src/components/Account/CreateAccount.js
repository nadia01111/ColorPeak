import styled from "styled-components"
import { useState } from "react";

const CreateAccount =()=> {

    const [newUser, setNewUser] = useState({
        nikname:"",
        email:"",
        password:"",
    })
    const [errorMessage, setErrorMessage] = useState(null);

    const logIn = (ev) => {
        ev.preventDefault();
        fetch("/api/account/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({newUser}),
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 200) {
                console.log(data.data)
                // sessionStorage.setItem('user',JSON.stringify(data.data));
                // navigate("/");
            } else {
                setErrorMessage(data.message)
            }

        })
    };

    return <Wrapper>
        <Form>
            <h2>Create your account to explore color palettes</h2>
            <Input placeholder="nikname"></Input>
            <Input type="email" placeholder="email"></Input>
            <Input type="password" placeholder="password"></Input>
            {/* <Input type="password" placeholder="repeat password"></Input> */}
            <Input type="submit" value="create account"/>
        </Form>
    </Wrapper>

    
}

const Wrapper = styled.div`
width: 100%;
align-items: center;
justify-content: center;
`;
const Form = styled.form`
display:flex;
flex-direction:column;
align-items: center;
padding: 15px 15px 15px 15px;
background-color: rgba(242, 238, 234, 0.647);
position:relative;
top:10%;
`;
const Input = styled.input``;

export default CreateAccount;