import { Container, Wrapper, CardContent, ButtonsContainer, Button } from "./styles/cards"
import { useState } from "react"
import initialCardStyle from "../exports/initialCardStyle"

import flipIcon from "/assets/seta_virar.png"
import answerIcon0 from "/assets/icone_erro.png"
import answerIcon1 from "/assets/icone_quase.png"
import answerIcon2 from "/assets/icone_certo.png"

function Card(props) {

  const { index,
          card,
          style, 
          progress, 
          updateCardState,
          updateCardStyle,
          updateProgress
        } = props;

  function setCardStyle(newCardState) {

    let newCardStyle = {};

    if (newCardState.status === 1) {
      newCardStyle = {background: "#FFFFD4"};
    }

    else if (newCardState.status === 2) {
      newCardStyle = {disabled: false};
    }

    else if (newCardState.status === 3) {
      const answerColor = style.buttonColors[newCardState.answerId];
      newCardStyle = {fontColor: answerColor, background: "#FFFFFF", disabled: true};
    }

    updateCardStyle(newCardStyle, index);
  }

  function setCardStatus(index, icon = "", answerId = "") {

    let newCardState = {};

    if (card.status === 0) {
      newCardState = {status: card.status + 1, icon: flipIcon};
    }

    else if (card.status === 1) {
      newCardState = {status: card.status + 1, icon: ""};
    }
  
    else if (card.status === 2) {
      newCardState = {status: card.status + 1, icon: icon, answerId: answerId, checked: true};

      const newIcon = [...progress.answersIcon, icon];
      const newProgress = {counter: progress.counter + 1, answersIcon: newIcon};
      updateProgress(newProgress);
    }

    updateCardState(newCardState, index);
    setCardStyle(newCardState);
  }

  function setCardIcon(buttonIndex) {

    let icon;
    const answerId = buttonIndex;

    if (answerId === 0) icon = answerIcon0;
    else if (answerId === 1) icon = answerIcon1;
    else if (answerId === 2) icon = answerIcon2;

    setCardStatus(index, icon, answerId);
  }

  function getMessage() {
    
    if (card.status === 0 || card.status === 3) return card.number;
    else if (card.status === 1) return card.question;
    else if (card.status === 2) return card.answer;

    return "";
  }

  function getIconDataTest() {
    
    if (card.status === 0) return "play-btn";
    else if (card.status === 1) return "turn-btn";
    else if (card.status === 3) {

      if (card.icon === answerIcon0) return "no-icon";
      else if (card.icon === answerIcon1) return "partial-icon";
      else if (card.icon === answerIcon2) return "zap-icon";
    }

    return "";
  }

  const message = getMessage();
  const iconDataTest = getIconDataTest();

  const answerButtons = [
    {message: "Não lembrei", dataTest: "no-btn"},
    {message: "Quase não lembrei", dataTest: "partial-btn"},
    {message: "Zap!", dataTest: "zap-btn"},
  ]

  const answerButtonsComponent = answerButtons.map((button, index) => {
    return (
      <Button
        key={index}
        data-test={button.dataTest}
        type="button"
        onClick={() => setCardIcon(index)}
        disabled={style.disabled}
        color={style.buttonColors[index]}
    >{button.message}</Button>)
  })

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
        <h2 data-test="flashcard-text">{message}</h2>  
        <button
          data-test={iconDataTest}
          type="button"
          disabled={card.checked}
          onClick={() => setCardStatus(index)}
        >
          <img src={card.icon} alt={iconDataTest} />
        </button>
      </CardContent>
      <ButtonsContainer hidden={style.disabled}>
        {!style.disabled && answerButtonsComponent}
      </ButtonsContainer>
    </Wrapper>
  );
}

export default function Cards(props) {

  const { updateCardState,
          updateProgress,
          cardState,
          progress
        } = props;

  const [cardStyle, setCardStyle] = useState(initialCardStyle);

  function updateCardStyle(newCardStyle, index) {

    const newStyle = cardStyle.map((item, i) => {
      if (index === i) {
        return {...item, ...newCardStyle};
      } else {
        return item;
      }
    });

    setCardStyle(newStyle);
  }

  return (
    <Container progressCounter={progress.counter}>
      {cardState.map((card, index) => 
        <Card
          key={index}
          index={index} 
          card={card}
          style={cardStyle[index]}
          progress={progress}
          updateCardState={updateCardState}
          updateCardStyle={updateCardStyle}
          updateProgress={updateProgress}
        />)}
    </Container>
  );
}