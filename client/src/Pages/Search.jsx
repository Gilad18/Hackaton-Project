import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./Search.css";

const URL = "http://localhost:5000/api/product";


const Search = () => {
  const [data, setData] = useState("");
  const [term, setTerm] = useState("");
  const [direction, setDirection] = useState("rtl");
  const [spinner, setSpinner] = useState("page-loader");
  const [currency, setCurrency] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const sendData = async () => {
    history.push("/");
    if (term) {
      setError("");

      setSpinner("spinner");
      setData("");
      setCurrency("");
      const response = await axios({
        method: "post",
        url: URL,
        data: {
          url: term,
        },
      });

      console.log(response.data);
      setData(response.data);
      setSpinner("page-loader ");
      setCurrency('ש"ח');
    } else {
      setError(
        "No URL found in search box, please paste a valid Azrieli.com product page"
      );
    }
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
        <Link onClick={() => setData("")} className="fav-link" to="/favourite">
          Favourites
        </Link>
      </div>
      <div className="no-url">{error}</div>
      <div className={spinner}></div>
      <div className={` product ${direction}`}>
        <div className="product-title">{data.title}</div>
        <div className="product-image">
          <div>
            <img src={data.imgUrl} alt="" />
          </div>
          <div className="product-price">
            {data ? `${data.price} ${currency}` : null}
          </div>
          <div className="product-desc">{data.description}</div>

          <div className="product-pay-num">{data.numOfPayments}</div>
          <div className="product-url">{data.url}</div>
        </div>
      </div>
    </div>
  );
};

export default Search;
