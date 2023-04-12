import React, { createContext, useContext, useReducer } from 'react';
import {initialState , dataReducer} from './reducer';
export const DataLayer = createContext({});

export function DataLayerProvider(props) {
    return (
        <DataLayer.Provider value={useReducer(dataReducer,initialState)}>
        {props.children}
        </DataLayer.Provider>
        );
}

// A custom hook to get the data and disptach function
export const useDataLayer= () => useContext(DataLayer)