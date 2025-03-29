import "../../App.css"
import Input from "../../components/Input"

const Price = ({handleChange}) => {
  return (
    <div className="ml-[20px]">
      <h2 className="mb-3 mt-3 text-2xl">Price</h2>
      <label className="flex items-center gap-2">
        <input
          onChange={handleChange}
          value=""
          type="radio"
          className="appearance-none h-4 w-4 rounded-full bg-gray-300 checked:bg-blue-500 checked:ring-2 checked:ring-blue-500 relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-white before:opacity-0 checked:before:opacity-100"
          name="test2"
        />
        <span className="ml-3"></span>All
      </label>

      <Input handleChange={handleChange} value={50} title="$0 - 50" name="test2" />
      <Input handleChange={handleChange} value={100} title="$50 - 100" name="test2" />
      <Input handleChange={handleChange} value={150} title="$10 - 150" name="test2" />
      <Input handleChange={handleChange} value={200} title="Over $150" name="test2" />
    </div>
  );
}

export default Price