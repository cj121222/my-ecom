import "../App.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({handleInputChange, query}) => {
  return (
    <nav className="flex justify-around items-center border border-gray-300 p-5">
      <div className="search-box">
        <input
          className="border-none bg-gray-100 rounded px-4 py-2 z-10 text-[12px] w-[14rem] text-left"
          type="text"
          placeholder="Enter your search shoes."
          onChange={handleInputChange}
          value={query}
        />
      </div>
      <div className="flex justify-center items-center gap-3">
        <a href="#">
          <FiHeart />
        </a>
        <a href="#">
          <AiOutlineShoppingCart />
        </a>
        <a href="#">
          <AiOutlineUserAdd />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
