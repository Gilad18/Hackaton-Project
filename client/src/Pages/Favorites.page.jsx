import React, { useState } from "react";
import ItemCard from "../components/ItemCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  //   setFavorites(["a"]);
  return (
    <div className="items-container">
      {favorites.map((item, index) => {
        return (
          <ItemCard
            key={index}
            title={item.title}
            imgUrl={item.img}
            id={item.id}
          />
        );
      })}
      <div>Hi</div>
    </div>
  );
}
