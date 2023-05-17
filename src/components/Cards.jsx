import { Container, Wrapper, CardContent, ButtonsContainer, Button } from "./styles/cards"

import flipIcon from "/assets/seta_virar.png"
import answerIcon0 from "/assets/icone_erro.png"
import answerIcon1 from "/assets/icone_quase.png"
import answerIcon2 from "/assets/icone_certo.png"

function Card(props) {

  const { card, 
          style, 
          counter, 
          index, 
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
        hideButtons: false,
      };
    }

    else if (status === 2) {
      newCardStyle = {
        icon: "",
        colors: ["#FF3030", "#FF922E", "#2FBE34"],
        font: "12px",
        cursor: "pointer",
      };
    }

    else if (status === 3) {
      newCardStyle = {
        fontColor: style.colors[buttonIndex],
        background: "#FFFFFF",
        icon: answerIcon,
        hideButtons: true,
        colors: ["inherit", "inherit", "inherit"],
        font: 0,
        cursor: "auto",
      };
    }

    updateCardStyle(newCardStyle, index);
  }

  function setCardStatus(index, icon = "", buttonIndex = "") {

    let newCardState = {};

    if (card.status === 0) newCardState = {status: card.status + 1, message: card.question}
    else if (card.status === 1) newCardState = {status: card.status + 1, message: card.answer}
    else if (card.status === 2) {
      newCardState = {status: card.status + 1, message: card.number, checked: true};
      setCardCounter(counter + 1)
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

  const buttonsText = ["Não lembrei", "Quase não lembrei", "Zap!"];

  return (
    <Wrapper
      background={style.background}
      status={card.status}
    >
      <CardContent
        status={card.status}
        cardChecked={card.checked}
        fontColor={style.fontColor}
      >
        <h2>{card.message}</h2>  
        <button
          disabled={card.checked}
          onClick={() => setCardStatus(index)}
        >
          <img src={style.icon} alt={style.icon} />
        </button>
      </CardContent>
      <ButtonsContainer
        hidden={style.hideButtons}
      >
        {buttonsText.map((text, index) => {
          return (
            <Button
              key={index}
              onClick={() => setCardIcon(index)}
              hidden={style.hideButtons}
              color={style.colors[index]}
              font={style.font}
              cursor={style.cursor}
            >{text}</Button>
          )})}
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
          card={card}
          style={cardStyle[index]}
          counter={cardCounter}
          index={index}
          updateCardState={updateCardState}
          updateCardStyle={updateCardStyle}
          setCardCounter={setCardCounter}
        />)}
    </Container>
  );
}