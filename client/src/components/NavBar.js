import styled from "styled-components"
import { FcLikePlaceholder, FcLike, FcBookmark, FcLock, FcUnlock, FcAddImage,FcPicture} from "react-icons/fc";

const NavBar = () => {
    return (
    <Wrapper>
        Presse space bar to generate new palette
    </Wrapper>

    )
}

const Wrapper = styled.div`
height: 50px;
display: flex;
align-items: center;
`

export default NavBar;