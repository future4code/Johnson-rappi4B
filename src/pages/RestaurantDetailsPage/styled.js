import styled from "styled-components";

export const RestaurantDetailsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    justify-content: center;
    align-items: center;
    /* width: 100%; */
    /* display: flex;    
    padding: 0 0 16px;    
    border: solid 1px #b8b8b8;
    margin: 0 auto; */
`

export const RestaurantContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid grey;
`

export const CardRestaurant = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    align-items: flex-start;
    width: 90%;
    /* display: flex;
    justify-content: flex-start;
    align-items: flex-start; */
`

export const RestaurantImage = styled.img`
    display: flex;
    width: 100%;
    border-radius: 8px 8px 0 0;       
`

export const ProductCard = styled.div`
    display: flex;
    width: 90%;
    border: 1px solid black;
    border-radius: 8px;
    /* justify-content: flex-start; */
    align-items: center;
`

export const ProductImage = styled.img`
    width: 97px;
    height: 112.6px;
    object-fit: contain;
    /* border-radius: 8px 0 0 8px; */
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 50%; */
`