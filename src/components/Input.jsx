import { BsLightbulbOff } from "react-icons/bs";


const input = ({ handleChange, value, title, name, color }) => {
  
  return (
    <label className="flex items-center gap-2">
      <input
        onChange={handleChange}
        value={value}
        type="radio"
        className="appearance-none h-4 w-4 rounded-full bg-gray-300 checked:bg-blue-500 checked:ring-2 checked:ring-blue-500 relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-white before:opacity-0 checked:before:opacity-100"
        name={name}
      />
      <span
        className="h-[10px] w-[10px] rounded-full"
        style={{ backgroundColor: color }}
      ></span>
      {title}
    </label>
  );
};

export default input