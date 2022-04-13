
import React, { useState, useEffect } from 'react';


function KekambasCrew() {
    useEffect(() => {
        fetchItems();
    }, []); 

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            `https://kekambas-bs.herokuapp.com/kekambas`
            );


        const items = await data.json();
        console.log(items.item);
        setItems(items.item)
    };

    return (
        <div> 
            <h1> Kekambas Crew </h1>
                {items.map(item => (
                    <h1 key={item.itemid}>{item.name}</h1>
                ))}
        </div>
    );
}

export default KekambasCrew