import RestaurantCard, {withIsOpenLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Footer from "./Footer";


const Body = () => {
   // Local State Variable - Super powerful variable
   const [listOfRestaurants, setListOfRestaurants] = useState([]);
   const [filteredRestaurants, setFilteredRestaurants] = useState([]);

   const [searchText, setSearchText] = useState("");

   const RestaurantCardIsOpen = withIsOpenLabel(RestaurantCard);

   
   


   useEffect(() => {
    fetchData();
}, []);
    
    

   const fetchData = async () => {
   
      const data = await fetch (
        
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    
        );

      const json = await data.json();


      //Optional Chaining
      setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      
      };
      
const onlineStatus = useOnlineStatus();

if (onlineStatus === false) return(
    <h1>Looks like you're offline!! Please check your interenet connection.</h1>
)
      

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (


        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" 
                    value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-2 bg-gray-300 m-4 rounded-lg" 
                     onClick={() => {
                        // Filter the restaurant cards and update thr UI
                        // Search Text

                       const filteredRestaurants = listOfRestaurants.filter(
                        (res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurants(filteredRestaurants);
                     }}
                    >
                        Search</button>

                </div>
                
                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-300 rounded-lg" 
                onClick={() => {

                    const filteredList = listOfRestaurants.filter( 
                        (res) => res?.info?.avgRating > 4
                    );
                       
                    setFilteredRestaurants(filteredList); 
                 }}
                
                >
                    Top Rated Restaurants</button> 
              
                </div>
                
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants.map((restaurant) => (
                   <Link 
                   key={restaurant.info.id}
                   to = {"/restaurants/" + restaurant.info.id}>

                    {/**if the restaurant is open then add a IsOpen label to it */
                       restaurant.info.isOpen ? (
                       <RestaurantCardIsOpen  resData={restaurant}/> 
                       ) : (
                       <RestaurantCard  resData={restaurant} /> )
                    }
                  
                    </Link>
                   ))}


            </div>
           <Footer />
        </div>
    );
};

export default Body;