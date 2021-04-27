import React, { useState } from "react";

import axios from "axios";
import "./Search.css";
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
        <label>Paste URL here:</label>
        <input onChange={(e) => setTerm(e.target.value)} value={term} />
        <select onChange={(e) => setDirection(e.target.value)}>
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
        <button onClick={sendData}>Translate</button>
      </div>
      <div className={` product ${direction}`}>
        <div>{data.title}</div>
        <div>{data.price}</div>
        <div>{data.url}</div>
        <div>
          <img src={data.imgUrl} />
        </div>
      </div>
    </div>
  );
};

export default Search;
