import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Faction from "components/Faction";

const CardSelector = ({ id, options, label, onChange }) => {
  const [search, setSearch] = useState("");
  const filtered = options.filter((option) => option.name.includes(search));

  const handleChange = ({ target: { value = "" } = {} }) => {
    setSearch(value);
  };

  const handleClick = (value) => {
    onChange(value);
  };

  const handleKeyUp = ({ key }) => {
    if (key !== "Enter") {
      return;
    }
    const data = filtered[0];
    if (data) {
      onChange(data.id);
      setSearch("");
    }
  };

  return (
    <div>
      <TextField
        label={label}
        value={search}
        variant="outlined"
        size="small"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
      <div style={{ maxHeight: "20rem", overflowY: "scroll" }}>
        {filtered.map((option) => {
          const factionId = option.faction
            ? option.faction.id.toString()
            : null;
          return (
            <span
              tabIndex="0"
              onClick={() => handleClick(option.id)}
              onKeyUp={({ key }) => {
                if (key !== "Enter") {
                  return;
                }
                handleClick(option.id);
              }}
            >
              <input type="hidden" name={option.id} value={option.id} />
              <Faction id={factionId} />
              <span style={{ display: "inline-block", marginLeft: "0.5rem" }}>
                {option.name}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
  /*
  return (
    <Autocomplete
      id={id}
      clearOnBlur={true}
      size="small"
      style={{ width: "10rem" }}
      onChange={handleChange}
      options={options}
      autoHighlight
      getOptionLabel={(option) => option.name}
      value={null}
      renderOption={(option) => {
        const factionId = option.faction ? option.faction.id.toString() : null;
        return (
          <>
            <input type="hidden" name={option.id} value={option.id} />
            <Faction id={factionId} />
            <span style={{ display: "inline-block", marginLeft: "0.5rem" }}>
              {option.name}
            </span>
          </>
        );
      }}
      renderInput={(params) => {
        return <TextField {...params} label={label} variant="outlined" />;
      }}
    />
  );*/
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
