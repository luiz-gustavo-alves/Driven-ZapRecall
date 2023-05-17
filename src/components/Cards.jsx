import { Container, Wrapper, CardContent, ButtonsContainer, Button } from "./styles/cards"

import flipIcon from "/assets/seta_virar.png"
import answerIcon0 from "/assets/icone_erro.png"
import answerIcon1 from "/assets/icone_quase.png"
import answerIcon2 from "/assets/icone_certo.png"

function Card(props) {

  const { index,
          card, 
          style, 
          counter, 
          updateCardState, 
          updateCardStyle, 
          setCardCounter 
        } = props;

  function setCardStyle(status, answerIcon = "", buttonIndex = "") {

    let newCardStyle = {};

    if (status === 1) {
      newCardStyle = {
        background: "#FFFFD4",
        icon: flipIcon,
      };
    }

    else if (status === 2) {
      newCardStyle = {
        icon: "",
        disabled: false
      };
    }

    else if (status === 3) {
      newCardStyle = {
        fontColor: style.buttonColors[buttonIndex],
        background: "#FFFFFF",
        icon: answerIcon,
        disabled: true,
      };
    }

    updateCardStyle(newCardStyle, index);
  }

  function setCardStatus(index, icon = "", buttonIndex = "") {

    let newCardState = {};

    if (card.status === 0) newCardState = {status: card.status + 1, message: card.question};
    else if (card.status === 1) newCardState = {status: card.status + 1, message: card.answer};
    else if (card.status === 2) {
      newCardState = {status: card.status + 1, message: card.number, checked: true};
      setCardCounter(counter + 1);
    }

    updateCardState(newCardState, index);
    setCardStyle(newCardState.status, icon, buttonIndex);
  }

  function setCardIcon(buttonIndex) {

    let icon;

    if (buttonIndex === 0) icon = answerIcon0;
    else if (buttonIndex === 1) icon = answerIcon1;
    else if (buttonIndex === 2) icon = answerIcon2;

    setCardStatus(index, icon, buttonIndex);
  }

  function getIconDataTest() {

    if (card.status === 0) return "play-btn";
    else if (card.status === 1) return "turn-btn";
    else if (card.status === 3) {

      if (style.icon === answerIcon0) return "no-icon";
      else if (style.icon === answerIcon1) return "partial-icon";
      else if (style.icon === answerIcon2) return "zap-icon";
    }

    return "";
  }

  const iconDataTest = getIconDataTest();

  return (
    <Wrapper
      data-test="flashcard"
      background={style.background}
      status={card.status}
    >
      <CardContent
        status={card.status}
        cardChecked={card.checked}
        fontColor={style.fontColor}
      >
        <h2 data-test="flashcard-text">{card.message}</h2>  
        <button
          data-test={iconDataTest}
          type="button"
          disabled={card.checked}
          onClick={() => setCardStatus(index)}
        >
          <img src={style.icon} alt="icon" />
        </button>
      </CardContent>
      <ButtonsContainer
        hidden={style.disabled}
      >
        <Button
          data-test="no-btn"
          type="button"
          onClick={() => setCardIcon(0)}
          disabled={style.disabled}
          color={style.buttonColors[0]}
        >Não lembrei</Button>
        <Button
          data-test="partial-btn"
          type="button"
          onClick={() => setCardIcon(1)}
          disabled={style.disabled}
          color={style.buttonColors[1]}
        >Quase não lembrei</Button>
        <Button
          data-test="zap-btn"
          type="button"
          onClick={() => setCardIcon(2)}
          disabled={style.disabled}
          color={style.buttonColors[2]}
        >Zap!</Button>
      </ButtonsContainer>
    </Wrapper>
  );
}

export default function Cards(props) {

  const { updateCardState, 
          updateCardStyle, 
          setCardCounter, 
          cardState, 
          cardStyle, 
          cardCounter 
        } = props;

  return (
    <Container>
      {cardState.map((card, index) => 
        <Card
          key={index}
          index={index} 
          card={card}
          style={cardStyle[index]}
          counter={cardCounter}
          updateCardState={updateCardState}
          updateCardStyle={updateCardStyle}
          setCardCounter={setCardCounter}
        />)}
    </Container>
  );
}