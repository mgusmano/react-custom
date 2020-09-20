import React, { createContext, useReducer, useContext } from 'react';
import { GlobalStateReducer } from './GlobalStateReducer';

export const GlobalContext = createContext();
export const GlobalStateProvider = (props) => {
  const initialGlobalState = {
    widgets: null,
    highWidgetId: 0,
    activeItemId: null,
    activeWidgetForm: 'null',
    userName: '',
    toolkitTitle: 'Workspace',
    dashboardData: {appTitle:''},
  }
  return (
    <GlobalContext.Provider value={ useReducer(GlobalStateReducer, initialGlobalState) }>
      {props.children}
    </GlobalContext.Provider>
  );
}
export const useGlobalState = () => useContext(GlobalContext);
