import { Container } from "./styles/header"

export default function Header() {

  return (
    <Container>
      <a href="./" alt="logo" title="logo">
        <img src="/assets/logo.png" alt="logo"/>
      </a>
      <h1>ZapRecall</h1>
    </Container>
  );
}