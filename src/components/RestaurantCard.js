import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props; 
    
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
       sla : { deliveryTime },

    } = resData?.info;



    return (
        <div className="m-4 p-3 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img  
              className="rounded-lg w-full h-40 object-cover"
              alt="rest-logo" src= { CDN_URL + resData.info.cloudinaryImageId } 
            />
            <h3 className= "font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}⭐</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes ⏲️</h4> 
        </div>
    )
};

//Higher order component

//input- RestaurantCard => RestaurantCardIsOpen

export const withIsOpenLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-300 text-black m-1 p-1 rounded-lg">
                    Open
                    </label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};


export default RestaurantCard;