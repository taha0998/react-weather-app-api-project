const getIcon = (weatherType) => {
  let weatherStyle;
  switch (weatherType) {
    case "lightrainday":
      weatherStyle = <i className="fa-solid fa-cloud-rain"></i>;
      break;
    case "clear":
      weatherStyle = <i className="fa-solid fa-sun"></i>;
      break;
    case "cloudy":
      weatherStyle = <i className="fa-solid fa-cloud"></i>;
      break;
    case "cloud":
      weatherStyle = <i className="fa-solid fa-coud-rain"></i>;
      break;
    case "pcloudy":
      weatherStyle = <i className="fa-solid fa-cloud-sun"></i>;
      break;
    case "snow":
      weatherStyle = <i className="fa-solid fa-snowflake"></i>;
      break;
    case "ts":
      weatherStyle = <i className="fa-solid fa-bolt"></i>;
      break;
    default:
      weatherStyle = <i className="fa-solid fa-sun"></i>;
  }
  return weatherStyle;
};

const convertUnit = (unit, currentTemp) => {
  const convertToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };
  const convertToKelvin = (celsius) => {
    return celsius + 273.15;
  };
  let temp;
  switch (unit) {
    case "celsius":
      temp = currentTemp;
      break;
    case "fahrenheit":
      temp = convertToFahrenheit(currentTemp);
      break;
    case "kelvin":
      temp = convertToKelvin(currentTemp);
      break;
    default:
      break;
  }
  return temp;
};

export { getIcon, convertUnit };
