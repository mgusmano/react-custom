import React, { useEffect, useState } from 'react';
import { SenchaGrid } from "@sencha/sencha-grid";

const PopulationGRUI = () => {
  const [store, setStore] = useState({fields:[],data:[]})

  useEffect(() => {
    const url = 'https://api.census.gov/data/2014/pep/natstprc?get=STNAME,POP&DATE_=7&for=state:*';
    const key = '&key=17fef827c77bf05f1af56c7552f2607f343d9d60';

    fetch(url + key)
      .then(response => response.json())
      .then(data => {
        //field names are in first row of data
        var fields = [];
        data[0].map(field => fields.push({name: field}));
        data.shift(); //remove the first row from the data
        setStore({fields: fields, data: data})
      });
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
          {text: 'State Name', dataIndex: 'STNAME', flex: 1},
          {text: 'Population', dataIndex: 'POP', width: 120, align: 'right',
            renderer: v => <strong>{Number(parseFloat(v).toFixed(2)).toLocaleString('en')}</strong>},
          {text: 'State ID', dataIndex: 'state', width: 100, align: 'right'},
        ]}
      />
    </div>
  )
}

export default PopulationGRUI