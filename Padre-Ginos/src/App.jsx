import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

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
      <h1>Padre Gino's Pizzeria</h1>
      <Pizza
        name="BBQ Chicken Pizza"
        description="A delicious pizza topped with BBQ chicken and cheese."
        image="/public/pizzas/bbq_ckn.webp"
      />
      <Pizza
        name="Five Cheese Pizza"
        description="A classic pizza with five different types of cheese."
        image="/public/pizzas/five_cheese.webp"
      />
      <Pizza
        name="Mexicana Pizza"
        description="A spicy pizza with Mexican flavors and toppings."
        image="/public/pizzas/mexicana.webp"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
