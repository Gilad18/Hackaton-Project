import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from  '../Pages/Search'

export default function Route() {
    return (
        <div>
            <BrowserRouter>
                <div >
                 <Route path="/shop"  component={Header}/>
                 <Route path="/shop/welcome" exact component={Welcome}/>
                 <Route path="/shop/product/:product" exact component={Product}/>
                 <Route path="/shop/favourite" exact component={Favourites}/>
                </div>
                </BrowserRouter>
        </div>
    )
}
