import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Faction from "features/CityCard/Faction";

const CardSelector = ({ id, options, label, onChange }) => {
  const handleChange = (event) => {
    const { target: { children } = {} } = event;
    const input = children ? children[0] : null;
    const value = input ? input.value : "";
    if (value) {
      onChange(value);
    }
  };

  return (
    <Autocomplete
      id={id}
      clearOnBlur={true}
      size="small"
      style={{ width: 300 }}
      onChange={handleChange}
      options={options}
      autoHighlight
      getOptionLabel={(option) => option.name}
      value={null}
      renderOption={(option) => {
        const factionId = option.faction ? option.faction.id : null;
        return (
          <>
            <input type="hidden" name={option.id} value={option.id} />
            <Faction icon={factionId} />
            {option.name}
          </>
        );
      }}
      renderInput={(params) => {
        return <TextField {...params} label={label} variant="outlined" />;
      }}
    />
  );
};

CardSelector.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.array,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

CardSelector.defaultProps = {
  label: "Card Selector",
  options: [],
  onChange: () => null,
};
export default CardSelector;
