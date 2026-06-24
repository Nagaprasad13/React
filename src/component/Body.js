import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import { Shimmer } from "./ShimmerUI";
import { IMAGE_ID } from "../utils/constant";
const Body = () => {
    const [searchText, searchTextUpdate] = useState("");
    const [restaurants,setRestaurants]=useState([]);
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    useEffect(()=>{
        fetchData();  
    },[]);
    const fetchData=async ()=>{
        const data=await fetch("https://namastedev.com/api/v1/listRestaurants");
        const json=await data.json();
        console.log(json);
        setRestaurants(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        
    }
    return restaurants.length===0?(<Shimmer/>):
    (
        <div className="body">
            <div className="filter">
            <div className="Search">
                <input type="text" className="Search-box" onChange={(e)=>{
                    const text=e.target.value
                    searchTextUpdate(text)
                    if(text===""){
                        setFilteredRestaurants(restaurants);
                    }
                    else{
                        const filteredRestaurant=restaurants.filter((restaurant)=>{
                            return restaurant.info.name.toLowerCase().includes(text.toLowerCase());
                        })
                        setFilteredRestaurants(filteredRestaurant);
                        }
                    }
                }/>
                <button >Search</button>
            </div>
            </div>

            <div className="restaurant-container">
            {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info.id}
                        name={restaurant.info.name}
                        place={restaurant.info.locality}
                        image={IMAGE_ID+restaurant.info.cloudinaryImageId}
                        rating={restaurant.info.avgRating}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;