import styled, {css} from "styled-components";
import {HeadingProps} from "../interfaces";

export const StyledHeading = styled.h1<HeadingProps>`
  font-style: normal;
  font-weight: 700;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  ${(props) => {
    switch (props.size) {
      case "h1":
        return css`
          font-size: 64px;
          line-height: 80px;
          margin: 0;
          color: var(--primary);
        `;
      case "h2":
        return css`
          font-size: 32px;
          line-height: 48px;
        `;
      case "h3":
        return css`
          font-size: 24px;
          line-height: 36px;
        `;
      default:
        return css`
        `;
    }
  }};
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