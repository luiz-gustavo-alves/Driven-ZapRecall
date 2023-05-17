import { Container, Wrapper, CardContent, ButtonsContainer, Button } from "./styles/cards"

import arrowIcon from "/assets/seta_play.png"
import flipIcon from "/assets/seta_virar.png"
import answerIcon0 from "/assets/icone_erro.png"
import answerIcon1 from "/assets/icone_quase.png"
import answerIcon2 from "/assets/icone_certo.png"

function Card(props) {

  const { card, index, updateCardState } = props;

  function getStyles() {

    if (card.status === 0) {

      return {
        message: `Pergunta ${index + 1}`,
        background: "#FFFFFF",
        icon: arrowIcon,
        hideButtons: true,
        colors: ["inherit", "inherit", "inherit"],
        font: 0,
        cursor: "auto",
      };
    }

    else if (card.status === 1) {

      return {
        message: card.question, 
        background: "#FFFFD4",
        icon: flipIcon,
        hideButtons: false,
        colors: ["inherit", "inherit", "inherit"],
        font: 0,
        cursor: "auto",
      };
    }

    else if (card.status === 2) {

      return {
        message: card.answer, 
        background: "#FFFFD4",
        icon: "",
        hideButtons: false,
        colors: ["#FF3030", "#FF922E", "#2FBE34"],
        font: "12px",
        cursor: "pointer",
      };
    }

    else if (card.status === 3) {

      return {
        message: `Pergunta ${index + 1}`,
        background: "#FFFFFF",
        icon: card.answerIcon,
        hideButtons: true,
        colors: ["inherit", "inherit", "inherit"],
        font: 0,
        cursor: "auto",
      };
    }
  }

  function setCardStatus(index, icon = "") {

    let newCardState = {};

    if (card.status === 2) newCardState = {status: card.status + 1, checked: true, answerIcon: icon};
    else newCardState = {status: card.status + 1};
    
    updateCardState(newCardState, index);
  }

  function setCardIcon(buttonIndex) {

    let icon;

    if (buttonIndex === 0) icon = answerIcon0;
    else if (buttonIndex === 1) icon = answerIcon1;
    else if (buttonIndex === 2) icon = answerIcon2;

    setCardStatus(index, icon);
  }

  const styles = getStyles();

  return (
    <Wrapper
      background={styles.background} 
      status={card.status}
    >
      <CardContent
        status={card.status} 
        buttonDisabled={card.checked}
      >
        <h2>{styles.message}</h2>      
        <button 
          disabled={card.checked} 
          onClick={() => setCardStatus(index)}
        >
          <img src={styles.icon} alt={styles.icon} />
        </button>
      </CardContent>
      <ButtonsContainer hidden={styles.hideButtons}>
        <Button 
          onClick={() => setCardIcon(0)}
          hidden={styles.hideButtons}
          color={styles.colors[0]}
          font={styles.font}
          cursor={styles.cursor}
        >Não lembrei</Button>
        <Button
          onClick={() => setCardIcon(1)}
          hidden={styles.hideButtons}
          color={styles.colors[1]}
          font={styles.font}
          cursor={styles.cursor}
        >Quase não lembrei</Button>
        <Button
          onClick={() => setCardIcon(2)}
          hidden={styles.hideButtons}
          color={styles.colors[2]}
          font={styles.font}
          cursor={styles.cursor}
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