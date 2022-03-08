import { useState, useEffect } from "react";
import cardsData from "../api/card.json";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-3 gap-x-4">
      {cards.length &&
        cards.map((card) => (
          <div className="bg-white p-14 rounded-lg shadow-sm flex flex-col items-center jusify-center text-center">
            <img className="mb-6" src={card.image} />
            <h6 className="font-semibold text-lg text-primary-brand-color">
              {card.title}
            </h6>
            <p className="mt-2 text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Cards;
