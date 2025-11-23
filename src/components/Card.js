import { getIcon, convertUnit } from "../helpers";

const Card = ({ day, index, unit }) => {
  const date = day.date.toString();
  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const dayOfTheMounth = date.slice(6, 8);
  const formattedDate = new Date(year, month - 1, dayOfTheMounth)
    .toDateString()
    .slice(0, 3);
  const unitShorthard =
    unit === "kelvin"
      ? unit.slice(0, 1).toUpperCase()
      : "°" + unit.slice(0, 1).toUpperCase();
  return (
    <div className="card-container">
      <h3>{index === 0 ? "Today" : formattedDate}</h3>
      <p className="icon-container">{day?.weather && getIcon(day.weather)}</p>
      <p>{day.weather}</p>
      <p>
        {convertUnit(unit, day.temp2m.max)}
        {unitShorthard} max
      </p>
      <p>
        {convertUnit(unit, day.temp2m.min)}
        {unitShorthard} min
      </p>
    </div>
  );
};
export default Card;
