import Hand from "./components/Hand";

const App = () => {
  const hands = [
    ["1", "9", "53", "32", "25", "17", "20"],
    ["2", "8", "33", "26", "52", "18", "21"],
  ];
  return (
    <div className="App">
      {hands.map((hand, i) => (
        <Hand key={`hand-${i}`} cards={hand} />
      ))}
    </div>
  );
};

export default App;
