import {DetailedHTMLProps, HTMLAttributes, ReactNode,ButtonHTMLAttributes} from "react";

export interface BlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  children: ReactNode;
}

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  children: ReactNode;
  display?: 'flex' | 'inline-block';
}

export interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  size: 'h1' | 'h2' | 'h3';
  clr: 'white' | 'black';
  className?: string;
  children: ReactNode;
}

export interface LogoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  clr?: 'white' | 'black' ;
}

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
  font?: 'front' | 'main' | 'post script';
  line_height?: '21' | '22' | '24',
  clr?: 'white' | 'black';
  children: ReactNode;
}