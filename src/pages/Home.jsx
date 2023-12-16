import { useRef, useState } from "react";
import weatherIcon from "../assets/img/logo.png";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { getCurrentLocation } from "../helper/getCurrentLocation";
import { getSearchResult } from "../helper/getSearchResult";
import { getWeather } from "../helper/getWeather.js";
import SearchResult from "../components/SearchResult.jsx";
import WeatherResult from "../components/WeatherResult.jsx";
import HashLoader from "react-spinners/HashLoader";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [weatherData, setWeatherData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchBox = useRef();

  return (
    <div
      className="w-full h-full flex items-center justify-center p-4 md:p-8"
      onClick={(e) => {
        if (e.target === searchBox.current) return;
        setShowSearch(false);
      }}
    >
      <div
        className={`w-full max-w-xs sm:max-w-sm rounded-xl bg-white/30 shadow-md p-8 sm:p-12 flex flex-col items-center`}
      >
        <div className="flex items-center justify-center gap-4">
          <img src={weatherIcon} alt="weather icon" className="w-10" />
          <h1 className="font-bold text-2xl">Weather Forecast</h1>
        </div>

        <p
          className="flex gap-1 items-center py-4 text-yellow-500 font-bold underline cursor-pointer hover:opacity-80 transition-opacity"
          onClick={async () => {
            try {
              setWeatherData("");
              setLoading(true);
              const pos = await getCurrentLocation();
              const data = await getWeather(pos);
              setLoading(false);
              setWeatherData(data);
            } catch (error) {
              console.error(error);
              setLoading(false);
              setError("Please refresh the page and allow location access!");
            }
          }}
        >
          Use your current location <FaLocationCrosshairs />
        </p>

        <div className="flex flex-col relative w-full">
          <input
            type="text"
            name="city"
            placeholder="Or enter a city..."
            className={`${
              searchQuery && showSearch ? "rounded-t-xl" : "rounded-xl"
            } shadow-md px-4 py-1 max-w-[252px] mx-auto w-full outline-none border-transparent border-2 focus:border-main`}
            onInput={async (e) => {
              setSearchQuery(e.target.value);
              if (!e.target.value) return;

              const data = await getSearchResult(e.target.value);
              setSearchResult(data);
            }}
            onFocus={() => setShowSearch(true)}
            ref={searchBox}
          />
          {searchQuery && showSearch && (
            <SearchResult
              data={searchResult}
              setWeatherData={setWeatherData}
              setLoading={setLoading}
            />
          )}
        </div>
        {loading && <HashLoader className="mt-8" color="#eab308" />}
        {error && <p>{error}</p>}
        {weatherData && (
          <WeatherResult
            icon={weatherData.current.condition.icon}
            city={`${weatherData.location.name}, ${weatherData.location.country}`}
            temp={weatherData.current.temp_c}
            condition={weatherData.current.condition.text}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
