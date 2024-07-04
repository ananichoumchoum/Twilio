import React, { createContext, useState, useContext } from 'react';
import claimsData from '../data/ClaimData'; 

const ClaimsContext = createContext();

export const useClaims = () => useContext(ClaimsContext);

export const ClaimsProvider = ({ children }) => {
  const [claims, setClaims] = useState(claimsData);

  return (
    <ClaimsContext.Provider value={{ claims, setClaims }}>
      {children}
    </ClaimsContext.Provider>
  );
};

