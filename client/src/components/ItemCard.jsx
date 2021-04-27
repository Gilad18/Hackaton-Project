import React from 'react'

export default function ItemCard({title, imgUrl, id}) {

    const handler = () => {
        
    }

    return (
        <div>
            <div className="title">{title}</div>
            <img src={imgUrl} alt=""/>
            <button onClick={handler}>Show More</button>
        </div>
    )
}
