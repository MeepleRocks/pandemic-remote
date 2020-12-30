import React from "react";
import {
  Filter1,
  Filter2,
  Filter3,
  Filter4,
  Filter5,
  Filter6,
  Filter7,
  Filter8,
  Filter9,
} from "@material-ui/icons";

const icons = {
  1: Filter1,
  2: Filter2,
  3: Filter3,
  4: Filter4,
  5: Filter5,
  6: Filter6,
  7: Filter7,
  8: Filter8,
  9: Filter9,
};
const Number = ({ value }) => {
  const Comp = icons[value];
  return <Comp style={{ lineHeight: 1, fontSize: "1rem" }} />;
};

Number.propTypes = {};

export default Number;
