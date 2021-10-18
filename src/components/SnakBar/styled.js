import styled from "styled-components";

export const ContainerSnakBar = styled.div`
  display: flex;
  align-items: center;
  max-width: 315px;
  height: 84px;
  overflow-x: scroll;
`;

export const SnackBarButtom = styled.p`
  margin: 0 4px;
  padding: 8px 16px;
  border-radius: 12px;
  background: #e86e5a;
  color: ${(p) => (p.selected ? "white" : "black")};

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: red;
    transform: scaleX(0.7);
  }
`;


