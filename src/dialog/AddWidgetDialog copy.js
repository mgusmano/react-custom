import React from 'react';
//import { useGlobalState } from '../globalstate/GlobalStateProvider';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent } from "@material-ui/core";
//import TextField from '@material-ui/core/TextField';
//import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import Draggable from 'react-draggable'
import './AddWidgetDialog.css'
//import sprite from './sprite.svg'
//import Icon from './Icon'

import * as Widgets from '../widgets'
function getIndicesOf(searchStr, str, caseSensitive) {
  var searchStrLen = searchStr.length;
  if (searchStrLen == 0) {return [];}
  var startIndex = 0, index, indices = [];
  if (!caseSensitive) {
    str = str.toLowerCase();
    searchStr = searchStr.toLowerCase();
  }
  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
  }
  return indices;
}

function getVar(v, key, defaultVal, functionToText) {
  var i = getIndicesOf('//' + v + ':', functionToText);
    //console.log(i)
    var value = defaultVal
    if (i.length == 2) {
      value = functionToText.substring(i[0]+v.length+3, i[1]);
    }
    return value
}

var widgetArray = []
for (const [key, value] of Object.entries(Widgets)) {
  var functionToText = '' + value;
  //var title = "//title:"
  //console.log(functionToText)

  var title = getVar('title', key, key, functionToText)

  var left = parseInt(getVar('left', key, 0, functionToText))
  var top = parseInt(getVar('top', key, 0, functionToText))
  var width = parseInt(getVar('width', key, 400, functionToText))
  var height = parseInt(getVar('height', key, 400, functionToText))


  // var i = getIndicesOf(title, functionToText);
  // //console.log(i)
  // var description = key
  // if (i.length == 2) {
  //   description = functionToText.substring(i[0]+s.length, i[1]);
  // }

  widgetArray.push({key: key, title: title, left: left, top: top, width: width, height: height})
}
//console.log(widgetArray)

import GridOnIcon from '@material-ui/icons/GridOn';

const AddWidgetDialog = (props) => {
    const {open, onExited, hideModal, widgets} = props
    //const [{}, dispatch] = useGlobalState();

    console.log(widgets)

    const addGRUI = (event, title, type, width, height) => {
      var selectedArray = [
        {id: 10, properties: {position: {x:  0, y:  0}, size:{w: 900, h:600}}, defaultTitle: 'Ticker', type: 'Column'},
        {id: 11, properties: {position: {x: 10, y: 10}, size:{w: 600, h:600}}, defaultTitle: 'Population', type: 'Column'}
        //{x: 10, y: 10, w: 800, h:600, title: 'Big Data', type: 'BigData'},
        //{x: 20, y: 20, w: 800, h:600, title: 'Population', type: 'Population'},
      ]
      selectedArray.map((s) => {
        //dispatch({type: 'ADD_WIDGET', payload: {x: s.x, y: s.y, w: s.w, h: s.h, title: s.title, mode: 'chart', type: s.type}});
      })
      console.log(props)
      props.onClose(selectedArray)
      onExited('hi')
      hideModal()
    }



    const addEvents = (event, title, type, width, height) => {
      var selectedArray = [
        {x:  0, y:  0, w: 200, h:200, title: 'one', type: 'Send'},
        {x: 10, y: 10, w: 200, h:200, title: 'two', type: 'Receive'},
      ]
      selectedArray.map((s) => {
        //dispatch({type: 'ADD_WIDGET', payload: {x: s.x, y: s.y, w: s.w, h: s.h, title: s.title, mode: 'chart', type: s.type}});
      })
      hideModal()
    }




    const addMany = (event, title, type, width, height) => {
      var selectedArray = [
        {x:  0, y:  0, w: 200, h:200, title: 'one', type: 'BigX'},
        {x: 10, y: 10, w: 200, h:200, title: 'two', type: 'Ticker'},
        {x: 20, y: 20, w: 200, h:200, title: 'three', type: 'Map'},
        {x: 30, y: 30, w: 200, h:200, title: 'four', type: 'Line'},
        {x: 40, y: 40, w: 200, h:200, title: 'five', type: 'RatingMeter'},
        {x: 50, y: 50, w: 200, h:200, title: 'six', type: 'Column'},
      ]
      selectedArray.map((s) => {
        //dispatch({type: 'ADD_WIDGET', payload: {x: s.x, y: s.y, w: s.w, h: s.h, title: s.title, mode: 'chart', type: s.type}});
      })





      // var width = 200, height = 200, title = 'one', type = 'BigX'
      // dispatch({type: 'ADD_WIDGET', payload: {x: 0, y: 0, w: width, h: height, title: title, mode: 'chart', type: type}});
      // dispatch({type: 'ADD_WIDGET', payload: {x: 0, y: 0, w: width, h: height, title: title, mode: 'chart', type: type}});
      // dispatch({type: 'ADD_WIDGET', payload: {x: 0, y: 0, w: width, h: height, title: title, mode: 'chart', type: type}});
      // dispatch({type: 'ADD_WIDGET', payload: {x: 0, y: 0, w: width, h: height, title: title, mode: 'chart', type: type}});
      // dispatch({type: 'ADD_WIDGET', payload: {x: 0, y: 0, w: width, h: height, title: title, mode: 'chart', type: type}});
      hideModal()
    }

    const handleClick = (event, title, type, left, top, width, height) => {
      console.log(width,height)
      //dispatch({type: 'ADD_WIDGET', payload: {x: left, y: top, w: width, h: height, title: title, mode: 'chart', type: type}});
      hideModal()
    }

    const PaperComponent = (props) => {
        return (
          <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
          </Draggable>
        );
      }

//console.log(sprite)

//// <svg className="">
//<use href={sprite + "#bell"}/>
//</svg>
//        <Icon name='comparative'/>
//<div className="icon widget-comparative"></div>



    return (
      <Dialog style={{zIndex:'3000'}}
        open={open}
        onExited={onExited}
        onClose={hideModal}
        PaperComponent={PaperComponent}

      >
        <DialogTitle style={{width:'700px',cursor: 'move'}} id="draggable-dialog-title">Add Widget</DialogTitle>
          <DialogContent style={{width:'700px'}} dividers>
            <div className="add-widgets-dialog" style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>

              <span>Widgets</span>

              {widgetArray.map((widget) => {
                //console.log(widgetRecord)
                return (
                  <div key={widget.key} className="add-widgets-cell" onClick={(event) => handleClick(event, widget.title, widget.key, widget.left, widget.top, widget.width, widget.height)}>
                    <span className="widget-type-name"><GridOnIcon/>{widget.title}</span>
                  </div>
                )
              })
            }
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={addGRUI}>Add GRUI</Button>
            <Button onClick={addEvents}>Add Events</Button>
            <Button onClick={addMany}>Add Many</Button>
            <Button onClick={hideModal}>Close</Button>
          </DialogActions>
      </Dialog>
    )
}

export default AddWidgetDialog