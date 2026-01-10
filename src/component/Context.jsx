import { createContext, useState } from "react";

export const StateContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const [updateData, setupdateData] = useState({});

  return (
    <StateContext.Provider value={{ state, setState, updateData, setupdateData }}>
      {children}
    </StateContext.Provider>
  );
};
