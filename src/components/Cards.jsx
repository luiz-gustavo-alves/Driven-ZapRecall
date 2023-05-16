import { Container, Wrapper, CardContent, ButtonsContainer, Button } from "./styles/cards"
import arrowIcon from "/assets/seta_play.png"

function Card(props) {

  const { card, index, updateCardState } = props;

  const newState = {
    status: card.status + 1
  }

  function getStyles() {

    if (card.status === 0) {

      return {
        message: `Pergunta ${index + 1}`, 
        background: "#FFFFFF",
        hideButtons: true,
        buttons: ["inherit", "inherit", "inherit"],
        font: 0,
        cursor: "auto",
      };
    }

    if (card.status === 1) {

      return {
        message: card.question, 
        background: "#FFFFD4",
        hideButtons: false,
        buttons: ["inherit", "inherit", "inherit"],
        font: 0,
        cursor: "auto",
      };
    }

    if (card.status === 2) {

      return {
        message: card.answer, 
        background: "#FFFFD4",
        hideButtons: false,
        buttons: ["#FF3030", "#FF922E", "#2FBE34"],
        font: "12px",
        cursor: "pointer",
      };
    }
  }

  const { message, background, hideButtons, buttons, font, cursor} = getStyles();

  return (
    <Wrapper background={background}>
      <CardContent>
        <h2>{message}</h2>      
        <button onClick={() => updateCardState(newState, index)}>
          <img src={arrowIcon} alt="arrowIcon" />
        </button>
      </CardContent>
      <ButtonsContainer hidden={hideButtons}>
        <Button 
          hidden={hideButtons}
          color={buttons[0]}
          font={font}
          cursor={cursor}
        >Não lembrei</Button>
        <Button
          hidden={hideButtons}
          color={buttons[1]}
          font={font}
          cursor={cursor}
        >Quase não lembrei</Button>
        <Button
          hidden={hideButtons}
          color={buttons[2]}
          font={font}
          cursor={cursor}
        >Zap!</Button>
      </ButtonsContainer>
    </Wrapper>
  );
}

export default function Cards(props) {

  const { updateCardState, cardState } = props;

  return (
    <Container>
      {cardState.map((card, index) => 
        <Card 
          key={index} 
          card={card}
          index={index}
          updateCardState={updateCardState}
        />)}
    </Container>
  );
}