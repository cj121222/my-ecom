import "../App.css";
import Button from "../components/Buttons";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div className="">
        <h2 className="ml-[20rem] mb-[20px] mt-[20px] text-[20px] font-sans font-semibold">
          Recommended
        </h2>
        <div className="flex ml-[20rem]">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
