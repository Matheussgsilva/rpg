import styled from 'styled-components';

export const Container = styled.div`
    background-color: #24282F;
    min-height: 100vh;
    color: #FFF;
`;

export const Map = styled.div`
    width: 480px;
    height: 480px;
    background-image: url('assets/map.png');
    background-position: left top;
    background-size: 100%;
`;

export const ButtonArea = styled.div`
    width: 480px;
    display: flex;
    justify-content: center;
    background-image: url('assets/map.png');
    background-position: left 96%;

    img {
        width: 50px;
        margin: 15px 5px;
        cursor: pointer;
        box-sizing: border-box;
        border: 3px solid #FFF;
        border-radius: 50%;
        transition: 400ms;

        &:hover {
        opacity: 0.75;
        }
    }
`;