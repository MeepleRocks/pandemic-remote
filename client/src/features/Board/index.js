import React from "react";
import { useSelector } from "react-redux";
import Map from "features/Board/Map";
import BoardControls from "./BoardControls";
import { name as boardKey } from "app/redux/modules/Board";

import "./Board.scss";

const Board = () => {
  const { cities = [] } = useSelector((state) => state[boardKey]);
  const data = cities.filter(
    (item) => !isNaN(item.latitude) && !isNaN(item.longitude)
  );
  return (
    <div className="Board">
      <div className="Board__controls"></div>
      <div className="Board__map">{data.length && <Map data={data} />}</div>
      <BoardControls />
    </div>
  );
};

export default Board;
