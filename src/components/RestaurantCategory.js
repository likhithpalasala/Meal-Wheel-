import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex }) => {
const handleClick = () => {
    setShowIndex();
};
    
    return (
        <div>
            {/** accordian Header */}
            <div className="w-6/12 mx-auto my-3 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                  <span className="font-bold text-m">
                    {data.title} ({data.itemCards.length})
                  </span>
                  <span>▼</span>
                </div>
               
                    
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
            {/** accordian Body */}
            
        </div>
    );
};

export default RestaurantCategory;