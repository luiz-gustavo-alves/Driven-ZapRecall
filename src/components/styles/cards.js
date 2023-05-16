import styled from "styled-components"

export const Container = styled.ul`

    margin: 60px 0 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
`;

export const Wrapper = styled.li`

    background-color: ${props => props.background};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 100, 0.4) 0px 2px 8px 0px;
`;

export const CardContent = styled.div`

    width: 320px;
    height: auto;
    padding: 15px;
    gap: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 16px;
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
    }
`;

export const ButtonsContainer = styled.div`

    padding: ${props => props.hidden ? 0 : "15px"};

    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const Button = styled.div`

    display: ${props => props.hidden ? "none" : "flex"};

    background-color: ${props => props.hidden ? "inherit" : props.color};
    font-size: ${props => props.font};
    cursor: ${props => props.cursor};

    padding: 10px;
    width: 86px;
    height: 38px;
    border: none;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    text-align: center;
    color: #FFFFFF;
`;