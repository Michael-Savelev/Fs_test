import {NextPage} from "next";
import {
  StyledFrame, StyledFormWrapper,
  StyledImage,
  StyledLeft,
  StyledLogo,
  StyledRegister,
  StyledRight,
  StyledWrapper, StyledHeader, StyledParagraph, StyledInput1, StyledInput2, StyledBlock, StyledButton, StyledCheck
} from "./LogScreen.styled";
import imgSrc from "../../public/Artboard.png";
import Image from "next/image";
import {Block, Button, Heading, Logo, Paragraph} from "../../components";
import styles from "../LoginScreen/LoginScreen.module.css";

const LogScreen: NextPage = () => {
  return(
    <>
      <StyledWrapper>
        <StyledLeft>
          <StyledFrame>
            <StyledLogo>
              <Logo/>
            </StyledLogo>
            <StyledImage>
              <Image
                src={imgSrc}
                height='273px'
                width='364px'
              />
            </StyledImage>
          </StyledFrame>
        </StyledLeft>
        <StyledRight>
          <StyledRegister>
            <Paragraph
              color="black"
              font="main"
              line_height="22"
              className={styles.text}
            >Нет учетной записи? <a className={styles.blue} href="#">Зарегистрироваться</a></Paragraph>
          </StyledRegister>
          <StyledFormWrapper>
            <StyledHeader>
              <Heading size="h3" clr="black">Войти</Heading>
            </StyledHeader>
            <StyledParagraph>
              <Paragraph color="black" font="main" line_height="24">Введите свои данные ниже</Paragraph>
            </StyledParagraph>
            <StyledBlock>
              <Block>Используй<b>&nbsp;email&nbsp;</b> : demo@minimals.ru /<b>&nbsp;пароль&nbsp;</b> : demo1234</Block>
            </StyledBlock>
            <StyledInput1 type="email" name="email" placeholder="Email"/>
            <StyledInput2 type="text" name="password" placeholder="Пароль"/>
            <StyledCheck>
              Check
            </StyledCheck>
            <StyledButton>
              <Button display="flex">Войти</Button>
            </StyledButton>
          </StyledFormWrapper>
        </StyledRight>
      </StyledWrapper>
    </>
  )
}

export default LogScreen;