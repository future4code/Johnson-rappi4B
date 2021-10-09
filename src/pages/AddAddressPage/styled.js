import styled from "styled-components";

export const AddAddressPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 360px;
    height: 640px;

    .Bar {
        width: 360px;
        height: 64px;
        margin: 0 0 16px;
        padding: 0 0 10px;
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
        background-color: #fff;
    }

    input {
        width: 328px;
        height: 56px;
        margin: 8px 0 0;
        padding: 19px 48px 19px 16px;
        border-radius: 2px;
        border: solid 1px #b8b8b8;
    }
`