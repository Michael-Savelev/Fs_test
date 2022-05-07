import {LogoProps} from "../interfaces";
import LogoIcon from "../../public/logo.svg";
import {StyledH1, StyledLogo, StyledWrapper} from "./Logo.styled";

export const Logo = ({ clr = 'black'}: LogoProps): JSX.Element  => {
  return (
    <StyledWrapper>
      <StyledLogo>
        <LogoIcon/>
      </StyledLogo>
      <StyledH1 clr={clr}>
        FullStats
      </StyledH1>
    </StyledWrapper>
  )
}
