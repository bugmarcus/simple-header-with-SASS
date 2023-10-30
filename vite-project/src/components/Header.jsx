import Logo from "../assets/Logo.svg";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={Logo} alt="Minha logo" />
        <nav>
          <ul>
            <li>home</li>
            <li>sobre</li>
            <li>contato</li>
          </ul>
          <a className={styles.button} href="#">
            Fale agora
          </a>
        </nav>
      </div>
    </header>
  );
};
