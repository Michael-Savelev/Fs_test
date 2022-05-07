import styled, {css} from "styled-components";

export const StyledWrapper = styled.div`
  min-height: 100vh;
  background: white;
  display: grid;
  grid-template-columns: 460px auto ;
  grid-template-areas:
  "left right";
`

export const StyledLeft = styled.div`
  grid-area: left;
  display: grid;
`

export const StyledRight = styled.div`
  grid-area: right;
  display: grid;
  grid-template-columns: auto 480px auto;
  grid-template-rows: 40px 22px minmax(20px, 219px) 438px auto;
  grid-template-areas:
  ". . ."
  ". register register"
  ". . ."
  ". form ."
  ". . .";
`

export const StyledFrame = styled.div`
  margin: 16px 0 16px 16px;
  height: auto;
  background: white;
  box-shadow: 0 16px 32px -4px rgba(145, 158, 171, 0.12);
  border-radius: 16px;
  display: grid;
  grid-template-columns: 40px auto 40px;
  grid-template-rows: 40px 30px auto 273px auto;
  grid-template-areas:
  ".   .   ."
  ". logo  ."
  ".   .   ."
  ".  img  ."
  ".   .   .";
`

export const StyledLogo = styled.div`
  grid-area: logo;
`

export const StyledImage = styled.div`
  margin-top: 48px;
  grid-area: img;
`

export const StyledRegister = styled.div`
  grid-area: register;
  margin-left: auto;
  margin-right: 40px;
`

export const StyledFormWrapper = styled.div`
  grid-area: form;
  display: grid;
  grid-template-rows: 36px 8px 24px 40px 50px 24px 56px 24px 56px 16px 40px 16px 48px;
  grid-template-areas:
  "h"
  "."
  "p"
  "."
  "b"
  "."
  "i1"
  "."
  "i2"
  "."
  "ch"
  "."
  "btn";
`

export const StyledHeader = styled.div`
  grid-area: h;
`
export const StyledParagraph = styled.div`
  grid-area: p;
`
export const StyledBlock = styled.div`
  grid-area: b;
`
export const StyledInput1= styled.input`
  grid-area: i1;
  box-sizing: border-box;
  width: 480px;
  height: 56px;
  left: 0px;
  top: 74px;
  border: 1px solid rgba(145, 158, 171, 0.3);
  border-radius: 8px;
  flex: none;
  order: 3;
  align-self: stretch;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #919EAB;
  padding-left: 14px;
`
export const StyledInput2 = styled.input`
  grid-area: i2;
  box-sizing: border-box;
  width: 480px;
  height: 56px;
  left: 0px;
  top: 74px;
  border: 1px solid rgba(145, 158, 171, 0.3);
  border-radius: 8px;
  flex: none;
  order: 3;
  align-self: stretch;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #919EAB;
  padding-left: 14px;
`
export const StyledCheck = styled.div`
  grid-area: ch;
`
export const StyledButton = styled.div`
  grid-area: btn;
`