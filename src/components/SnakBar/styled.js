import styled from "styled-components";

export const ContainerSnakBar = styled.div`
  
  display: flex;
  align-items: center;
  width: 328px;
  height: 72px;
  overflow-x: scroll;
  
  p {
    margin: 0 4px;
    padding: 8px 16px;
    border-radius: 12px;
    background: #e86e5a;
  }  

  p:hover {
    color: white;
    cursor: pointer;
  }

  p:active{
    background-color: #e86e20;
    transform: scaleX(0.7);
  }
`;
