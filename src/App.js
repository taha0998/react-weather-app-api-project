import { useEffect, useState } from "react";
import TodayDisplay from "./components/TodayDisplay";
import UnitContainer from "./components/UnitContainer";
import Card from "./components/Card";

const App = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [unit, setUnit] = useState("celsius");

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Location API is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(position.coords);
        },
        () => {
          setError("Location access is required to use this feature. Please enable it in your device settings.");
        }
      );
    }
  };
  const fetchData = () => {
    const latitude = location?.latitude;
    const longitude = location?.longitude;
    fetch(
      `https://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=civillight&output=json`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getLocation();
    fetchData();
  }, []);
  const handleClick = (e) => {
    setUnit(e.target.id);
  };

  return (
    <div className="weather-app">
      <TodayDisplay today={data?.dataseries[0]} location={location} />
      {location != null && (
        <div className="cards-container">
          {data?.dataseries.map((day, index) => (
            <Card
              key={index}
              day={day}
              index={index}
              unit={unit}
              location={location}
            />
          ))}
        </div>
      )}
      <UnitContainer handleClick={handleClick} unit={unit} />
      {error}
    </div>
  );
};
export default App;
