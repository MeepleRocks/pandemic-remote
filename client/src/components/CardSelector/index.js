import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Faction from "components/Faction";
import "./CardSelector.scss";

const CardSelector = ({ id, options, label, onChange }) => {
  const [search, setSearch] = useState("");
  const data = options.filter((option) => option.name.includes(search));
  const filtered = Array.isArray(data) ? data : [];

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
    <div className="CardSelector">
      <TextField
        label={label}
        value={search}
        variant="outlined"
        size="small"
        className="CardSelector__input"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
      <div className="CardSelector__list">
        {filtered.length ? (
          filtered.map((option) => {
            const factionId = option.faction
              ? option.faction.id.toString()
              : null;
            return (
              <div
                tabIndex="0"
                className="CardSelector__item"
                onClick={() => handleClick(option.id)}
                onKeyUp={({ key }) => {
                  if (key !== "Enter") {
                    return;
                  }
                  handleClick(option.id);
                }}
              >
                <div>
                  <Faction id={factionId} />
                </div>
                <div>{option.name}</div>
              </div>
            );
          })
        ) : (
          <div style={{ fontSize: "1rem", color: "#c1c1c1" }}>
            No cards available
          </div>
        )}
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
