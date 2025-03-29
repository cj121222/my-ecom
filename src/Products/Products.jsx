import "../App.css";
import Card from "../components/Card";

const Products = ({ result }) => {
  return (
    <section>
      <section className="flex flex-wrap mt-[2rem] ml-[20rem]">{result}</section>
    </section>
  );
};

export default Products;
