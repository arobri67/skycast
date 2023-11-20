import { useGeoLocation } from "../context/LocationContext";
import citiesLocation from "../DATA/citiesLocation";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CitySelection = () => {
  const { setLocation, setCity, citySelected } = useGeoLocation();

  const handleCitySelection = (e) => {
    const cityValue = e.target.value;
    setCity(cityValue);
  };

  useEffect(() => {
    const selectedCityObj = citiesLocation.find(
      (city) => city.city === citySelected
    );

    if (selectedCityObj) {
      setLocation({
        latitude: selectedCityObj.lat,
        longitude: selectedCityObj.lon,
      });
    }
  }, [citySelected]);
  return (
    <>
      <select name="citySelect" id="citySelect" onChange={handleCitySelection}>
        <option value="">Please choose a city</option>
        {citiesLocation.map((city) => (
          <option key={city.city} value={city.city}>
            {city.city.toUpperCase()}
          </option>
        ))}
      </select>
    </>
  );
};

export default CitySelection;

// navigate(`/other-cities/other-current`);
