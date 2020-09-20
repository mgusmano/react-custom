class Util {
  static SendIt(type, payload) {
    window.dispatchEvent(new CustomEvent('mjg',{detail:{type:type,payload:payload}}));


  }




  static SendIt2(dashboardData, message, payload) {
    dashboardData.dashboard !== undefined &&
      //console.log(widgetData)
      dashboardData.dashboard.widgets.map((widgetRecord) => {
        //console.log(widgetRecord)
        if (widgetRecord.events != undefined) {
          if (widgetRecord.events[message] != undefined) {
            //widgetRecord.events['FirstOne']('the message')
            widgetRecord.events[message](payload)
          }
        }
      })
  }

  static TileIt(widgets) {
    console.log('here')
    var columns = 3
    var a = document.getElementById('absolute')
    var length = widgets.length
    var rows = length / columns
    rows = Math.ceil(rows)
    if (length % columns > 1) {
      rows = rows + 1
    }
    var space = 20
    var w = a.clientWidth - space
    var h = a.clientHeight - space
    var newWidth = w/columns
    var newHeight = h/rows
    var left = 0
    var width = newWidth - space
    var currentCol = 1
    var currentRow = 1
    var newY = 0
    widgets.forEach(widget => {
      var index = widgets.map(item => item.id).indexOf(widget.id);
      if (index !== -1) {
        if (currentCol > columns) {
          left = 0
          currentRow = currentRow + 1
          newY = newY + newHeight
          currentCol = 1
        }
        window.dispatchEvent(new CustomEvent("mjg",{
          detail:{
            type: 'tile',
            id: widget.id,
            box: {
              left: left,
              top: newY,
              width: width,
              height: newHeight - space,
            }
          }
        }));
        left = width + left + space
        currentCol = currentCol + 1
      }
    })
  }

}

export default Util
