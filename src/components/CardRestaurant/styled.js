import styled from "styled-components";

export const CardRestaurantContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 328px;
    padding: 0 0 16px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    justify-content: center;
    align-items: center;
    margin: 4px;
`

export const LogoRestaurant = styled.div`
    display: flex;
    justify-content: center;
    width: 328px;

    img {
        width: 100%;
        border-radius: 8px 8px 0 0;
    }
`

export const RestaurantName = styled.div`
    display: flex;
    width: 296px;
    margin: 12px 16px 4px;
    align-items: center;
    color: #e86e5a;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
`

export const DataRestaurant = styled.div`
    display: flex;
    width: 296px;
    justify-content: space-between;
    align-items: center;
    color: #b8b8b8;
    font-family: Roboto;
`