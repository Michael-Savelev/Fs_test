import {BlockProps} from "../interfaces";
import Shape from "../../public/shape.svg";
import {StyledBlock, StyledIcon} from "./Block.styled";

export const Block = ({ children }: BlockProps): JSX.Element => {
  return(
    <StyledBlock>
      <StyledIcon>
        <Shape/>
      </StyledIcon>
      {children}
    </StyledBlock>
  )
};


