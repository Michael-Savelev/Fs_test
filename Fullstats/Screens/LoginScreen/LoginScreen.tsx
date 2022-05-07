import {NextPage} from "next";
import Image from "next/image";
import imgSrc from "../../public/Artboard.png";
import {Paragraph, Logo, Block, Heading} from "../../components";
import styles from "./LoginScreen.module.css";

const LoginScreen: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Logo/>
        </div>
        <div className={styles.img}>
          <Image
            src={imgSrc}
            height='273px'
            width='364px'
          />
        </div>
      </div>
      <div className={styles.right}>
        <Heading className={styles.h} size="h3" clr="black">Войти</Heading>
        <Paragraph className={styles.p} color="black" font="main" line_height="24">Введите свои данные ниже</Paragraph>
        <Block>Используй<b>&nbsp;email&nbsp;</b> : demo@minimals.ru /<b>&nbsp;пароль&nbsp;</b> : demo1234</Block>
      </div>
      <div className={styles.header}>
        <Paragraph
          color="black"
          font="main"
          line_height="22"
          className={styles.text}
        >Нет учетной записи? <a className={styles.blue} href="#">Зарегистрироваться</a></Paragraph>
      </div>
    </div>
  )
}

export default LoginScreen

