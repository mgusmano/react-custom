import React from 'react';
import { useGlobalState } from '../globalstate/GlobalStateProvider';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent } from "@material-ui/core";

import Paper from '@material-ui/core/Paper'
import Draggable from 'react-draggable'
//import './AddWidgetDialog.css'
//import sprite from './sprite.svg'
//import Icon from './Icon'


const ImportDashboardDialog = (props) => {
    const {open, onExited, hideModal, widgetRecord} = props
    const [{dashboardData, widgetData}, dispatch] = useGlobalState();

//    console.log(JSON.stringify(dashboardData))

    const handleClick = (event, title, who) => {
//      dispatch({type: 'ADD_WIDGET', payload: {x: 0, y: 0, w: 400, h: 400, title: title, mode: 'chart', type: who}});
      hideModal()
    }

    const PaperComponent = (props) => {
        return (
          <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
          </Draggable>
        );
      }

    return (
      <Dialog
        open={open}
        onExited={onExited}
        onClose={hideModal}
        PaperComponent={PaperComponent}

      >
        <DialogTitle style={{width:'700px',cursor: 'move'}} id="draggable-dialog-title">widgetData</DialogTitle>
          <DialogContent style={{width:'700px'}} dividers>

            content

          </DialogContent>
          <DialogActions>
            <Button onClick={hideModal}>Close</Button>
          </DialogActions>
      </Dialog>
    )
}

export default ImportDashboardDialog