import { useState } from "react";
import { PropertyCard } from "../property_card/property_card";
import { PropertyColumnPresenter } from "./property_column_presenter";

export function PropertyColumn(props) {
  const { title, isSaved, initialCards } = props;
  const presenter = new PropertyColumnPresenter();
  const [cards, setCards] = useState(initialCards);
  const onCardButtonClick = (id) => {
    if (isSaved) {
      setCards(presenter.removeCard(cards, id));
    } else {

    }
  };
  console.log(cards)

  return (
    <>
    {cards.map((c, id) => (
      <PropertyCard
        key={id}
        price={c.price}
        id={c.id}
        mainImage={c.mainImage}
        isSaved={isSaved}
        onButtonClick={onCardButtonClick}
      />
    ))}
    </>
  );
}
