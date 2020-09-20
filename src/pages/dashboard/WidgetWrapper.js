import React, { useEffect } from 'react';
import Widget from './Widget'


const WidgetWrapper = (props) => {
  useEffect(() => {
    console.log('useEffect for WidgetWrapper: ' + props.id)
} , []);
  return (
    <Widget key={props.id} widgetRecord={props.widgetRecord}></Widget>
  )
}

export default WidgetWrapper;

// export default React.memo(WidgetWrapper, areEqual);

// function areEqual(prevProps, nextProps) {
//   console.log('here')
//   /*
//   return true if passing nextProps to render would return
//   the same result as passing prevProps to render,
//   otherwise return false
//   */
// }
