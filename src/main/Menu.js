import React from 'react'
import Vertical from '../layout/Vertical'
import Splitter from '../layout/Splitter'
//import Toolkit from './Toolkit'
import Logo from './Logo'
import Nav from './Nav'
import './Menu.css'
//import { useGlobalState } from '../globalstate/GlobalStateProvider'

const Menu = () => {
  //const [{userName}, dispatch] = useGlobalState();

  var userName = "Marc"
  return (
    <Vertical className="menu" style={{xminWidth: '80px', width:'200px'}}>
      <Logo/>
      <div style={{textAlign:'center',fontSize:'11px'}}>Welcome {userName}</div>
      <Splitter/>
      <Nav/>
      <Splitter/>
      <div>Nav</div>
      {/* <Nav handleListItemClick={handleListItemClick} handleRouteClick={handleRouteClick}/> */}
    </Vertical>
  )
}

export default Menu