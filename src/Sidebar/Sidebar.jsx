import '../App.css'
import Category from './Category/Category'
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar w-[15%] fixed h-[100%] border-r-[2px] border-[#e5e5e5] z-[3] flex flex-col items-center">
        <div className="logo-container mb-[4rem]">
          <h1 className="text-[22px] font-normal mb-[20px] mt-[1.3rem]">🛒</h1>
        </div>
        <Category handleChange = {handleChange}/>
        <Price handleChange = {handleChange}/>
        <Colors handleChange = {handleChange}/>
      </section>
    </>
  );
};

export default Sidebar