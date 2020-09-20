import React from 'react'
//import { useTheme } from '@material-ui/styles'
import { makeStyles } from '@material-ui/styles';


const Logo = () => {
  // const useStyles = makeStyles((theme) => ({
  //   appBar: {
  //     backgroundColor: theme.palette.primary[theme.palette.type],
  //     color: theme.palette.primary.contrastText
  //   }
  // }));
  // //const classes = useStyles(useTheme());
  // const classes = useStyles();

  return (
    <div style={{height: '125px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      {/* <img alt="logo" src={require('./acme.jpg')} height="100px"/> */}
      <img alt="logo" src='./fonts/acme.png' height="100px"/>
      {/* <div style={{fontSize:'32px', color:'rgb(25,150,230)'}}>Rokio.ai</div> */}
    </div>
  )
}

export default Logo
