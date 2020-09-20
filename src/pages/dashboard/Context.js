import React from 'react'
import Vertical from '../../layout/Vertical'
import Splitter from '../../layout/Splitter'
import Toolkit from './Toolkit'
import './Context.css'
//import Logo from './Logo'
//import { useGlobalState } from '../globalstate/GlobalStateProvider'

const Context = () => {
  //const [{userName}, dispatch] = useGlobalState();

  return (
    <Vertical className="context" style={{xminWidth: '80px', width:'200px'}}>
      <div style={{display:'flex',flex:'1',margin:'5px 0 0 0'}}>
        <Toolkit/>
      </div>
      <Splitter/>
      <div>Nav</div>
      {/* <Nav handleListItemClick={handleListItemClick} handleRouteClick={handleRouteClick}/> */}
    </Vertical>
  )
}

export default Context


// {/* <Vertical style={{xflex:'auto',minWidth:'50px', xmaxWidth: '250px',xwidth:'500px'}}>
//   <div>Right</div>
//   {/* <Auth/>
//   <Splitter/>
//   <Rates/> */}
// </Vertical> */}