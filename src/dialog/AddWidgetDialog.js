import React from 'react';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent } from "@material-ui/core";
import Paper from '@material-ui/core/Paper'
import Draggable from 'react-draggable'
import './AddWidgetDialog.css'
import * as Widgets from '../widgets'
import WidgetUtil from '../Util/WidgetUtil'

var widgetArray = []
for (const [key, value] of Object.entries(Widgets)) {
  var functionToText = '' + value;
  //https://www.w3schools.com/icons/google_icons_intro.asp
  var icon = WidgetUtil.getVar('icon', key, 'settings', functionToText)
  var title = WidgetUtil.getVar('title', key, key, functionToText)
  var x = parseInt(WidgetUtil.getVar('x', key, 0, functionToText))
  var y = parseInt(WidgetUtil.getVar('y', key, 0, functionToText))
  var width = parseInt(WidgetUtil.getVar('width', key, 400, functionToText))
  var height = parseInt(WidgetUtil.getVar('height', key, 400, functionToText))
  widgetArray.push({properties: {position: {x:  x, y:  y}, size:{width: width, height:height}}, defaultTitle: title, type: key, icon: icon})
}

const AddWidgetDialog = (props) => {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const addGRUI = (event, title, type, width, height) => {
    var selectedArray = [
      {properties: {position: {x:  0, y:  0}, size:{width: 900, height:700}}, defaultTitle: 'PopulationMap', type: 'PopulationMap'},
      {properties: {position: {x: 915, y: 0}, size:{width: 400, height:900}}, defaultTitle: 'Population', type: 'Population'},
      {properties: {position: {x:  0, y: 715}, size:{width: 600, height:300}}, defaultTitle: 'Receive', type: 'Receive'},
      //{id: 10, properties: {position: {x:  0, y:  0}, size:{width: 900, height:600}}, defaultTitle: 'Ticker', type: 'Ticker'},
      //{id: 11, properties: {position: {x: 10, y: 10}, size:{width: 600, height:600}}, defaultTitle: 'Population', type: 'Population'}
      //{x: 10, y: 10, w: 800, h:600, title: 'Big Data', type: 'BigData'},
      //{x: 20, y: 20, w: 800, h:600, title: 'Population', type: 'Population'},
    ]
    onClose(selectedArray)
  }

  const addEvents = (event, title, type, width, height) => {
    var selectedArray = [
      {properties: {position: {x:  10, y:  0}, size:{width: 400, height:200}}, defaultTitle: 'Send', type: 'Send'},
      {properties: {position: {x: 500, y:  0}, size:{width: 400, height:200}}, defaultTitle: 'Receive', type: 'Receive'},
    ]
    onClose(selectedArray)
  }


  const handleClick = (widgets) => {
    if (widgets == undefined) {
      onClose(null)
    }
    else {
      onClose([widgets])
    }
    //console.log(width,height)
    //dispatch({type: 'ADD_WIDGET', payload: {x: left, y: top, w: width, h: height, title: title, mode: 'chart', type: type}});
  }

  const PaperComponent = (props) => {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }

  return (
    <Dialog style={{zIndex:'3000'}}
      open={open}

      onClose={handleClose}
      PaperComponent={PaperComponent}

    >
      <DialogTitle style={{width:'700px',cursor: 'move'}} id="draggable-dialog-title">Add Widget</DialogTitle>
        <DialogContent style={{width:'700px'}} dividers>
          <div className="add-widgets-dialog" style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
            <span>Widgets</span>
            {widgetArray.map((widget, index) => {
              return (
                <div key={index} className="add-widgets-cell" onClick={(event) => handleClick(widget)}>
                  <span className="widget-type-name"><i className="material-icons">{widget.icon}</i>{widget.defaultTitle}</span>
                </div>
              )
            })
          }
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={addGRUI}>Add GRUI</Button>
          <Button onClick={addEvents}>Add Events</Button>
          <Button onClick={(event) => handleClick()}>Close</Button>
        </DialogActions>
    </Dialog>
  )
}

export default AddWidgetDialog
