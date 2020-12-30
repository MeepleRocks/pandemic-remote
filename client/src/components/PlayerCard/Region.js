import React from "react";
import PropTypes from "prop-types";

const Region = ({ id, name }) => {
  const styles = {
    1: { background: "dodgerblue" },
    2: { background: "deepskyblue" },
    3: { background: "goldenrod" },
    4: { background: "darkkhaki" },
    5: { background: "peachpuff" },
    6: { background: "lightsalmon" },
  };
  return (
    <div
      style={{
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        lineHeight: 1,
        padding: "0.5rem",
        textTransform: "uppercase",
        fontWeight: 700,
        ...styles[id],
      }}
    >
      {name}
    </div>
  );
};

Region.propTypes = {};

export default Region;
