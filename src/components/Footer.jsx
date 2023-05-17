import { Container } from "./styles/footer"

export default function Footer(props) {

  const { cardCounter } = props;

  return (
    <Container data-test="footer">
      <h3>{cardCounter}/8 CONCLUÍDOS</h3>
    </Container>
  );
}