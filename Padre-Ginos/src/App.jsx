import { createRoot } from "react-dom/client";
import PizzaOfTheDay from "./PizzaOfTheDay";
import { StrictMode } from "react";
import Order from "./Order";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Padre Gino's Pizzeria"),
//     React.createElement(Pizza, {
//       name: "Pepperoni Pizza",
//       description: "A delicious pizza topped with pepperoni and cheese.",
//     }),
//     React.createElement(Pizza, {
//       name: "Margherita Pizza",
//       description:
//         "A classic pizza with fresh tomatoes, mozzarella cheese, and basil.",
//     }),
//     React.createElement(Pizza, {
//       name: "Veggie Pizza",
//       description: "A healthy pizza loaded with fresh vegetables.",
//     }),
//   ]);
// };
const App = () => {
  return (
    <div>
      <h1 className="logo">Padre Gino's Pizzeria</h1>
      <Order />
      <PizzaOfTheDay />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
