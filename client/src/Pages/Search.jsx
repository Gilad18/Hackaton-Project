import React, { useState } from "react";
import axios from "axios";
const URL = "get for aws people";

const Search = () => {
  const [data, setData] = useState("");
  const [term, setTerm] = useState("");
  const getData = async () => {
    const response = await axios.get(URL);
    console.log(response);
    setData(response);
  };
  const sendData = async () => {
    const response = await axios.post(URL, term);
    console.log(response);
  };
  return (
    <div>
      <input onChange={(e) => setTerm(e.target.value)} value={term} />
      <button onClick={sendData}>send</button>
      <button onClick={getData}>receive</button>
      <div>{data}</div>
    </div>
  );
};

export default Search;
