import styled, {css} from "styled-components";
import {HeadingProps, ParagraphProps} from "../interfaces";

export const StyledParagraph = styled.p<ParagraphProps>`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
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
  ${(props) => {
    switch (props.line_height) {
      case "21":
        return css`
          line-height: 21px;
        `;
      case "22":
        return css`
          line-height: 22px;
        `;
      case "24":
        return css`
          line-height: 24px;
        `;
      default:
        return css`
        `;
    }
  }};
  ${(props) => {
    switch (props.font) {
      case 'front':
        return css`
          font-family: 'Public Sans', sans-serif;
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        `;
      case 'main':
        return css`
          font-family: 'Roboto', sans-serif;
        `;
      case 'post script':
        return css`
          font-size: 14px;
          text-align: center;
          color: var(--grey);
        `;
      default:
        return css`
        `;
    }
  }};
`