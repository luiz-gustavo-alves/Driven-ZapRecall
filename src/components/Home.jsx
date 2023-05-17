import { Container, Button } from "./styles/home"
import logo from "/assets/logo.png"

export default function Home(props) {

  const { setHomepage } = props;

    return(
        <Container>
          <a href="./">
            <img src={logo} alt="logo"/>
            <h1>ZapRecall</h1>
          </a>
          <Button
            data-test="start-btn"
            type="button"
            onClick={() => setHomepage(false)}
          >Iniciar Recall</Button>
        </Container>
    );
}