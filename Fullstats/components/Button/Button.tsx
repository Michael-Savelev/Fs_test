import {ButtonProps} from "../interfaces";
import {StyledButton} from "./Button.styled";

export const Button = ({ display = "flex", children, }: ButtonProps): JSX.Element => {
  return (
    <StyledButton display={display}>
      {children}
    </StyledButton>
  )
};

