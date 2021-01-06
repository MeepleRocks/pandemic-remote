const regionColor = {
  1: "dodgerblue",
  2: "deepskyblue",
  3: "goldenrod",
  4: "darkkhaki",
  5: "peachpuff",
  6: "lightsalmon",
};

const formatData = (data) => {
  const { cities } = data;
  const nodes = cities.map((city) => ({
    id: city.name,
    color: regionColor[city.region],
  }));
  const links = cities.reduce(
    (acc, { name: source = "", connections = [] }) => {
      const cityLinks = connections.map((targetId) => {
        const findTarget =
          cities.find(({ id: cityId }) => cityId === targetId) || {};
        const target = findTarget.name;
        return {
          source,
          target,
        };
      });
      return [...acc, ...cityLinks];
    },
    []
  );
  return { nodes, links };
};

export default formatData;
