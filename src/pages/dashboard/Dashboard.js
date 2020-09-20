import React, { useEffect, useCallback } from 'react';
import Vertical from '../../layout/Vertical'
import Horizontal from '../../layout/Horizontal'
import Splitter from '../../layout/Splitter'
import Widget from './Widget'
import Context from './Context'
import Util from '../../Util'
import Button from '@material-ui/core/Button';
import AddWidgetDialog from '../../dialog/AddWidgetDialog'
import ImportDialog from '../../dialog/ImportDialog'
import ExportDialog from '../../dialog/ExportDialog'
import { useModal } from "react-modal-hook";
import Divider from '@material-ui/core/Divider';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import Grid from '@material-ui/core/Grid';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './Dashboard.css'
import ImportFile from './ImportFile'

const Dashboard = (props) => {
  const [widgets, setWidgets] = React.useState([])

  const [addWidgetOpen, setAddWidgetOpen] = React.useState(false);
  const [importOpen, setImportOpen] = React.useState(false);
  const [exportOpen, setExportOpen] = React.useState(false);


  //const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
    console.log('useEffect for dashboard ')
    setTimeout(function(){
      setWidgets(window.dashboardData.dashboard.widgets)

      var element = document.getElementById("initialLoadMask");
      if (element !== null) {
        element.parentNode.removeChild(element);
      }
    }, 0);
  }, []);

  const fromWidget = (e) => {
    console.log('fromWidget')
    console.log(e)

    switch(e.command) {
      // case 'init':
      //   console.log('init')
      //   break;

      case 'resize':
        console.log('resize')
        console.log(e.box)
        //change box and then do a setWidget
        break;

      case 'delete':
        console.log('delete')
        //setWidgets(widgets.concat(values))
        const newWidgets = [...widgets]
        var index = newWidgets.map(item => item.id).indexOf(e.id);
        console.log(index)
        if (index !== -1) {
          newWidgets.splice(index, 1);
          console.log(newWidgets)
          setWidgets(newWidgets)
        }
        break;
      default:
        console.log('default',e)
    }
  };

  const handleAddWidgetOpen = () => {
    setAddWidgetOpen(true);
  };

  const handleAddWidgetClose = (values) => {
    setAddWidgetOpen(false);
    if (values == null) {return}
    var maxId = Math.max.apply(Math, widgets.map(function(o) { return o.id; }))
    if (maxId = -Infinity) {
      maxId = 0
    }
    console.log(maxId)
    values.forEach(value => {
      value.id = ++maxId
    })
    setWidgets(widgets.concat(values))
  };

  const handleImportOpen = () => {
    setImportOpen(true);
  };
  const handleImportClose = (values) => {
    setImportOpen(false);


    var j = JSON.parse(values)
    console.log(j)

    setWidgets(j)


  };

  const handleExportOpen = () => {
    setExportOpen(true);
  };
  const handleExportClose = (values) => {
    setExportOpen(false);
  };

  const onClearClick = (e) => {
    setWidgets([])
    //dispatch({type: 'CLEAR_WIDGETS', payload: {}});
  };









  const handleMenuClose = (e) => {

  };




  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
  <Vertical style={{display:'flex',flex:'auto',xminWidth:'100px', xmaxWidth: '250px',xwidth:'500px'}}>

    <div style={{background:'#e6e6e6',height:'40px',display:'flex',flexDirection:'rows',justifyContent:'space-between'}}>
      {/* <div style={{padding:'10px 0 0 10px'}}>{dashboardData.appTitle}</div> */}
      <div style={{padding:'10px 0 0 10px'}}>Dashboard</div>
      <div style={{padding:'5px 0 5px 0',display:'flex',flexDirection:'row'}}>
        <Button onClick={handleAddWidgetOpen} style={{width:'100px',fontSize:'11px',background:'rgb(5,55,75)',color:'white'}} >Add Widget</Button>
        <AddWidgetDialog open={addWidgetOpen} onClose={handleAddWidgetClose} />
        <Divider orientation="vertical" flexItem />
        <Button className="toolbarbutton" onClick={() => Util.TileIt(widgets)} style={{width:'100px',fontSize:'11px',background:'rgb(5,55,75)',color:'white'}}>Tile</Button>
        <Divider orientation="vertical" flexItem />
        <Button className="toolbarbutton" onClick={onClearClick} style={{width:'100px',fontSize:'11px',background:'rgb(5,55,75)',color:'white'}}>Clear</Button>

        <Button className="toolbarbutton" onClick={handleExportOpen} style={{width:'100px',fontSize:'11px',background:'rgb(5,55,75)',color:'white'}}>Export</Button>
        <ExportDialog widgets={widgets} open={exportOpen} onClose={handleExportClose} />
        <Button className="toolbarbutton" onClick={handleImportOpen} style={{width:'100px',fontSize:'11px',background:'rgb(5,55,75)',color:'white'}}>Import</Button>
        <ImportDialog open={importOpen} onClose={handleImportClose} />

      </div>
      <div style={{padding:'1px 10px 0 0'}}>
        <Grid style={{padding:'8px 5px 0 5px'}} container alignItems="center">
          <FormatAlignLeftIcon style={{padding:'0 10px 0 0'}}>text</FormatAlignLeftIcon>
          <Divider orientation="vertical" flexItem />
          <MoreVertIcon style={{cursor:'pointer',padding:'0 0 0 10px'}} onClick={handleClick}/>
        </Grid>
        <Menu
          style={{zIndex:'3000'}}
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}><div style={{fontSize:'11px'}}>Another</div></MenuItem>
          <MenuItem onClick={handleMenuClose}><div style={{fontSize:'11px'}}>Another</div></MenuItem>
          <Divider light />
          <MenuItem onClick={(event) => handleMenuClose(event, 'dev')}><div style={{fontSize:'11px'}}>DEV</div></MenuItem>
        </Menu>
      </div>
    </div>

    <Horizontal>
      {/* center */}
      <div id='absolute' className='center' style={{width:'100%',flex:'1',position:'relative',border:'0px solid #73AD21',display: 'flex'}}>
        {widgets !== null &&
          widgets.map((widgetRecord) => {
            //console.log(widgetRecord)
            return (
              <Widget key={widgetRecord.id} widgetRecord={widgetRecord} fromWidget={fromWidget}></Widget>
            )
          })
        }
      </div>
      {/* center */}
      <Splitter/>
      <Context/>
    </Horizontal>

  </Vertical>
  )
}

export default Dashboard