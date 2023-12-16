const WeatherResult = ({ icon, city, temp, condition }) => {
  return (
    <div className="mt-4 w-full flex gap-1 items-center justify-center mx-auto max-w-[252px]">
      <img src={icon} alt="condition icon" className="w-1/3" />
      <div className="w-2/3 pl-1 space-y-1">
        <p>Today</p>
        <h2 className="font-bold text-lg">{city}</h2>
        <p>Temperature: {temp}°C</p>
        <p className="text-yellow-500 font-bold">{condition}</p>
      </div>
    </div>
  );
};

export default WeatherResult;
