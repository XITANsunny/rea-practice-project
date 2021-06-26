import React, { useState } from "react";

import "./property_card.css";

/**
 * price: number
 * agency: { brandingColors: { primary: string }, logo: string }
 * mainImage: string
 * isSaved: bool -> indicate whether a property is in the shortlist.
 */

function PropertyCard(props) {
  const { price, mainImage, isSaved } = props;
  const [displayButton, setDisplayButton] = useState(false);

  // TODO handle agency.
  const buttonText = `${isSaved ? "Remove" : "Add"} property `;
  const buttonColor = isSaved ? "#EECDCD" : "#DEEBD7";
  const onMouseLeaveCard = (e) => {
    console.log(e);
    setDisplayButton(false);
  }
  return (
    <div
      onMouseEnter={() => setDisplayButton(true)}
      onMouseLeave={onMouseLeaveCard}
      className="propertyCard"
    >
      <img src={mainImage} className="preview" alt="todo" />
      {displayButton && (
        <button style={{ background: buttonColor }}>{buttonText}</button>
      )}
      $ {price}
    </div>
  );
}

export default PropertyCard;
