import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./Context/AuthContext/AuthContext";
import { EventsContextProvider } from "./Context/EventsContext/EventsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      {/* <EventsContextProvider> */}
        <App />
      {/* </EventsContextProvider> */}
    </AuthContextProvider>
  </React.StrictMode>
);
