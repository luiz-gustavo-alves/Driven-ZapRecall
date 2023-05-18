import styled from "styled-components"

export const Container = styled.footer`
    
    gap: ${props => props.progressCounter > 0 ? "15px" : "0"};

    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;

    h3 {
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: #000000;
    }
`;

export const IconsContainer = styled.div`

    display: flex;
    gap: 7px;
`;

export const StatusContainer = styled.div`

    width: 270px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-family: 'Recursive', sans-serif;
    font-size: 18px;

    div:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        img {
            width: 23px;
            height: 23px;
        }

        h3 {
            font-weight: 700;
        }
    }

    div:nth-child(2) {

        h3 {
            font-weight: 400;
            text-align: center;
        }
    }
`;