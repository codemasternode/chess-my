import React from "react";
import { render } from "react-dom";
import Plansza from "./Plansza";

const App = () => {
  return (
    <div>
      <Plansza />
    </div>
  );
};

render(<App />, document.getElementById("root"));
