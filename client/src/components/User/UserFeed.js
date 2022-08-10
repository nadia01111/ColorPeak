import styled from "styled-components"
import { useAuth0 } from '@auth0/auth0-react';

const UserFeed = () => {

    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        logout,
      } = useAuth0();

    return (<Wrapper>
        UserFeed placeholder
    </Wrapper>

    )
}

const Wrapper = styled.div`
`

export default UserFeed;