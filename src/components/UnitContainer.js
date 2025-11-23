const UnitContainer = ({ handleClick, unit }) => {
  return (
    <div className="unit-container">
      <button
        id="celsius"
        className={unit === "celsius" ? "unit-border" : null}
        onClick={handleClick}
      >
        °C
      </button>
      <button
        id="fahrenheit"
        className={unit === "fahrenheit" ? "unit-border" : null}
        onClick={handleClick}
      >
        °F
      </button>
      <button
        id="kelvin"
        className={unit === "kelvin" ? "unit-border" : null}
        onClick={handleClick}
      >
        K
      </button>
    </div>
  );
};
export default UnitContainer;
