import Logo from "../assets/Logo.svg";

export const Header = () => {
  return (
    <header>
      <div>
        <img src={Logo} alt="Minha logo" />
        <nav>
          <ul>
            <li>home</li>
            <li>sobre</li>
            <li>contato</li>
            <a href="#">Fale agora</a>
          </ul>
        </nav>
      </div>
    </header>
  );
};
