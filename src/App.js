import React, { useEffect } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
//import { useGlobalState } from './globalstate/GlobalStateProvider'
import { hot } from 'react-hot-loader/root'
//import axios from "axios";
import Horizontal from './layout/Horizontal'
import Vertical from './layout/Vertical'
import Splitter from './layout/Splitter'
import Separator from './layout/Separator'
//import Widget from './main/Widget'

//import Toolkit from './main/Toolkit'
//import Logo from './main/Logo'
import './data/dashboardData'
import './data/ResourceStrings'

import Toolbar from './main/Toolbar'
import Menu from './main/Menu'


//import Center from './main/Center'

import About from './pages/about/About'
import Dashboard from './pages/dashboard/Dashboard'

const App = () => {
  //const [{}, dispatch] = useGlobalState();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    //console.log('useEffect')

    var index = 0;
    switch (location.pathname) {
      case '/shop':
        index = 3
        break
      case '/about':
        index = 4
        break
      case '/dashboard':
        index = 5
        break
      case '/gridlayout':
        index = 6
        break
      default:
        index = 0
    }

    // setTimeout(function(){
    //   //console.log(window.dashboardData)
    //   //console.log(window.dashboardData.dashboard.widgets)
    //   var action = {"success":true,"userName":"Marc Gusmano"}
    //   dispatch({type: 'userName', payload: action.userName});
    //   dispatch({type: 'dashboardData', payload: window.dashboardData});
    //   dispatch({type: 'widgets', payload: window.dashboardData.dashboard.widgets});

    //   dispatch({type: 'numberofwidgets', payload: window.dashboardData.dashboard.widgets.length});
    //   //dispatch({type: 'widgetData', payload: window.dashboardData.dashboard.widgets});
    //   var element = document.getElementById("initialLoadMask");
    //   element.parentNode.removeChild(element);
    // }, 50);
    // return


    // axios
    //   .post('Actions.ashx', {action: 'passwordExpiration'})
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data))
    //     dispatch({type: 'userName', payload: response.data.userName});
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // axios
    //   .get('DashboardHandler.ashx?action=getInitialData', {action: 'getInitialData'})
    //   .then((response) => {
    //     dispatch({type: 'dashboardData', payload: response.data});
    //     dispatch({type: 'widgetData', payload: response.data.dashboard.widgets});
    //     var element = document.getElementById("initialLoadMask");
    //     element.parentNode.removeChild(element);
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }, []);

  return (
      <Vertical>
        <Toolbar/>
        <Separator/>
        <Horizontal style={{width:'100%',background:'blue'}}>
          <Menu/>
          <Splitter/>
          {/* <Center/> */}
          <Switch>
            <Route path="/" component={() => <Dashboard/>} exact />
            <Route path="/about" component={() => {return <About/>}} />
            {/* <Route path="/shop" component={Shop} />
            <Route path="/dashboard" render={props => (<Dashboard exact />)}/>
            <Route path="/gridlayout" render={props => (<GridLayoutPage exact />)}/>
            <Route component={Error} /> */}
          </Switch>
          {/* center */}
          {/* <Splitter/>
          <Context/> */}
        </Horizontal>



        {/* <Splitter/>
        <div>footer</div> */}
      </Vertical>
    )
}

export default hot(App)






// {/* <WidgetStateProvider widgetRecord={widgetRecord} key={widgetRecord.id}>
// <Widget widgetRecord={widgetRecord}></Widget>
// </WidgetStateProvider> */}

// {<button onClick={() => {
//   dispatch({type: 'ADD_WIDGET', payload: {x: 600, y: 100, w: 100, h: 100, title: 'new'}});
// }}>Add</button>}
// {<button onClick={() => {
//   dispatch({type: 'UPDATE_WIDGET', payload: {id: 0, x: 610, y: 110, w: 100, h: 100}});
// }}>Update</button>}
