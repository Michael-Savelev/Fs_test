import styled from "styled-components";
import {ButtonProps} from "../interfaces";

export const StyledButton = styled.button<ButtonProps>`
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 22px;
  border-radius: 8px;
  box-sizing: border-box;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  cursor: pointer;
  text-align: center;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: white;
  transition: all .2s;
  background-color: var(--blue);
  box-shadow: 0 8px 16px rgba(50, 88, 251, 0.24);
  &:hover  {
    background-color: var(--blue-light);
  }
`