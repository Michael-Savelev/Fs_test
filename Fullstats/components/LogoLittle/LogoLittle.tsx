import {LogoProps} from "../interfaces";
import LogoLittleIcon from "../../public/logoL.svg";
import {StyledH1, StyledLogo, StyledWrapper} from "./LogoLittle.styled";

export const LogoLittle = ({ clr = 'white'}: LogoProps): JSX.Element  => {
  return (
    <StyledWrapper>
      <StyledLogo>
        <LogoLittleIcon/>
      </StyledLogo>
      <StyledH1 clr={clr}>
        FullStats
      </StyledH1>
    </StyledWrapper>
  )
}
