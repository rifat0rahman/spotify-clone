import React, { createContext,useContext, useReducer } from "react";

export const DataLayerContex = createContext()

export const DataLayer = ({initialState,reducer,children}) =>{
    return <DataLayerContex.Provider value={useReducer(reducer,initialState)}>
        {children}
    </DataLayerContex.Provider>
}
export const useDateLayerValue = () =>useContext(DataLayerContex)