import { Container } from "./styles/header"
import logo from "/assets/logo.png"

export default function Header() {

  return (
    <Container>
      <a href="./" alt="logo" title="logo">
        <img src={logo} alt="logo"/>
      </a>
      <a href="./" alt="website">
        <h1>ZapRecall</h1>
      </a>
    </Container>
  );
}