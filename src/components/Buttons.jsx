
const buttons = ({ onClickHandler, value, title }) => {
  return (
    <button
      className="border-[0.6px] border-[#ccc] bg-transparent rounded-[5px] mr-2 px-[20px] py-[10px] text-[1em] text-[#323232] font-sans cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition-shadow"
      onClick={onClickHandler}
      value={value}
    >
      {title}
    </button>
  );
};

export default buttons