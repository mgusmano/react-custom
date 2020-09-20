import React, { createContext, useReducer, useContext } from 'react';
import { WidgetStateReducer } from './WidgetStateReducer';


export const WidgetStateContext = createContext();
export const WidgetStateProvider = (props) => {

  const initialWidgetState = {
    widgetRecord: props.widgetRecord,
    //useGlobalState: props.useGlobalState
  }

  //console.log(props.useGlobalState)
 // [{userName,dashboardData}, dispatch] = props.useGlobalState();

  return (
    <WidgetStateContext.Provider value={ useReducer(WidgetStateReducer, initialWidgetState) }>
      {props.children}
    </WidgetStateContext.Provider>
  );
}
export const useWidgetState = () => useContext(WidgetStateContext);
