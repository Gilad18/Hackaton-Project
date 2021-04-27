import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import { Link } from "react-router-dom";

const URL = "http://localhost:5000/api/product";

const Search = () => {
  const [data, setData] = useState("");
  const [term, setTerm] = useState("");
  const [direction, setDirection] = useState("rtl");

  const sendData = async () => {
    const response = await axios({
      method: "post",
      url: URL,
      data: {
        url: term,
      },
    });
    console.log(response.data);
    setData(response.data);
  };
  console.log(direction);
  return (
    <div>
      <div className="search-bar">
        <label className="search-label">Paste URL here:</label>
        <input
          className="search-field"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
        <select
          className="select-options"
          onChange={(e) => setDirection(e.target.value)}
        >
          <option value="rtl" name="ar">
            العربية
          </option>
          <option value="ltr" name="ru">
            русский
          </option>
          <option value="ltr" name="fr">
            Français
          </option>
        </select>
        <button className="trans-button" onClick={sendData}>
          Translate
        </button>
        <Link className="fav-link" to="/favourite">
          Favourites
        </Link>
      </div>
      <div className={` product ${direction}`}>
        <div>{data.title}</div>
        <div>{data.price}</div>
        <div>{data.url}</div>
        <div>
          <img src={data.imgUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Search;
