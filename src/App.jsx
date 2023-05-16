import Header from "./components/Header"
import Footer from "./components/Footer"
import Cards from "./components/Cards"

import { useState } from "react"
import initialCardState from "./exports/initialCardState"

export default function App() {

  const [cardState, setCardState] = useState(initialCardState);

  function updateCardState(newCardState, index) {

    const newCard = cardState.map((item, i) => {

      if (index === i) {
        return {...item, ...newCardState};
      } else {
        return item;
      }
    });

    setCardState(newCard);
  }

  console.log(cardState);

  return (
    <>
      <Header />
      <Cards updateCardState={updateCardState} cardState={cardState} />
      <Footer />
    </>
  );
}