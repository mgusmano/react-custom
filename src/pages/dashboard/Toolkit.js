import React from 'react';
//import { useGlobalState } from '../globalstate/GlobalStateProvider';

import { withStyles } from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GridOnIcon from '@material-ui/icons/GridOn';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import CustomizedAccordions from './CustomizedAccordions'

const useStyles = makeStyles((theme) => ({
  root: {
      width: '100%',
      minHeight: 16,
      '&$expanded': {
        minHeight: 16,
      },
      height: '30px'
  },
  heading: {
      background: 'black',
      color: 'white',
      fontSize: theme.typography.pxToRem(12),
      fontWeight: theme.typography.fontWeightRegular,
  },
  formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
  },
      selectEmpty: {
      marginTop: theme.spacing(2),
  },
}));

const Accordion = withStyles({
  // heading: {
  //   background: 'black',
  //   color: 'white',
  //   fontSize: '11px',
  //   fontWeight: 'normal',
  // },
  root: {
    xborder: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    xbackgroundColor: 'rgba(0, 0, 0, .03)',
    xborderBottom: '1px solid red',
    xborderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    height: '30px',
    minHeight: 16,
    '&$expanded': {
      minHeight: 16,
    },
  },
  content: {
    '&$expanded': {
      margin: '3px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const Toolkit = (props) => {
    //const [{activeWidgetForm, userName,toolkitTitle,dashboardData,widgetData}, dispatch] = useGlobalState();
    //const classes = useStyles();

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    //console.log(activeWidgetForm)
var toolkitTitle="tbd"

    return (
      <div style={{xdisplay:'flex',xflexDirection:'column',width:'100%'}}>

        <div style={{padding:'10px 0 10px 0',display:'flex',alignItems:'center',justifyContent:'center'}}>Toolkit</div>

        {/* <CustomizedAccordions/> */}

        <Accordion square defaultExpanded={true}>
          <AccordionSummary
            style={{expanded: '{}',background:'rgb(12,83,112)',color:'white',borderBottom:'1px solid #424242'}}
            expandIcon={<ExpandMoreIcon style={{color:'darkgray'}}/>}
          >
            <GridOnIcon style={{fontSize:'12',padding:'3'}}/>
            <Typography style={{fontSize:'11px',padding:'2px 0 0 0'}}>{toolkitTitle}</Typography>
          </AccordionSummary>
          <AccordionDetails style={{xheight:'100px',background:'lightgray'}}>
            {/* {activeWidgetForm} */}
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            style={{background:'rgb(12,83,112)',color:'white',borderBottom:'1px solid #424242'}}
            expandIcon={<ExpandMoreIcon style={{color:'darkgray'}}/>}
          >
            <GridOnIcon style={{fontSize:'12',padding:'3'}}/>
            <Typography style={{fontSize:'11px',padding:'2px 0 0 0'}}>Layout Settings</Typography>
          </AccordionSummary>
          <AccordionDetails style={{background:'lightgray'}}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            style={{background:'rgb(12,83,112)',color:'white',borderBottom:'1px solid #424242'}}
            expandIcon={<ExpandMoreIcon style={{color:'darkgray'}}/>}
          >
            <GridOnIcon style={{fontSize:'12',padding:'3'}}/>
            <Typography style={{fontSize:'11px',padding:'2px 0 0 0'}}>Grid Settings</Typography>
          </AccordionSummary>
          <AccordionDetails style={{background:'lightgray'}}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            style={{background:'rgb(12,83,112)',color:'white',borderBottom:'1px solid #424242'}}
            expandIcon={<ExpandMoreIcon style={{color:'darkgray'}}/>}
          >
            <GridOnIcon style={{fontSize:'12',padding:'3'}}/>
            <Typography style={{fontSize:'11px',padding:'2px 0 0 0'}}>Graph Settings</Typography>
          </AccordionSummary>
          <AccordionDetails style={{background:'lightgray'}}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            style={{background:'rgb(12,83,112)',color:'white',borderBottom:'1px solid #424242'}}
            expandIcon={<ExpandMoreIcon style={{color:'darkgray'}}/>}
          >
            <GridOnIcon style={{fontSize:'12',padding:'3'}}/>
            <Typography style={{fontSize:'11px',padding:'2px 0 0 0'}}>Navigation Links</Typography>
          </AccordionSummary>
          <AccordionDetails style={{background:'lightgray'}}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            style={{background:'rgb(12,83,112)',color:'white',borderBottom:'1px solid #424242'}}
            expandIcon={<ExpandMoreIcon style={{color:'darkgray'}}/>}
          >
            <GridOnIcon style={{fontSize:'12',padding:'3'}}/>
            <Typography style={{fontSize:'11px',padding:'2px 0 0 0'}}>General Settings</Typography>
          </AccordionSummary>
          <AccordionDetails style={{background:'lightgray'}}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>
    );
}

export default Toolkit
