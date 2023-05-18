import arrowIcon from "/assets/seta_play.png"
import cards from "./cards";

const initialCardState = [
    { icon: arrowIcon, number: "Pergunta 1", question: cards[0].question, answer: cards[0].answer, answerId: -1, status: 0, checked: false, },
    { icon: arrowIcon, number: "Pergunta 2", question: cards[1].question, answer: cards[1].answer, answerId: -1, status: 0, checked: false, },
    { icon: arrowIcon, number: "Pergunta 3", question: cards[2].question, answer: cards[2].answer, answerId: -1, status: 0, checked: false, },
    { icon: arrowIcon, number: "Pergunta 4", question: cards[3].question, answer: cards[3].answer, answerId: -1, status: 0, checked: false, },
    { icon: arrowIcon, number: "Pergunta 5", question: cards[4].question, answer: cards[4].answer, answerId: -1, status: 0, checked: false, },
    { icon: arrowIcon, number: "Pergunta 6", question: cards[5].question, answer: cards[5].answer, answerId: -1, status: 0, checked: false, },
    { icon: arrowIcon, number: "Pergunta 7", question: cards[6].question, answer: cards[6].answer, answerId: -1, status: 0, checked: false, },
    { icon: arrowIcon, number: "Pergunta 8", question: cards[7].question, answer: cards[7].answer, answerId: -1, status: 0, checked: false, }
];

export default initialCardState;