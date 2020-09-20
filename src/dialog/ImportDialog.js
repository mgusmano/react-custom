import React from 'react';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent } from "@material-ui/core";
import Paper from '@material-ui/core/Paper'
import Draggable from 'react-draggable'
//import './AddWidgetDialog.css'
// import * as Widgets from '../widgets'
// import WidgetUtil from '../Util/WidgetUtil'

const ImportDialog = (props) => {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  var fileReader
  var content

  const handleClick = () => {

      onClose(content)

    //console.log(width,height)
    //dispatch({type: 'ADD_WIDGET', payload: {x: left, y: top, w: width, h: height, title: title, mode: 'chart', type: type}});
  }




  const handleFileRead = (e) => {
    content = fileReader.result
    console.log(content)
  }

  const handleFileChosen = (file) => {
    console.log(file)
    fileReader = new FileReader()
    fileReader.onloadend = handleFileRead
    fileReader.readAsText(file)
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
      <DialogTitle style={{width:'700px',cursor: 'move'}} id="draggable-dialog-title">Import a File</DialogTitle>
        <DialogContent style={{width:'700px'}} dividers>
        <div>
          <input type='file' onChange={e=>handleFileChosen(e.target.files[0])}/>
        </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={(event) => handleClick()}>Close</Button>
        </DialogActions>
    </Dialog>
  )
}

export default ImportDialog
