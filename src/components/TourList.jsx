import React, {useState} from 'react';
import Tour from "./Tour";
import "./TourList.css";
import TourData from "../TourData";

console.log(TourData.map((valueTour) => {
    console.log(valueTour)
}));

function TourList() {

    const [itemList, setItemList] = useState(TourData);

    console.log(itemList);

    const deleteItem = (id) =>{
        console.log(id)
        const updateItemList = itemList.filter((tour) => tour.id !== id);
        console.log(updateItemList);
        setItemList(updateItemList);
    }

    return (
        <div className="tourList">
            {itemList.map((valueTour) =>{
                return <Tour
                deleteItem={deleteItem}
                id={valueTour.id}
                image={valueTour.image}
                city={valueTour.city}
                name={valueTour.name}
                info={valueTour.info}
                />
            })}
        </div>
    )
}

export default TourList;




