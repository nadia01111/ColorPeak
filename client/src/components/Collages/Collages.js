import { useState, useEffect } from "react";
import styled from "styled-components"

const Collages = () => {

    const [picsFromDB, setPicsFromDB] = useState(null)
    useEffect(() => {
        fetch(`/api/images`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data.data)
            setPicsFromDB(data.data);
          });
      }, []);


    return (
    <Wrapper>
        Collages placeholder
    </Wrapper>

    )
}

const Wrapper = styled.div`
`

export default Collages;