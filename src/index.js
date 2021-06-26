import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import { fetchPropertyData } from "./service/fake_property_data_client";
import { Board } from "./ui/board/board";

function App() {
  const [propertyData, setPropertyData] = useState(undefined);
  fetchPropertyData().then((d) => {
    setPropertyData(d);
  });

  if (!propertyData) {
    return (
      <p>We are trying hard to get your property list, please wait a while.</p>
    );
  }

  return (
    <Board
      initialShortlistCards={propertyData.saved}
      resultCards={propertyData.results}
    />
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
