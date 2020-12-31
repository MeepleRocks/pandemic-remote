import { gql, useQuery } from "@apollo/client";
import CityCard from "components/CityCard";
import EventCard from "./components/EventCard";

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
  const events = [
    {
      name: "Test Event Card",
      description: "Test event card description",
      condition: "Test event condition",
    },
  ];
  return (
    <div className="App">
      {cards.map((card) => (
        <CityCard {...card} />
      ))}
      {events.map((event) => (
        <EventCard {...event} />
      ))}
    </div>
  );
};

export default App;
