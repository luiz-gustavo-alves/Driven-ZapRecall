import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Cards from "./components/Cards"

import { useState } from "react"
import initialCardState from "./exports/initialCardState"
import initialCardStyle from "./exports/initialCardStyle"

export default function App() {

  const [cardState, setCardState] = useState(initialCardState);
  const [cardStyle, setCardStyle] = useState(initialCardStyle);
  const [cardCounter, setCardCounter] = useState(0);
  const [homepage, setHomepage] = useState(true);

  function updateCardState(newCardState, index) {

    const newState = cardState.map((item, i) => {
      if (index === i) {
        return {...item, ...newCardState};
      } else {
        return item;
      }
    });

    setCardState(newState);
  }

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
    <>
      {homepage && 
        <Home 
          setHomepage={setHomepage} 
          homepage={homepage}
        />
      }
      {!homepage &&
        <>
          <Header />
          <Cards
            updateCardState={updateCardState}
            updateCardStyle={updateCardStyle}
            setCardCounter={setCardCounter}
            cardState={cardState}
            cardStyle={cardStyle}
            cardCounter={cardCounter}
          />
          <Footer
            cardCounter={cardCounter}
          />
        </>
      }
    </>
  );
}