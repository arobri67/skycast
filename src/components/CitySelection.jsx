import { useGeoLocation } from "../context/LocationContext";
import citiesLocation from "../DATA/citiesLocation";

const CitySelection = () => {
  // Access setLocation, setCity, and citySelected from LocationContext
  const { setLocation, setCity, citySelected } = useGeoLocation();

  // Handler function for city selection
  const handleCitySelection = (e) => {
    const cityValue = e.target.value;
    setCity(cityValue);
  };

  // Effect to update the location when a city is selected
  useEffect(() => {
    // Find the selected city in the citiesLocation array
    const selectedCityObj = citiesLocation.find(
      (city) => city.city === citySelected
    );

    // If the selected city is found, update the location
    if (selectedCityObj) {
      setLocation({
        latitude: selectedCityObj.lat,
        longitude: selectedCityObj.lon,
      });
    }
  }, [citySelected]); // Run the effect when citySelected changes
  return (
    <>
      {/* Dropdown for city selection, generate dynamically based on citiesLocation array */}
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
