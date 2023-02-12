import styled from "styled-components";


export const TopBar = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    top: 0%;
    background: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`

export const BottomBar = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    bottom: 0%;
    background: rgba(255, 255, 255, 0.36);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`