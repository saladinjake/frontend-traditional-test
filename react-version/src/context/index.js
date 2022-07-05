import React, { useState, useContext, useEffect } from 'react';

let AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  
  return (
    <AppContext.Provider
      value={{
        hello:"world"
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};