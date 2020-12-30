import { gql, useQuery } from "@apollo/client";
import PlayerCard from "components/PlayerCard";

const Q_CARDS = gql`
  query Cards {
    cards {
      id
      name
      region {
        name
        id
      }
      faction {
        name
        id
      }
      number
    }
  }
`;

const App = () => {
  const { data: { cards = [] } = {} } = useQuery(Q_CARDS);
  return (
    <div className="App">
      {cards.map((card) => (
        <PlayerCard {...card} />
      ))}
    </div>
  );
};

export default App;
