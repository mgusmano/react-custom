import React, { useState, useEffect } from 'react';
import axios from "axios";
import { SenchaGrid } from "@sencha/sencha-grid";

const User2 = (props) => {
  //title:All Users//title:
  //x:30//x:
  //y:30//y:
  //width:900//width:
  //height:700//height:
  const [store, setStore] = useState({fields:[],data:[]})

  useEffect(() => {
    console.log('useEffect')
    //store={{type: 'companies'}}
//      .get('/data/Users.json', {
    axios
      .get('https://skillnetusersapi.azurewebsites.net/api/users', {
        auth: {
          username: 'skillnet',
          password: 'demo'
        }
      },
    )
      .then((response) => {
        console.log(response)
        //var d = JSON.parse(response.data)
        //var d = response.data
        var fields = []
        setStore({fields: fields, data: response.data})
        //setData(d)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <div style={{display:'flex',flex:'1',border:'1px solid lightgray' }}>
      <SenchaGrid
        store={store}
        height='100%'
        width='100%'
        emptyText='Loading Census Data...'
        // title='States in the USA'
        columns={[
          {text: 'SelfRating', dataIndex: 'SelfRating', width: 10, align: 'right'},
          {text: 'SkillsPercent', dataIndex: 'SkillsPercent', width: 10, align: 'right'},
          {text: 'ManagerRating', dataIndex: 'ManagerRating', width: 10, align: 'right'},

          {text: 'PersonID', dataIndex: 'PersonID', width: 100, align: 'right'},
          {text: 'BFirstName', dataIndex: 'BFirstName', width: 120},
          {text: 'BLastName', dataIndex: 'BLastName', width: 120},
          {text: 'Email', dataIndex: 'Email', width: 120},
          {text: 'FullName', dataIndex: 'FullName', width: 120},
          {text: 'Location', dataIndex: 'Location', width: 120},
          {text: 'PartnerID', dataIndex: 'PartnerID', width: 100, align: 'right'},
          {text: 'PartnerLocationID', dataIndex: 'PartnerLocationID', width: 100, align: 'right'},
          {text: 'JobID', dataIndex: 'JobID', width: 100, align: 'right'},
          {text: 'GroupID', dataIndex: 'GroupID', width: 100, align: 'right'},
        ]}
      />
    </div>
  )
}

export default User2

//          renderer: v => <strong>{Number(parseFloat(v).toFixed(2)).toLocaleString('en')}</strong>},
