import { Container, IconsContainer, StatusContainer } from "./styles/footer"

import answerIcon0 from "/assets/icone_erro.png"
import answerIcon1 from "/assets/icone_quase.png"
import answerIcon2 from "/assets/icone_certo.png"
import sadIcon from "/assets/sad.png";
import partyIcon from "/assets/party.png";

export default function Footer(props) {

  const { progress } = props;

  function getStatus() {

    let status = {finished: false};

    if (progress.counter === 8) {

      let hasNoIcon = false;
      for (let i = 0; i < progress.answersIcon.length; i++) {
        if (progress.answersIcon[i] === answerIcon0) {
          hasNoIcon = true;
        }
      }
  
      if (hasNoIcon) {
        status = {finished: true, icon: sadIcon, iconMessage: "Putz...", message: "Ainda faltam alguns... Mas não desanime!"};
      } else {
        status = {finished: true, icon: partyIcon, iconMessage: "Parabéns!", message: "Você não esqueceu de nenhum flashcard!"};
      }
    }
    return status;
  }

  const status = getStatus();
  const progressIcons = progress.answersIcon.map((icon, index) => {

    let iconDataTest;

    if (icon === answerIcon0) iconDataTest = "no-icon";
    else if (icon === answerIcon1) iconDataTest = "partial-icon";
    else if (icon === answerIcon2) iconDataTest = "zap-icon";

    return (
      <img data-test={iconDataTest} key={index} src={icon} alt={iconDataTest}/>
    );
  })

  return (
    <Container 
      data-test="footer"
      progressCounter={progress.counter}
    >
      {status.finished &&
        <StatusContainer data-test="finish-text">
          <div>
            <img src={status.icon} alt="icon" />
            <h3>{status.iconMessage}</h3>
          </div>
          <div>
            <h3>{status.message}</h3>
          </div>
        </StatusContainer>
      }
      <h3>{progress.counter}/8 CONCLUÍDOS</h3>
      <IconsContainer>
        {progressIcons}
      </IconsContainer>
    </Container>
  );
}