import board from "./json/board";

const data = () =>
  board.map((city) => {
    const connections = city.connections
      .split(",")
      .map((con) => con.toString());
    return {
      ...city,
      latitude: parseFloat(city.latitude),
      longitude: parseFloat(city.longitude),
      infection: 0,
      agents: 0,
      connections,
      incidents: 0,
    };
  });

export default data;
