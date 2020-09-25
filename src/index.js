import React from "react";
import ReactDOM from "react-dom";
import { GlobalStateProvider } from './globalstate/GlobalStateProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ModalProvider } from "react-modal-hook"
import { TransitionGroup } from "react-transition-group"
import './SenchaGrid.css'
import App from './App'
// import './widgets/grui/ticker/CompaniesData'
// import './widgets/grui/ticker/CompaniesModel'
// import './widgets/grui/ticker/CompaniesStore'


//<GlobalStateProvider>


const wrapper = document.getElementById("root");
wrapper ?
ReactDOM.render(

  <Router>
    <DndProvider backend={HTML5Backend}>
      <ModalProvider rootComponent={TransitionGroup}>
        <App/>
      </ModalProvider>
    </DndProvider>
  </Router>,
  wrapper
) : false;

if (module.hot) {
  module.hot.accept('./index.js', function() {
    console.log('Accepting the updated printMe module!');
    //printMe();
  })
}