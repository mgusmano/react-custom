import React, { useEffect, useCallback } from 'react';
//import { useGlobalState } from '../../globalstate/GlobalStateProvider'

const Receive = (props) => {
  //title:Receive a Message//title:
  //x:300//x:
  //y:150//y:
  //width:400//width:
  //height:200//height:
  var widgetRecord = props.widgetRecord
  //const [{dashboardData}, dispatch] = useGlobalState();

  // var index = dashboardData.dashboard.widgets.map(item => item.id).indexOf(props.widgetRecord.id);
  // if (index !== -1) {
  //   widgetRecord = dashboardData.dashboard.widgets[index]
  // }



  const [message, setMessage] = React.useState('');
  const isCancelled = React.useRef(false);

  // const setEvent = useCallback((args = {}) => {
  //   dispatch({type: 'SET_EVENT_FIRSTONE', payload: {id: widgetRecord.id, receiver: ReceiveFirstOne}});
  // }, []);





  useEffect(() => {
    console.log('useEffect in Receive')
    window.addEventListener('mjg', onMessage);
    return function cleanup() {
      window.removeEventListener('mjg', onMessage);
    };




    // isCancelled.current = false;
    // //setEvent()

    // //console.log(widgetRecord.events.FirstOne)
    // if (widgetRecord.events.FirstOne == undefined ) {
    //   //dispatch({type: 'SET_EVENT_FIRSTONE', payload: {id: widgetRecord.id, receiver: ReceiveFirstOne}});
    // }


    // return () => {
    //   console.log('return in Receive')
    //   isCancelled.current = true;
    // };

  }, []);

  const onMessage = (e) => {
    if (!e.detail) {return}
    console.log(e)
    var type = e.detail.type
    var payload = e.detail.payload

    switch (type) {
      case 'fromsend':
        console.log('fromsend')
        setMessage(payload.message)
        break;
    }
  }


  // const ReceiveFirstOne = (payload) => {
  //   console.log('ReceiveFirstOne')
  //   console.log(payload.message)
  //   console.log(isCancelled.current)
  //   //if (!isCancelled.current) {
  //     dispatch({type: 'SET_MESSAGE', payload: {id: widgetRecord.id, message: payload.message}});
  //     //setMessage(payload.message)
  //   //}
  //   //else {
  //   //  console.log('not done')
  //   //}

  // }


  return (

      <div style={{flex:'1',border:'1px solid lightgray' }}>
      Receive {message}
      </div>

  )
}

export default Receive