import { useState, useEffect } from "react";
import styled from "styled-components"

const Collages = () => {

    const [picsFromDB, setPicsFromDB] = useState([])

    useEffect(() => {
        fetch(`/api/images`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data.data)
            setPicsFromDB(data.data);
          });
      }, []);


    return (
    <Container>
      <Wrapper>
          {picsFromDB.map((pic) => {
          return (
              <ImgWrap key={pic._id}>
                <Img src={pic.imageURL}></Img>
              </ImgWrap>
          )
          
          })}
      </Wrapper>
    </Container>
    )
}

const Img = styled.img`
width:inherit;
object-fit: contain;
`;

const ImgWrap = styled.div`

  width: 200px;
  padding: 5px;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
margin: 10px ;
`;
const Wrapper = styled.div`
width:100vw ;
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: flex-start;
`;

export default Collages;