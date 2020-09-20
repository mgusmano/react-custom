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

const ExportDialog = (props) => {
  const { onClose, open, widgets } = props;

  const handleClose = () => {
    onClose();
  };




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


  const handleExport = (e) => {
    const originalData = widgets
    // const originalData = {
    //   members: [{
    //       name: "cliff",
    //       age: "34"
    //     },
    //     {
    //       name: "ted",
    //       age: "42"
    //     },
    //     {
    //       name: "bob",
    //       age: "12"
    //     }
    //   ]
    // };

    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(originalData, null, 2)], {
      type: "text/plain"
    }));
    a.setAttribute("download", "mjg.txt");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };




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
      <DialogTitle style={{width:'700px',cursor: 'move'}} id="draggable-dialog-title">Export a File</DialogTitle>
        <DialogContent style={{width:'700px'}} dividers>
          <div className="add-widgets-dialog" style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
button and type name

<Button onClick={(event) => handleExport()}>Export</Button>


          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={(event) => handleClick()}>Close</Button>
        </DialogActions>
    </Dialog>
  )
}

export default ExportDialog
