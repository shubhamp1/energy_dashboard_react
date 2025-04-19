import React, { createContext, useContext, useState } from "react";

const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
  const [readings, setReadings] = useState([]);
  const [view, setView] = useState("30-days");

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleUpdateReadings = (newReadings) => {
    setReadings(newReadings);
  };

  return (
    <ViewContext.Provider
      value={{ view, handleViewChange, readings, handleUpdateReadings }}
    >
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => useContext(ViewContext);
