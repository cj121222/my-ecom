import { AiFillStar } from "react-icons/ai";
import { BsBagHeartFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  
  return (
    <section className="border-[0.6px] border-[#ccc] m-[20px] p-[20px] cursor-pointer">
      <img src={img} alt={title} className="w-[13rem] mb-[1rem]" />

      <div className="">
        <h3 className="mb-[1rem]">{title}</h3>
        <section className="flex justify-start items-center mb-[1rem] text-yellow-600">
          {star} {star} {star} {star}
          <span className="text-[0.9rem] ml-[10px] text-black">{reviews}</span>
        </section>
        <section className="flex justify-around items-center">
          <div>
            <del>{prevPrice}</del> ${newPrice}
          </div>
          <div className="">
            <BsBagHeartFill className="text-[#535353]" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
