import React, { useState } from 'react'
import Menu from "./menuApi.js";
import "./style.css";
import MenuCard from './MenuCard.js';

const Resturant = () => {
    const [menuData, setMenuData]= useState(Menu);

    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    }
    //console.log(menuData);
    return (
        <div>
            <nav className="navbar">
                <div className="btn-group">
                    
                <button className="btn-group_item" onClick={() => filterItem("breakfast")}>
                        Breakfast
                    </button>

                    <button className="btn-group_item" onClick={() => filterItem("lunch")}>
                        lunch
                    </button>
                    <button className="btn-group_item" onClick={() => filterItem("Evening")}>
                        Evening
                    </button>
                    <button className="btn-group_item" onClick={() => filterItem("Dinner")}>
                        Dinner
                    </button>
                    <button className="btn-group_item" onClick={() => setMenuData(Menu)}>
                        All
                    </button>
                </div>
            </nav>
           <MenuCard menuData={menuData} />
        </div>
    )
}

export default Resturant