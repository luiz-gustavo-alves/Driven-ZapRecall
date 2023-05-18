import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Cards from "./components/Cards"

import { useState } from "react"
import initialCardState from "./exports/initialCardState"

export default function App() {

  const [cardState, setCardState] = useState(initialCardState);
  const [progress, setProgress] = useState({counter: 0, answersIcon: []})
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

  function updateProgress(newProgress) {

    setProgress(previousProgess => ({
      ...previousProgess,
      ...newProgress
    }));
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
            updateProgress={updateProgress}
            cardState={cardState}
            progress={progress}
          />
          <Footer
            progress={progress}
          />
        </>
      }
    </>
  );
}