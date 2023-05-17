import cards from "./cards";

const initialCardState = [
    { question: cards[0].question, answer: cards[0].answer, status: 0, checked: false, answerIcon: "" },
    { question: cards[1].question, answer: cards[1].answer, status: 0, checked: false, answerIcon: "" },
    { question: cards[2].question, answer: cards[2].answer, status: 0, checked: false, answerIcon: "" },
    { question: cards[3].question, answer: cards[3].answer, status: 0, checked: false, answerIcon: "" },
    { question: cards[4].question, answer: cards[4].answer, status: 0, checked: false, answerIcon: "" },
    { question: cards[5].question, answer: cards[5].answer, status: 0, checked: false, answerIcon: "" },
    { question: cards[6].question, answer: cards[6].answer, status: 0, checked: false, answerIcon: "" },
    { question: cards[7].question, answer: cards[7].answer, status: 0, checked: false, answerIcon: "" }
];

export default initialCardState;