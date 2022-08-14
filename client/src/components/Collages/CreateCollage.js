import styled from "styled-components"
import PaletteFromPicture from "./PaletteFromPicture";


const CreateCollage = () => {
    return (<Wrapper>
        <h1>Extract new palette from your photo.</h1>
        <PaletteFromPicture/>
        
    </Wrapper>

    )
}

const Wrapper = styled.div`
`

export default CreateCollage;