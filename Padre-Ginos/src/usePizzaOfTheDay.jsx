import { useState, useEffect, useDebugValue } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  useDebugValue(
    pizzaOfTheDay
      ? `Pizza of the Day: ${pizzaOfTheDay.id}`
      : "Loading Pizza of the Day...",
  );

  async function fetchPizzaOfTheDay() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch("/api/pizza-of-the-day");
    const data = await response.json();
    setPizzaOfTheDay(data);
  }

  useEffect(() => {
    fetchPizzaOfTheDay();
  }, []);

  return { pizzaOfTheDay };
};
