const SHEET_URL =
  "https://spreadsheets.google.com/feeds/cells/1dqAi9bmEl0d8X3q_9Alxf5Y3da6jttxzz7V18vHSZJA/1/public/full?alt=json";

const data = async () => {
  const result = await fetch(SHEET_URL);
  const json = result.json();
  console.log(json);
};
export default data;
