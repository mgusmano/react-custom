import React from 'react'
import Vertical from '../layout/Vertical'
import Widget from './Widget'
import './Center.css'
//import Splitter from './layout/Splitter'
//import Toolkit from './Toolkit'
//import Logo from './Logo'
import { useGlobalState } from '../globalstate/GlobalStateProvider'

const Center = () => {
  const [{userName,dashboardData,widgetData}, dispatch] = useGlobalState();

  return (
    <Vertical style={{flex:'auto',xminWidth:'100px', xmaxWidth: '250px',xwidth:'500px'}}>
    {/* center */}
    <div id='absolute' className='center' style={{width:'100%',flex:'1',position:'relative',border:'0px solid #73AD21',display: 'flex'}}>
      {dashboardData.dashboard !== undefined &&
        //console.log(widgetData)
        dashboardData.dashboard.widgets.map((widgetRecord) => {
          //console.log(widgetRecord)
          return (
            <Widget key={widgetRecord.id} widgetRecord={widgetRecord}></Widget>
          )
        })
      }
    </div>
    </Vertical>
  )
}

export default Center