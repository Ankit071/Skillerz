import { useRoutes } from "react-router-dom";
import React from "react";
import { routes } from "./routes";

function App() {
  const elements = useRoutes(routes);

  return <>{elements}</>;
}

export default App;
