import React from 'react'
import { useHistory } from 'react-router-dom'

export default function ItemCard({title, imgUrl, id}) {
    const history = useHistory();

    const handler = () => {
        history.push(`/shop/product/${id}`);
    }

    return (
        <div>
            <div className="title">{title}</div>
            <img src={imgUrl} alt=""/>
            <button onClick={handler}>Show More</button>
        </div>
    )
}
