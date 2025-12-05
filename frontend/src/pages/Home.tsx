import styled from "styled-components"
import { useNavigate } from "react-router-dom"

import { PersonFill } from "react-bootstrap-icons"

import { colors, screen_width } from "../style"

const Container = styled.div`
    height: 100vh;
    max-width: ${screen_width.mobile};
    width: 1000%;
    margin: 0 auto;
`

const Header = styled.header`
    height: 64px;
    display: flex;
    align-items: center;

    svg {
        font-size: 32px;
        margin-right: 16px;
        cursor: pointer;
        color: ${colors.white};

        &:hover {
            color: ${colors.grey};
        }
    }
`

const SearchBar = styled.input`
    width: 100%;
    font-size: 18px;
    padding: 4px 14px;
    border-radius: 16px;
    background: ${colors.grey};
    outline: none;
    color: ${colors.white};

    &:hover {
        background: ${colors.dark};
    }
`

const Home = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <Header>
                <PersonFill onClick={() => navigate("/auth")} />
                <SearchBar placeholder="Pesquisar" />
            </Header>
        </Container>
    )
}

export default Home