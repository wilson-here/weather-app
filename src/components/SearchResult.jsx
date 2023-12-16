import { getWeather } from "../helper/getWeather";

const SearchResult = ({ data, setWeatherData, setLoading }) => {
  return (
    <ul className="absolute w-full top-full left-0 right-0 mx-auto  text-white max-w-[252px]">
      {data.length ? (
        data.map((item, i) => (
          <li
            key={i}
            className={`${
              i === data.length - 1 ? "rounded-b-xl" : ""
            } px-4 py-1 cursor-pointer bg-[#008DEF] hover:bg-yellow-500`}
            onClick={async () => {
              setWeatherData("");
              setLoading(true);
              const data = await getWeather(item.name);
              setLoading(false);
              setWeatherData(data);
            }}
          >
            {item.name}, {item.country}
          </li>
        ))
      ) : (
        <li className="px-4 py-1 pointer-events-none italic bg-[#008DEF] rounded-b-xl ">
          No result found <span className="not-italic">😅😅😅</span>
        </li>
      )}
    </ul>
  );
};

export default SearchResult;
