import React, { createContext, FC } from "react";
import useFetch from "../hooks/useFetch";

import { BASE_URL } from "../Api";

export const IndicatorContext = createContext({} as any);

export const IndicatorProvider:FC = ({children}) => {

  const { data, loading } = useFetch(BASE_URL);

  return (
    <IndicatorContext.Provider value={{
      data, loading
    }}>
      { children }
    </IndicatorContext.Provider>
  )
}