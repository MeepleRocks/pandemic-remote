import React from "react";
import { useSelector } from "react-redux";
import Map from "features/Board/Map";
import "./Board.scss";

const Board = () => {
  const { cities = [] } = useSelector((state) => state.board);
  const data = cities.filter(
    (item) => !isNaN(item.latitude) && !isNaN(item.longitude)
  );
  console.log(data);
  return (
    <div className="Board">
      <div className="Board__controls"></div>
      <div className="Board__map">{data.length && <Map data={data} />}</div>
    </div>
  );
};

export default Board;
