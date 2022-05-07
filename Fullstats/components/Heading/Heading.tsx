import {HeadingProps} from "../interfaces";
import {StyledHeading} from "./Heading.styled";

export const Heading = ({size, clr, children}: HeadingProps): JSX.Element => {
  return (
    <StyledHeading size={size} clr={clr}>
      {children}
    </StyledHeading>
  )
};