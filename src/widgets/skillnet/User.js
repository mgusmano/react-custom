import React, { useEffect } from 'react';
import axios from "axios";
//import { useGlobalState } from '../globalstate/GlobalStateProvider'

//import './User.css'


const User = (props) => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    console.log('useEffect')
    //store={{type: 'companies'}}

    axios
      .post('https://azureservicebox.skillnet.net/api/GoalsWeb', {
        action:"PortalAction",
        method:"getUser",
        type:"rpc",
        tid:30,
        data: ["75255"]
    },
    // {
    //   mode: 'no-cors',
    //   withCredentials: true,
    //   credentials: 'same-origin',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    //   },
    // }
    )
      .then((response) => {
        var d = JSON.parse(response.data)
        setData(d)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <div style={{display:'flex',height:'100%',overflow:'auto',flexDirection:'column'}}>
      <div className='ticker' style={{flex:'1',border:'1px solid lightgray' }}>
      {data !== [] &&
        data.map((item, index) => {
          return (
            <div key={index}>{item.TargetDateString}</div>
          )
        })
      }
      </div>
    </div>
  )
}

export default User