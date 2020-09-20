import React from 'react';
//import { useGlobalState } from '../../globalstate/GlobalStateProvider'
import Util from '../../Util'

const Send = (props) => {
  //title:Send a Message//title:
  //x:300//x:
  //y:100//y:
  //width:400//width:
  //height:200//height:
  //icon:star_border//icon:

  //const [{dashboardData}, dispatch] = useGlobalState();

  // const SendIt = (message, payload) => {
  //   dashboardData.dashboard !== undefined &&
  //     //console.log(widgetData)
  //     dashboardData.dashboard.widgets.map((widgetRecord) => {
  //       console.log(widgetRecord)
  //       if (widgetRecord.events != undefined) {
  //         if (widgetRecord.events[message] != undefined) {
  //           //widgetRecord.events['FirstOne']('the message')
  //           widgetRecord.events[message](payload)
  //         }
  //       }
  //     })
  // }



  return (

      <div style={{flex:'1',border:'1px solid lightgray' }}>
        Send
        {<button onClick={() => {
          //console.log(dashboardData)

          //SendIt('FirstOne', {message: 'theMessage'})

          //Util.SendIt(dashboardData, 'FirstOne', {message: 'theMessage'})
          //Util.SendIt(dashboardData, 'mjg', {message: 'theMessage'})

          //window.dispatchEvent(new CustomEvent("mjg",{detail:{type:'fromsend'}}));

          Util.SendIt('fromsend', {message: 'theMessage'})

          // {dashboardData.dashboard !== undefined &&
          //   //console.log(widgetData)
          //   dashboardData.dashboard.widgets.map((widgetRecord) => {
          //     console.log(widgetRecord)
          //     if (widgetRecord.events != undefined) {
          //       if (widgetRecord.events['FirstOne'] != undefined) {
          //         //widgetRecord.events['FirstOne']('the message')
          //         widgetRecord.events['FirstOne']('the message')
          //       }
          //     }
          //   })
          // }



   //dispatch({type: 'ADD_WIDGET', payload: {x: 600, y: 100, w: 100, h: 100, title: 'new'}});
        }}>Item ID</button>}
      </div>

  )
}

export default Send