import styled from "styled-components"

export const Container = styled.ul`

    margin-bottom: ${props => props.progressCounter === 8 ? "200px" : "115px"};

    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
`;

export const Wrapper = styled.li`

    background-color: ${props => props.background};
    min-height: ${props => (props.status > 0 && props.status < 3) ? "130px" : "0"};

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
    position: relative;

    h2 {
        color: ${props => props.fontColor};
        text-decoration:  ${props => props.cardChecked ? "line-through" : "none"};

        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 16px;
    }

    button {
        display: ${props => props.status === 2 ? "none" : ""};
        cursor: ${props => props.cardChecked ? "default" : "pointer"};
        top: ${props => (props.status > 0 && props.status < 3) ? "105px" : "11px"};

        position: absolute;
        right: 11px;
        border: none;
        background: none;
    }
`;

export const ButtonsContainer = styled.div`

    padding: ${props => props.hidden ? 0 : "15px"};

    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const Button = styled.button`

    display: ${props => props.disabled ? "none" : "flex"};
    background-color: ${props => props.disabled ? "inherit" : props.color};

    padding: 10px;
    width: 86px;
    height: 38px;
    border: none;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    text-align: center;
    color: #FFF;
    cursor: pointer;
`;