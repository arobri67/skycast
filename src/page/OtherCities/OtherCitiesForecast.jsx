import { useGeoLocation } from "../../context/LocationContext";
import GetForecast from "../../components/GetForecast";
import ForecastViewer from "../../components/ForecastViewer";
import "./OtherForcast.css";
import GetCurrentWeather from "../../components/GetCurrentWeather";

const OtherCitiesForecast = () => {
  const { citySelected } = useGeoLocation();
  return (
    <>
      {citySelected !== null ? (
        <>
          <GetCurrentWeather />
          <GetForecast />
          <ForecastViewer />
        </>
      ) : (
        <div className="loading">
          <h2>
            Please select a city in the menu above to see the weather forecast.
          </h2>
        </div>
      )}
    </>
  );
};

export default OtherCitiesForecast;
