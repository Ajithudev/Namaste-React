import { useState } from "react";
import DefaultData from "./DefaultData";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  //const [showIndex, setShowIndex] = useState(1);

  if (resInfo == null) {
    return <DefaultData />;
  }

  const { name, cuisines, costForTwoMessage, id } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[4].card.card;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">
        {name}-{resId}
      </h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}{" "}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category.card.card.title}
          // showItems={index === 1 && true}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
