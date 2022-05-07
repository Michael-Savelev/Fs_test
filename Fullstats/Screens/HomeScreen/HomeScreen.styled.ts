import styled, {css} from "styled-components";
import img from "../../public/Screenshot.png";
import {ImageProps} from "next/image";

interface WrapperProps {
  img?: any
}

export const StyledGradient = styled.div`
  position: relative;
  line-height: 0;
  z-index: 1;
  &:after {
    transform: scale(-1, 1);
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: radial-gradient(106.64% 115.35% at 4.1% 5.52%, rgba(22, 28, 36, 0.48) 0%, rgba(22, 28, 36, 0.8) 45.53%, #161C24 100%, #161C24 100%, #161C24 100%);
    z-index: 1;
  }
`

export const StyledWrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: auto 466px minmax(auto, 234px) 500px auto ;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  grid-template-areas:
  ". header header header ."
  ". frontscreen . right .";
  z-index: 2;
  background: var(--grey);
  @media (max-width: 1440px) {
    grid-template-columns: 144px 466px minmax(auto, 234px) 500px minmax(96px, auto);
  }
  @media (max-width: 1280px) {
    grid-template-columns: minmax(90px, auto) 420px minmax(auto, 234px) 500px minmax(90px, auto);
  }
  @media (max-width: 1024px) {
    grid-template-columns: minmax(50px, auto) 420px minmax(auto, 234px) 300px minmax(50px, auto);
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns:  minmax(70px, auto) minmax(420px, auto) minmax(70px, auto) ;
    grid-template-rows: auto 1fr;
    min-height: 100vh;
    grid-template-areas:
    ". header ."
    ". frontscreen .";
    background-image: url(${props => props.img.src});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 343px 372px;
  }
  @media (max-width: 540px) {
    grid-template-columns: minmax(32px, auto) auto minmax(32px, auto) ;
    grid-template-rows: auto 1fr;
    min-height: 100vh;
  }
  @media (max-width: 375px) {
    grid-template-areas:
    ". . ."
    ". header ."
    ". . ."
    ". frontscreen ."
    ". . .";
    grid-template-columns: 16px auto 16px;
    background-size: 229px 248px;
    grid-template-rows: 32px 24px 72px auto auto;
  }
`

export const StyledHeader = styled.header`
  display: flex;
  grid-area: header;
  margin-top: 32px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  @media (max-width: 375px) {
    margin-top: 0;
  }
`

export const StyledFrontscreen = styled.div`
  grid-area: frontscreen;
  display: grid;
  grid-template-rows: auto 240px 40px 72px 40px 40px auto;
  grid-template-areas:
    "."
    "heading"
    "."
    "txt"
    "."
    "btn"
    ".";
  z-index: 2;
  @media (max-width: 1440px) {
    grid-template-rows: auto 240px 40px 72px 40px 48px auto;
  }
  @media (min-height: 1024px) {
    grid-template-rows: minmax(10px, 229px) 240px 40px 72px 40px 48px auto;
  }
  @media (min-height: 1280px) {
    grid-template-rows: auto 240px 40px 72px 40px 48px auto;
  }
  @media (max-height: 900px) {
    grid-template-rows: auto 240px 40px 72px 40px 48px auto;
  }
  @media (max-width: 375px) {
    grid-template-rows: 16px 144px 40px 120px 40px 48px auto;
  }
`

export const StyledLogin = styled.div`
  padding-right: 48px;
  padding-bottom: 6px;
  z-index: 2;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: white;
  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 24px;
    padding-right: 0;
    padding-bottom: 0;
  }
`

export const StyledH1 = styled.div`
  grid-area: heading;
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  @media (max-width: 540px) {
    text-align: center;
    font-size: 56px;
    line-height: 60px;
  }
  @media (max-width: 375px) {
    font-size: 32px;
    line-height: 48px;
  }
`

export const StyledBlue = styled.span`
  color: var(--blue);
`

export const StyledImage = styled.div`
  grid-area: image;
  margin: auto auto;
  z-index: 0;
  @media (max-width: 768px) {
    display: none;
  }
`

export const StyledP = styled.div`
  grid-area: txt;
  @media (max-width: 540px) {
    text-align: center;
  }
`

export const StyledRight = styled.div`
  grid-area: right;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "."
    "image"
    ".";
  @media (max-width: 1440px) {
    grid-template-rows: auto auto auto;
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1280px) {
    grid-template-rows: auto 550px auto;
  }
  @media (min-height: 1024px) {
    grid-template-rows: minmax(10px, 158px) 550px auto;
  }
  @media (min-height: 1280px) {
    grid-template-rows: auto 550px auto;
  }
  @media (max-width: 1024px) {
    grid-template-rows: auto 550px auto;
  }
`

export const StyledButton = styled.div`
  grid-area: btn;
  @media (max-width: 540px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

export const LogoBig = styled.div`
  display: inline;
  @media (max-width: 375px) {
    display: none;
  }
  
`

export const StyledLogoLittle = styled.div`
  display: none;
  @media (max-width: 375px) {
    display: inline;
  }
`