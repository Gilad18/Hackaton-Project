import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Pages/Search";
import Favourites from "./Pages/Favorites.page";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          {/* <Route path="/shop/welcome" exact component={Welcome} />
          <Route path="/shop/product/:product" exact component={Product} /> */}
          <Route path="/shop/favourite" exact component={Favourites} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
