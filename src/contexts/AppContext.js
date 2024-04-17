import { createContext } from "react";
import { AuthStates } from "./AuthStates";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  let states = {
    auth_state: AuthStates(),
  };

  return (
    <AppContext.Provider value={{ ...states }}>{children}</AppContext.Provider>
  );
};
