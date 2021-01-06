import React from "react";
// import { useSelector } from "react-redux";
import Chart from "components/Chart";
import "./Board.scss";

const Board = () => {
  //const { cities = [] } = useSelector((state) => state.board);

  return (
    <div className="Board">
      <div className="Board__controls">
        <button>do sumfin</button>
      </div>
      <div className="Board__map">
        <Chart />
      </div>
    </div>
  );
};

export default Board;
