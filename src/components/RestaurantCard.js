import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    sla,
  } = resData;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg">
      <img
        className="rounded-lg h-48 w-96 object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>ETA : {sla?.slaString}</h4>
    </div>
  );
};


export const withPromotedLabel = (RestaurantCard) =>{

  return (props) => {
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };

}

export default RestaurantCard;
