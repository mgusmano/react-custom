import React from 'react';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import Draggable from 'react-draggable'

const TestDialog = (props) => {
    const {open, onExited, showModal, hideModal} = props

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
        <DialogTitle style={{cursor: 'move'}} id="draggable-dialog-title">Dialog Content</DialogTitle>

        <DialogContent dividers>

        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />

          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={hideModal}>Close</Button>
          <Button onClick={hideModal} color="primary">
            Disagree
          </Button>
          <Button onClick={hideModal} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>



    )
}

export default TestDialog