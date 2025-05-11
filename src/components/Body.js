import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { restaurantList } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {
  const [listRestaurantList, setListRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const { loggedInUser, setUserName } = useContext(userContext);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0158605&lng=76.3418666&collection=80402&tags=layout_Shawarma_Contextual&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const json = await data.json();

      const restaurants = json.data?.cards
        ?.filter(
          (card) =>
            card.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )
        ?.map((card) => card.card.card.info);

      setListRestaurantList(restaurants);
      setFilteredRestaurantList(restaurants);
      console.log(restaurants);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      setListRestaurantList([]);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Look like you're offline..!! Please check your interner Connection.
      </h1>
    );
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-black border-solid"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4"
            onClick={() => {
              const filteredRest2 = listRestaurantList.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurantList(filteredRest2);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listRestaurantList.filter(
                (res) => res.avgRating >= 4.5
              );
              setFilteredRestaurantList(filteredList);
            }}
          >
            Top rated restas
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <label>User name : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          />
        </div>
      </div>
      {/* <div className="search">Search</div> */}
      <div className="flex flex-wrap">
        {filteredRestaurantList.map((rest) => (
          <Link key={rest.id} to={"/restmenu/" + rest.id}>
            {rest.promoted ? (
              <RestaurantCardPromoted resData={rest} />
            ) : (
              <RestaurantCard resData={rest} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
