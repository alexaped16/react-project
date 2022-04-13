
import React, { useState, useEffect } from 'react';


function Post() {
    useEffect(() => {
        fetchItems();
    }, []); 

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            `https://kekambas-bs.herokuapp.com/posts`
            );


        const items = await data.json();
        console.log(items.items);
        setItems(items.items)
        
    };

    return (
        <div> 
            <h1> Kekambas Posts </h1>
                {items.map(item => (
                    <h1 key={item.itemid}>{item.name}</h1>
                ))}
        </div>
    );
}

export default Post; 