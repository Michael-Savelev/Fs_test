import styled, {css} from "styled-components";
import {LogoProps} from "../interfaces";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;
`

export const StyledLogo = styled.div`
  display: inline-block;
  margin-right: 8px;
`

export const StyledH1 = styled.h1<LogoProps>`
  margin: 0 0 5px 0;
  padding: 0 0 0 0;
  font-weight: 800;
  font-size: 26px;
  line-height: 30px;
  ${(props) => {
    switch (props.clr) {
      case "white":
        return css`
          color: var(--white);
        `;
      case "black":
        return css`
          color: var(--black)
        `;
      default:
        return css`
        `;
    }
  }};
`