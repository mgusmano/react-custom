import React, { useEffect, useState } from 'react';
import axios from "axios";
import { SenchaGrid } from "@sencha/sencha-grid";

const Population = (props) => {
  //title:Census Population//title:
  //x:10//x:
  //y:10//y:
  //width:400//width:
  //height:600//height:
  //icon:group//icon:

  const RunIt = (message, payload) => {
    //const [url] = useState('https://api.census.gov/data/2014/pep/natstprc?get=STNAME,POP&DATE_=7&for=state:*&key=17fef827c77bf05f1af56c7552f2607f343d9d60')

    const url ='https://api.census.gov/data/2014/pep/natstprc?get=STNAME,POP&DATE_=7&for=state:*&key=17fef827c77bf05f1af56c7552f2607f343d9d60'
    axios
      .get(url)
      .then((response) => {
        //var head = response.data[0]
        response.data.shift();
        
        var store = Ext.create('Ext.data.ArrayStore', {
          fields: [
            'STNAME',
            {name: 'POP', type: 'int'},
            {name: 'DATE_'},
            {name: 'state'}
          ],
          data: response.data
        });

        console.log(Ext.getCmp('population'))
        if(Ext.getCmp('population') != undefined) {
          console.log(Ext.getCmp('population').getStore())
        }


        Ext.getCmp('population').setStore(store)
      })
      .catch((error) => {
        console.log(error)
      })
  }



  //const [url, setUrl] = useState('')




  useEffect(() => {
    console.log('useEffect in Population')
    RunIt()

    window.addEventListener('mjg', onMessage);
    return function cleanup() {
      window.removeEventListener('mjg', onMessage);
    };

    // console.log(Ext.getCmp('population'))
    // if(Ext.getCmp('population') != undefined) {
    //   console.log(Ext.getCmp('population').getStore())
    // }

    // axios
    //   .get(url)
    //   .then((response) => {
    //     //var head = response.data[0]
    //     response.data.shift();
    //     var store = Ext.create('Ext.data.ArrayStore', {
    //       fields: [
    //         'STNAME',
    //         {name: 'POP', type: 'int'},
    //         {name: 'DATE_'},
    //         {name: 'state'}
    //       ],
    //       data: response.data
    //     });

    //     console.log(Ext.getCmp('population'))
    //     if(Ext.getCmp('population') != undefined) {
    //       console.log(Ext.getCmp('population').getStore())
    //     }


    //     Ext.getCmp('population').setStore(store)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }, []);

  const onMessage = (e) => {
    if (!e.detail) {return}
    console.log(e)
    var type = e.detail.type
    var payload = e.detail.payload

    switch (type) {
      case 'fromsend':
        console.log('fromsend')
        //setMessage(payload.message)
        console.log(payload.i)
        Ext.getCmp('population').setTitle(payload.message)

        //Ext.getCmp('population').getView().select(payload.i)
        //this.grid.getSelectionModel().selectFirstRow();
        //Ext.getCmp('population').getSelectionModel().selectRow(payload.i) ;

        break;
    }
  }

  return (

      <div style={{flex:'1',border:'1px solid lightgray' }}>
        <SenchaGrid
          height='100%'
          id='population'
          userSelectable={true}
          columns= {[

            {text: 'Name',dataIndex: 'STNAME',width: 150},
            {text: 'Population',dataIndex: 'POP',width: 120, align: 'right',
              renderer: Ext.util.Format.numberRenderer('000,000,000')},
            {text: 'ID',dataIndex: 'state',width: 20, align: 'right'},
            //{text: 'Date',dataIndex: 'DATE_',width: 100},

          ]}
        />
      </div>

  )
}

export default Population