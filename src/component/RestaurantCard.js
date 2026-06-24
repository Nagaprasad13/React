const RestaurantCard=(restaurant)=>(
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={restaurant.image}
        alt={restaurant.name}
      />

      <div className="restaurant-content">
        <h2 className="restaurant-name">
          {restaurant.name}
        </h2>

        <p className="restaurant-place">
          📍 {restaurant.place}
        </p>

        <p className="restaurant-rating">
          ⭐ {restaurant.rating}
        </p>
      </div>
    </div>
)
export default RestaurantCard;