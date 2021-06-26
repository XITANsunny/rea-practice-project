import { PropertyCard } from "../property_card/property_card";

export function PropertyColumn(props) {
  const { cards, title, isSaved, updateShortlistCards } = props;
  const onCardButtonClick = (id) => {
    updateShortlistCards(id, isSaved);
  };

  return (
    <div>
      <h2>{title}</h2>
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
    </div>
  );
}
