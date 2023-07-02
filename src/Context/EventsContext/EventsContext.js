import { createContext, useReducer } from "react";
import EventsReducer from "./EventsReducer";

const INITIAL_STATE = {
  events: null,
  isFetching: false,
  error: false,
};

const EventsContext = createContext(INITIAL_STATE);

const EventsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EventsReducer);

  return (
    <EventsContext.Provider
      value={{
        events: state.events,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export { EventsContext, EventsContextProvider };
