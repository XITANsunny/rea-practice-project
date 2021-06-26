import { useState } from "react";
import { PropertyColumn } from "../property_column/property_column";
import { BoardPresenter } from "./board_presenter";
import "./board.css";

export function Board(props) {
  const presenter = new BoardPresenter();
  const { initialShortlistCards, resultCards } = props;
  const [shortlistCards, setShortlistCards] = useState(initialShortlistCards);

  const updateShortlistCards = (id, isSaved) => {
    if (isSaved) {
      setShortlistCards(presenter.removeCard(shortlistCards, id));
    } else {
      // Stop adding card that already there.
      if (shortlistCards.find(c => c.id === id)) {
        return;
      }
      const targetCard = resultCards.find(c => c.id === id);
      setShortlistCards(presenter.addCard(shortlistCards, targetCard));
    }
  };

  return (
    <div className="board">
      <PropertyColumn
        title="Results"
        isSaved={false}
        cards={resultCards}
        updateShortlistCards={updateShortlistCards}
      />

      <PropertyColumn
        title="Saved Properties"
        isSaved={true}
        cards={shortlistCards}
        updateShortlistCards={updateShortlistCards}
      />
    </div>
  );
}
