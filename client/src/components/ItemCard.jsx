import React from 'react'
import { useHistory } from 'react-router-dom'
import './itemCard.css'


export default function ItemCard({title, imgUrl, id}) {
    const history = useHistory();

    const handler = () => {
        history.push(`/shop/product/${id}`);
    }

    return (
        <div >
            <div className="itemCard">
            <div>{title}</div>
            <img  className="imageCard" src={imgUrl} alt={title}/>
            <button onClick={handler}>Show More</button>
            </div>
           
        </div>
    )
}
