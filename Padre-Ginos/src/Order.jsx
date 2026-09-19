import { useEffect, useState } from "react";
import Pizza from "./Pizza";
import Cart from "./Cart";

const intl = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

export default function Order() {
  const [pizzaType, setPizzaType] = useState("mexicana");
  //   Alternative way to use useState:
  //   const pizzaHook = useState("mexicana");
  //   const pizzaType = pizzaHook[0];
  //   const setPizzaType = pizzaHook[1];

  const [pizzaSize, setPizzaSize] = useState("M");
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  let price, selectedPizza;

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizza.id === pizzaType);
    price = intl.format(selectedPizza.sizes[pizzaSize]);
  }

  async function fetchPizzaTypes() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch("/api/pizzas");
    const data = await response.json();
    setPizzaTypes(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  return (
    <div className="order-page">
      <div className="order">
        <h2>Create Order</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCart([
              ...cart,
              { pizza: selectedPizza, size: pizzaSize, price },
            ]);
          }}
        >
          <div>
            <div>
              <label htmlFor="pizza-type">Pizza Type:</label>
              <select
                id="pizza-type"
                value={pizzaType}
                onChange={(e) => setPizzaType(e.target.value)}
              >
                {pizzaTypes.map((pizza) => (
                  <option key={pizza.id} value={pizza.id}>
                    {pizza.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="pizza-size">Pizza Size:</label>
              <div>
                <span>
                  <input
                    type="radio"
                    id="pizza-s"
                    name="pizza-size"
                    value="S"
                    checked={pizzaSize === "S"}
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <label htmlFor="pizza-s">Small</label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="pizza-m"
                    name="pizza-size"
                    value="M"
                    checked={pizzaSize === "M"}
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <label htmlFor="pizza-m">Medium</label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="pizza-l"
                    name="pizza-size"
                    value="L"
                    checked={pizzaSize === "L"}
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <label htmlFor="pizza-l">Large</label>
                </span>
              </div>
            </div>
            <button type="submit">Place Order</button>
          </div>
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            <div className="order-pizza">
              <Pizza
                name={selectedPizza?.name || "Select a Pizza"}
                description={selectedPizza?.description || "Select a Pizza"}
                image={selectedPizza?.image || "/public/pizzas/default.webp"}
              />
              <p>{price}</p>
            </div>
          )}
        </form>
      </div>
      {loading ? <h2>Loading...</h2> : <Cart cart={cart} />}
    </div>
  );
}
