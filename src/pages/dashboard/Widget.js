import React, { useEffect } from 'react';
//import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
//import { useGlobalState } from '../../globalstate/GlobalStateProvider';
//import produce from 'immer'

import * as Widgets from '../../widgets'
import Tools from './Tools'

import SouthEastSizer from '../../layout/SouthEastSizer'
import './Widget.css'

const Widget = (props) => {
  var widgetRecord = props.widgetRecord
  const [active, setActive] = React.useState(false);
  const [box, setBox] = React.useState({
    left: widgetRecord.properties.position.x,
    top: widgetRecord.properties.position.y,
    width: widgetRecord.properties.size.width,
    height: widgetRecord.properties.size.height
  });

  useEffect(() => {
    console.log('useEffect for Widget: ' + widgetRecord.id)
    window.addEventListener('mjg', onMessage);
    return function cleanup() {
      window.removeEventListener('mjg', onMessage);
    };
}, []);

  const onMessage = (e) => {
    //console.log(e)

    if (e.detail) {
      switch (e.detail.type) {
        case 'deactivate':
          setActive(false)
          break;
        case 'tile':
          if (widgetRecord.id == e.detail.id) {
            setBox(e.detail.box)
          }
          break;
      }
    }
  }

  var Type = Widgets[widgetRecord.type]
  var TypeForm = Widgets[widgetRecord.type + 'Form']
  var Specific = <div> {widgetRecord.type} </div>
  var WidgetForm = <div> {widgetRecord.type} Form </div>
  if (Type !== undefined) {
    Specific = <Type widgetRecord={widgetRecord}/>;
  }
  if (TypeForm !== undefined) {
    WidgetForm = <TypeForm/>
  }

  const findAncestor = (el, cls) => {
    if (el.classList.contains(cls)) {return el}
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
  }

  const onMouseDownForMove = (e) => {
    console.log('mousedown')
    if (active != true) {

      window.dispatchEvent(new CustomEvent("mjg",{detail:{type:'deactivate'}}));
      setActive(true)
      // setTimeout(function(){
      //   //dispatch({type: 'ACTIVATE_WIDGET', payload: {id: widgetRecord.id}});
      //   console.log('after dispatch')
      // }, 50);
    }

    //e.stopPropagation();
    var startX = e.clientX;
    var startY = e.clientY;

    var par = findAncestor(e.target,'widget')
    if (par == null) {
      return
    }
    function doDrag(e) {
      par.style.left = (startLeft + e.clientX - startX) + 'px'
      par.style.top = (startTop + e.clientY - startY) + 'px'
      par.style.width = startWidth
      par.style.height = startHeight
    }
    function stopDrag(e) {
      setBox({
        left: par.style.left,
        top: par.style.top,
        width: par.style.width,
        height: par.style.height,
      })

      props.fromWidget({
        id:widgetRecord.id,
        command:'resize',
        box: {
          left: par.style.left,
          top: par.style.top,
          width: par.style.width,
          height: par.style.height,
        }
      })
    //  dispatch({type: 'RESIZE_WIDGET', payload: {id: widgetRecord.id, x: par.style.left, y: par.style.top, w: par.style.width, h: par.style.height}});
      document.documentElement.removeEventListener('mousemove', doDrag, false);
      document.documentElement.removeEventListener('mouseup', stopDrag, false);
    }
    var startLeft = parseInt(document.defaultView.getComputedStyle(par).left, 10);
    var startTop = parseInt(document.defaultView.getComputedStyle(par).top, 10);
    var startWidth = parseInt(document.defaultView.getComputedStyle(par).width, 10);
    var startHeight = parseInt(document.defaultView.getComputedStyle(par).height, 10);
    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
  };

  const onMouse = (e, display) => {
    //e.stopPropagation();
    function findAncestor (el, cls) {
      if (el.classList.contains(cls)) {return el}
      while ((el = el.parentElement) && !el.classList.contains(cls));
      return el;
    }
    var w = findAncestor(e.target,'widget')
    if (w != null) {
      w.getElementsByClassName("tools")[0].style.display = display
      w.getElementsByClassName("southeastsizer")[0].style.display = display
    }
  };

  // const onClick = (e, display) => {
  //   console.log('click in widget')
  //   //console.log(e)
  //   //e.stopPropagation();

  //   // var event = new CustomEvent("deactivate", {detail: {hazcheeseburger: true}});
  //   // window.dispatchEvent(event);

  //   window.dispatchEvent(new CustomEvent("message",{detail:{type:'deactivate'}}));
  //   setActive(true)
  //   // if (active != true) {

  //   //   active = true
  //   //   //dispatch({type: 'ACTIVATE_WIDGET', payload: {id: widgetRecord.id}});
  //   // }
  //   //return
  // };

  // return (
  //   <div style={style} className={`widget bordershadow ${localWidgetRecord.active ? "active" : ""}`} onClick={(e) => {onClick(e)}} onMouseEnter={(e) => {onMouse(e,'block')}} onMouseLeave={(e) => {onMouse(e,'none')}}>
  //     <div onMouseDown={(e) => {onMouseDownForMove(e)}} style={{background:'lightgray',cursor:'move',position:'relative',display:'flex',flexDirection:'rows',justifyContent:'space-between',borderBottom:'0px solid lightgray',padding:'5px 0 5px 5px',height:'20px'}}>
  //       <div style={{fontSize: '11px',fontWeight:'bold',paddingTop:'3px'}}>{widgetRecord.defaultTitle}</div>
  //       <Tools widgetRecord={localWidgetRecord}/>    { console.log(localWidgetRecord.id) }
  //     </div>
  //     <div style={{display:'flex',flexDirection:'rows',justifyContent:'space-between',borderBottom:'0px solid lightgray',padding:'0 0 5px 0'}}>
  //       <div style={{fontSize: '12px'}}>breadcrumb  &gt;  more  &gt;  more</div>
  //     </div>
  //     {Specific}
  //     <div style={{display:'flex',flexDirection:'rows',justifyContent:'space-between',borderBottom:'0px solid lightgray',padding:'5px 0 0 0',height:'20px'}}>
  //       <div style={{fontSize: '11px',fontWeight:'bold',paddingTop:'3px'}}>footer left</div>
  //       <div style={{fontSize: '11px',fontWeight:'bold',paddingTop:'3px'}}>({localWidgetRecord.id})</div>
  //     </div>
  //     <SouthEastSizer widgetRecord={localWidgetRecord}/>
  // </div>
  // )
  // { console.log(widgetRecord.id) }

  //var active = false
  //onClick={(e) => {onClick(e)}}
  //      <div onMouseDown={(e) => {onMouseDownForMove(e)}} className={`header`} style={{background:'lightgray',cursor:'move',position:'relative',display:'flex',flexDirection:'rows',justifyContent:'space-between',borderBottom:'0px solid lightgray',padding:'5px 0 5px 5px',height:'20px'}}>

  return (
    <div style={box} className={`widget bordershadow ${active ? "active" : ""}`} onMouseEnter={(e) => {onMouse(e,'block')}} onMouseLeave={(e) => {onMouse(e,'none')}}>
      <div onMouseDown={(e) => {onMouseDownForMove(e)}} className={`header`} style={{cursor:'move',position:'relative',display:'flex',flexDirection:'rows',alignItems:'center',justifyContent:'space-between'}}>
        <div xstyle={{fontSize: '11px',fontWeight:'bold',paddingTop:'3px'}}>{widgetRecord.defaultTitle}</div>
        <Tools widgetRecord={widgetRecord} fromWidget={props.fromWidget}/>
      </div>
      {/* <div style={{display:'flex',flexDirection:'rows',justifyContent:'space-between',borderBottom:'0px solid lightgray',padding:'0 0 5px 0'}}>
        <div style={{fontSize: '12px'}}>breadcrumb  &gt;  more  &gt;  more</div>
      </div> */}
      <div style={{display:'flex',height:'100%',overflow:'auto',flexDirection:'column'}}>
        {Specific}
      </div>
      <div style={{display:'flex',flexDirection:'rows',justifyContent:'space-between',borderBottom:'0px solid lightgray',padding:'5px 0 0 0',height:'20px'}}>
        <div style={{fontSize: '11px',fontWeight:'bold',paddingTop:'3px'}}>.</div>
        <div style={{fontSize: '11px',fontWeight:'bold',paddingTop:'3px'}}>({widgetRecord.id})</div>
      </div>
      <SouthEastSizer widgetRecord={widgetRecord}/>
    </div>
  )
}

//export default Widget;
export default React.memo(Widget);
//export default React.memo(Widget, areEqual);

// function areEqual(prevProps, nextProps) {
//   console.log('areEqual')
//   if(prevProps.fromWidget == nextProps.fromWidget) {
//     console.log('fromWidget is the same')
//   }
//   else {
//     console.log('fromWidget is NOT the same')
//   }
//   if(prevProps.widgetRecord == nextProps.widgetRecord) {
//     console.log('widgetRecord is the same')
//     return true
//   }
//   else {
//     console.log('widgetRecord is NOT the same')
//     return false
//   }
//   /*
//   return true if passing nextProps to render would return
//   the same result as passing prevProps to render,
//   otherwise return false
//   */
// }
