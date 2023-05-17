import cards from "./cards";

const initialCardState = [
    { message: "Pergunta 1", number: "Pergunta 1", question: cards[0].question, answer: cards[0].answer, status: 0, checked: false, },
    { message: "Pergunta 2", number: "Pergunta 2", question: cards[1].question, answer: cards[1].answer, status: 0, checked: false, },
    { message: "Pergunta 3", number: "Pergunta 3", question: cards[2].question, answer: cards[2].answer, status: 0, checked: false, },
    { message: "Pergunta 4", number: "Pergunta 4", question: cards[3].question, answer: cards[3].answer, status: 0, checked: false, },
    { message: "Pergunta 5", number: "Pergunta 5", question: cards[4].question, answer: cards[4].answer, status: 0, checked: false, },
    { message: "Pergunta 6", number: "Pergunta 6", question: cards[5].question, answer: cards[5].answer, status: 0, checked: false, },
    { message: "Pergunta 7", number: "Pergunta 7", question: cards[6].question, answer: cards[6].answer, status: 0, checked: false, },
    { message: "Pergunta 8", number: "Pergunta 8", question: cards[7].question, answer: cards[7].answer, status: 0, checked: false, }
];

export default initialCardState;