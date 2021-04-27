import React from 'react'
import ItemCard from '../components/ItemCard'

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);



    return (
        <div>
            {favorites.map((item, index) => {
                return <ItemCard key={index} title={item.title} imgUrl={item.img} id={item.id}/>
            })}
        </div>
    )
}
