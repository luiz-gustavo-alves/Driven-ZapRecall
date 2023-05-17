import { Container } from "./styles/footer"

export default function Footer(props) {

  const { cardCounter } = props;

  return (
    <Container>
      <h3>{cardCounter}/8 CONCLUÍDOS</h3>
    </Container>
  );
}