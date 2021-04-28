import axios from "axios";
import React, { useState , useEffect } from "react";
import ItemCard from "../components/ItemCard";
import '../components/itemCard.css'

const URL = "http://localhost:5000/api/product";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
   const search = async () => {
      const getData = await axios.get(URL)
      console.log(getData.data.Items)
      setFavorites(getData.data.Items)
   }
    search()
  }, [])


  return (
    <div className="items-container">
      <div>Your Favorite products:</div>
      {favorites.map((item, index) => {
        return (
          <ItemCard

            key={index}
            title={item.title}
            imgUrl={item.imgUrl}
            id={item.id}
          />
        )
      })}
      
    </div>
  );
}
