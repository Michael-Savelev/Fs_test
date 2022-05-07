import {ParagraphProps} from "../interfaces";
import {StyledParagraph} from "./Paragraph.styled";

export const Paragraph = ({ font = 'main', line_height = '24', clr = 'black', children, className, ...props }: ParagraphProps): JSX.Element => {
  return(
    <StyledParagraph font={font} line_height={line_height} clr={clr}>
      {children}
    </StyledParagraph>
  )
};