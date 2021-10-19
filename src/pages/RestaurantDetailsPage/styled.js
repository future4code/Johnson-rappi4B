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

    img {
        max-width: 50%;
    }
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
    /* display: flex;
    justify-content: flex-start;
    align-items: flex-start; */
    
    img {
        align-items: center;
        max-width: 90%;        
        border-radius: 8px 8px 0 0;       
    }
`