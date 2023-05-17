import styled from "styled-components"

export const Container = styled.main`

    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;

    a {
        text-decoration: none;
    }
    
    h1 {
        font-family: 'Righteous', cursive;
        font-weight: 400;
        font-size: 36px;
        color: #FFFFFF;
    }
`

export const Button = styled.button`

    background-color: #FFF;
    width: 256px;
    height: 56px;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #D70900;
    border: 2px solid #D70900;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`;