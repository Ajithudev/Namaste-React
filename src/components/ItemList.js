import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();

  const handleAdditem = (item) =>{
    dispatch(addItem(item));
  }


  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2  text-left flex justify-between">
          <div className="w-9/12">
            <div className="py-2">
               <span>{item.card.info.isVeg ? "🟢" : "🔴"}</span> 
              <br></br>
              <span className="py-2 font-bold text-gray-600 ">
                {item.card.info.name}
              </span>
              <span className="font-bold break-all">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultprice / 100}
              </span>
            </div>
            {/* <p className="text-x5">{item.card.info.description}</p> */}
          </div>
          <div className="w3/12 p-4">
            <div className="absolute">
              <button className="text-green-600 bg-gray-200 p-2 rounded-lg mx-15 my-30" onClick={()=>handleAdditem(item)}>ADD  </button>
               
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-50 h-35" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
