import React, { useEffect, useRef } from 'react';
// Most of react-virtualized's styles are functional (eg position, size).
// Functional styles are applied directly to DOM elements.
// The Table component ships with a few presentational styles as well.
// They are optional, but if you want them you will need to also import the CSS file.
// This only needs to be done once; probably during your application's bootstrapping process.
import 'react-virtualized/styles.css';

// You can import any component you want as a named export from 'react-virtualized', eg
import {Column, Table} from 'react-virtualized';

// But if you only use a few react-virtualized components,
// And you're concerned about increasing your application's bundle size,
// You can directly import only the components you need, like so:
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';





//import { FixedSizeGrid as Grid } from 'react-window';

//import {AutoSizer, List} from 'react-virtualized';
//import 'react-virtualized/styles.css'; // only needs to be imported once

const Cell = ({ columnIndex, rowIndex, style, index }) => (
  <div key={index} style={style}>
    Item {rowIndex},{columnIndex}
  </div>
);








const ReactWindowExample = (props) => {
  const counterEl = useRef(null)

  console.log(counterEl)
  if (counterEl.current !== null) {
    console.dir(counterEl.current)
    console.log(counterEl.current.innerHeight())
  }

  //{counterEl.current !== null &&
//    }


const list = [
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  ];

function rowRenderer({key, index, style}) {
  return (
    <div key={key} style={style}>
      {list[index]}
    </div>
  );
}

//  <div style={{flex:'1',border:'1px solid lightgray' }}>
//  </div>

  return (


<AutoSizer>
      {({ height, width }) => (

<List
xstyle={{height:'100%',width:'100%'}}
columnCount={1000}
columnWidth={100}
height={height}
rowCount={list.length}
rowHeight={35}
width={width}
rowRenderer={rowRenderer}
>
{Cell}
</List>




)}
</AutoSizer>




  )
};

export default ReactWindowExample