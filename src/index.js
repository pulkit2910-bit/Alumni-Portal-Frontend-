import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./Context/AuthContext/AuthContext";
import { FeedContextProvider } from "./Context/FeedContext/FeedContext";
// import { EventsContextProvider } from "./Context/EventsContext/EventsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <FeedContextProvider>
        <App />
      </FeedContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
