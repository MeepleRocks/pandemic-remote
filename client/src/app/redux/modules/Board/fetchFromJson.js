import board from "./json/board";

const data = () =>
  board.map((city) => {
    const connections = city.connections
      .split(",")
      .map((con) => con.toString());
    return { ...city, infection: 0, agents: 0, connections };
  });

export default data;
