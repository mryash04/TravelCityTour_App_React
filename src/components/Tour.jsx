import React, {useState} from 'react';
import City from "../city1.jpeg";
import CloseIcon from '@material-ui/icons/Close';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "./Tour.css";
import TourData from "../TourData";

function Tour(props) {

    // const [itemList, setItemList] = useState(TourData);

    const[color, setColor] = useState("grey");

    const changeTextColor = () =>{
        setColor("green");
    }

    // console.log(itemList.map(valueItem => console.log(valueItem)));
    // console.log(props.id);
    const mainId = props.id;
    // console.log(mainId);

    // const DeleteItem = ({mainId}) =>{
    //     const updateItemList = itemList.map((tour) => tour.id !== mainId);
    //     console.log(updateItemList);
    //     setItemList(updateItemList);
    // }

    return (
        <div className="tour">
            <div className="image-container">
                <img src={props.image} alt="cityImage" style={{width:"300px"}}/>
                <div className="close-btn">
                    <span onClick={() => props.deleteItem(props.id)}><CloseIcon /></span>
                </div>
            </div>
            <div className="tour-info">
                <div className="city-name">
                    <h2 style={{color}}>{props.city}</h2>
                    <h3>{props.name}</h3>
                </div>
                <div className="city-info">
                    <p>Info<span className="arrow-icon" onMouseOver={changeTextColor}><ArrowDropDownIcon /></span></p>
                </div>
                <div className="city-info-knowledge">
                    <p style={{color}}>{props.info}</p>
                </div>
            </div>
        </div>
    )
}

export default Tour;