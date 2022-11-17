/* eslint-disable react/prop-types */
export const availableColors = ['green', 'blue', 'orange', 'purple', 'red'];

const ColorFilters = ({ value: colors }) => {
  const renderedColors = availableColors.map((color) => {
    const checked = colors.includes(color);

    return (
      <label htmlFor="color" key={color}>
        <input id="color" type="checkbox" name={color} defaultChecked={checked} />
        <span
          className="color-block"
          style={{
            backgroundColor: color,
          }}
        />
        {color}
      </label>
    );
  });

  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSelection">{renderedColors}</form>
    </div>
  );
};

export default ColorFilters;
