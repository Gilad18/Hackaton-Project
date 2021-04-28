import React from 'react'
import { useHistory } from 'react-router-dom'
import './itemCard.css'


export default function ItemCard({title, imgUrl, id}) {
    const history = useHistory();

    const handler = () => {
        history.push(`/product/${id}`);
    }

    return (
        <div >
            <div className="itemCard">
            
            <img  className="imageCard" src={imgUrl} alt={title}/>
            <div className="card-title">{title}</div>
            <button onClick={handler}>Show More</button>
            </div>
           
        </div>
    )
}
