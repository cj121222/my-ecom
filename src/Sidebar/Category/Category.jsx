import "../../App.css"
import Input from "../../components/Input"


const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="mb-3 text-2xl">Category</h2>

      <div className="flex flex-col">
        <label className="flex items-center gap-2">
          <input
            onChange={handleChange}
            value=""
            type="radio"
            className="appearance-none h-4 w-4 rounded-full bg-gray-300 checked:bg-blue-500 checked:ring-2 checked:ring-blue-500 relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-white before:opacity-0 checked:before:opacity-100"
            name="test"
          />
          <span className="ml-3"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category