import '../../App.css'
import Input from "../../components/Input"

const Colors = ({ handleChange }) => {
  
  return (
    <div>
      <h2 className="mt-3 mb-3 text-2xl">Colors</h2>
      <label className="flex items-center gap-2">
        <input
          onChange={handleChange}
          value=""
          type="radio"
          className="appearance-none h-4 w-4 rounded-full bg-gray-300 checked:bg-blue-500 checked:ring-2 checked:ring-blue-500 relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-white before:opacity-0 checked:before:opacity-100"
          name="test1"
        />
        <span className="rounded-full bg-gradient-to-r from-blue-500 to-red-500 w-[10px] h-[10px]"></span>
        All
      </label>

      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />
      <label className="flex items-center gap-2">
        <input
          onChange={handleChange}
          value="white"
          type="radio"
          className="appearance-none h-4 w-4 rounded-full bg-gray-300 checked:bg-blue-500 checked:ring-2 checked:ring-blue-500 relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-white before:opacity-0 checked:before:opacity-100"
          name="test1"
        />
        <span
          className="rounded-full"
          style={{
            backgroundColor: "white",
            border: "2px solid black",
            width: "10px",
            height: "10px",
          }}
        ></span>
        White
      </label>
    </div>
  );
}

export default Colors