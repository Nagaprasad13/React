import RestaurantCard from "./RestaurantCard";
import { use, useEffect, useState } from "react";
import { Shimmer } from "./ShimmerUI";
import { IMAGE_ID } from "../utils/constant";
export const Body1=()=>{
    const [searchText,updateText]=useState("");
    const[restaurant,setRestaurant]=useState([]);
    const[filteredRestaurant,setFilteredRestaurant]=useState([]);
    useEffect(()=>{fetcha()},[]);
    const fetcha=async ()=>{
        const data= await fetch("https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168&lng=76.9558&page_type=DESKTOP_WEB_LISTING");
        const data1=await data.json();
        setRestaurant(data1.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(data1.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    };
    return restaurant.length===0?<Shimmer/>:(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" onChange={(e)=>{
                        const text=e.target.value;
                        updateText(text);
                        if(text===""){
                            setFilteredRestaurant(restaurant);
                        }
                        else{
                            const filteredRestaurants=restaurant.filter(restaurant=>{
                                return restaurant.info.name.toLowerCase().includes(text.toLowerCase());
                            })
                            setFilteredRestaurant(filteredRestaurants);
                        }
                    }}/>
                    <button>Search</button>
                </div>
            </div>
            <div className="restaurant-container">
                {
                    filteredRestaurant.map(restaurant=>{
                        return (
                        <RestaurantCard key={restaurant.info.id}
                                                name={restaurant.info.name}
                                                place={restaurant.info.locality}
                                                image={IMAGE_ID+restaurant.info.cloudinaryImageId}
                                                rating={restaurant.info.avgRating}/>
                    )})
                }
            </div>
        </div>
    )
}