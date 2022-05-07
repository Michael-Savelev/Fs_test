import {NextPage} from "next";
import Image from "next/image";
import imgSrc from "../../public/Screenshot.png";
import {Paragraph, Logo, Button, LogoLittle} from "../../components";

import {
  StyledButton,
  StyledFrontscreen,
  StyledGradient,
  StyledH1,
  StyledHeader,
  StyledImage,
  StyledLogin,
  StyledP,
  StyledWrapper,
  StyledBlue, StyledRight, LogoBig, StyledLogoLittle,
} from "./HomeScreen.styled";


const HomeScreen: NextPage = () => {
  return (
    <StyledGradient>
      <StyledWrapper img={imgSrc}>
        <StyledHeader>
          <LogoBig>
            <a href='#'><Logo clr="white"/></a>
          </LogoBig>
          <StyledLogoLittle>
            <a href='#'><LogoLittle clr="white"/></a>
          </StyledLogoLittle>
          <StyledLogin><a href="#">Войти</a></StyledLogin>
        </StyledHeader>
        <StyledFrontscreen>
          <StyledH1>Start a <br/>new project<br/> with<StyledBlue> &nbsp;FullStats</StyledBlue></StyledH1>
          <StyledP>
            <Paragraph
              clr="white"
              font="front"
              line_height="24"
            >Платформа для аналитики поможет вам в выборе товара или ниши, анализи конкурентов,  увеличении продаж и в ускорении оборачиваемости вашего товара
            </Paragraph>
          </StyledP>
            <StyledButton>
              <Button>Попробовать сейчас</Button>
            </StyledButton>
        </StyledFrontscreen>
        <StyledRight>
          <StyledImage>
            <Image
              src={imgSrc}
              width="500px"
              height="542.49px"
            />
          </StyledImage>
        </StyledRight>
      </StyledWrapper>
    </StyledGradient>
  )
}

export default HomeScreen

