import produce from 'immer'

export const GlobalStateReducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {

    case 'widgets':
      //console.log("dashboardData",payload)
      return produce(state,(draft) => {
        draft.widgets = payload
      })

    case 'numberofwidgets':
      //console.log("dashboardData",payload)
      return produce(state,(draft) => {
        draft.numberofwidgets = payload
      })






    case 'dashboardData':
      //console.log("dashboardData",payload)
      return produce(state,(draft) => {
        draft.dashboardData = payload
        draft.highWidgetId = payload.dashboard.widgets.length
      })

      //return { ...state, dashboardData: payload, highWidgetId: payload.dashboard.widgets.length }
    // case 'widgetData':
    //   return { ...state, widgetData: payload, highWidgetId: payload.length }
    case 'appTitle':
      return produce(state,(draft) => {
        draft.dashboardData.appTitle = payload
      })
    case 'userName':
      return produce(state,(draft) => {
        draft.userName = payload
      })

      case 'selectedIndex':
        return produce(state,(draft) => {
          draft.selectedIndex = payload
        })

        case "REPLACE_WIDGET":
          console.log("REPLACE_WIDGET",payload)
          return produce(state, draft => {
            var index = draft.dashboardData.dashboard.widgets.map(item => item.id).indexOf(payload.id);
            if (index !== -1) {
              draft.dashboardData.dashboard.widgets[index] =  payload
            }
          })

          case "ADD_WIDGET" :
            return {
                ...state,
                widgets: [
                  ...state.widgets,
                  {
                    id: 10,
                    properties: {
                      mode: payload.mode,
                      position: {x: payload.x,y: payload.y},
                      size: {width: payload.w,height: payload.h}
                    },
                  }
                ]
            }



          case "ADD_WIDGET4":
            //console.log("ADD_WIDGET",payload)
            return produce(state, draft => {
              draft.widgets.push({
                id: draft.highWidgetId,
                properties: {
                  mode: payload.mode,
                  position: {x: payload.x,y: payload.y},
                  size: {width: payload.w,height: payload.h}
                },
              })
            })


      case "ADD_WIDGET3":
        //console.log("ADD_WIDGET",payload)
        return produce(state, draft => {
          draft.highWidgetId = draft.highWidgetId + 1
          draft.numberofwidgets = draft.numberofwidgets + 1
          draft.widgets.push({
            id: draft.highWidgetId,
            events: {},
            WidgetForm: null,
            defaultTitle: payload.title,
            type: payload.type,
            properties: {
              mode: payload.mode,
              position: {x: payload.x,y: payload.y},
              size: {width: payload.w,height: payload.h}
            },
          })
        })

        case "ADD_WIDGET2":
          //console.log("ADD_WIDGET",payload)
          return produce(state, draft => {
            draft.highWidgetId = draft.highWidgetId + 1
            draft.dashboardData.dashboard.widgets.push({
              id: draft.highWidgetId,
              events: {},
              WidgetForm: null,
              defaultTitle: payload.title,
              type: payload.type,
              properties: {
                mode: payload.mode,
                position: {x: payload.x,y: payload.y},
                size: {width: payload.w,height: payload.h}
              },
            })
          })

    // case "INITIALIZE_WIDGET":
    //   console.log("INITIALIZE_WIDGET",payload.id)
    //   return produce(state, draft => {
    //     console.log(draft)
    //     var index = draft.dashboardData.dashboard.widgets.map(item => item.id).indexOf(payload.id);
    //     if (index !== -1) {
    //       draft.dashboardData.dashboard.widgets[index].events = {}
    //     }
    //   })

    case "SET_EVENT_FIRSTONE":
      console.log("SET_EVENT_FIRSTONE",payload.id)
      return produce(state, draft => {
        var index = draft.dashboardData.dashboard.widgets.map(item => item.id).indexOf(payload.id);
        if (index !== -1) {
          draft.dashboardData.dashboard.widgets[index].events.FirstOne = payload.receiver
          //draft.dashboardData.dashboard.widgets[index].FirstOne = payload.receiver
        }
      })

      case "SET_WIDGET_FORM":
        console.log("SET_WIDGET_FORM",payload.id)
        return produce(state, draft => {
          console.log(draft)
          var index = draft.dashboardData.dashboard.widgets.map(item => item.id).indexOf(payload.id);
          if (index !== -1) {
            //console.log(draft.dashboardData.dashboard.widgets)
            draft.dashboardData.dashboard.widgets[index].WidgetForm = payload.WidgetForm
            //draft.dashboardData.dashboard.widgets[index].FirstOne = payload.receiver
          }
        })

        case "CLEAR_WIDGETS":
          return produce(state, draft => {
            draft.widgets = []
          })






      case "TILE_WIDGETS":
        return produce(state, draft => {
          var columns = 3
          var a = document.getElementById('absolute')
          var length = draft.dashboardData.dashboard.widgets.length
          var rows = length / columns
          rows = Math.ceil(rows)
          if (length % columns > 1) {
            rows = rows + 1
          }

          var space = 20
          //debugger
          //var w = a.scrollWidth
          //var h = a.scrollHeight - 40
          var w = a.clientWidth - space
          var h = a.clientHeight - space
          //var l = draft.dashboardData.dashboard.widgets.length


          //var newWidth = w/l
          var newWidth = w/columns

          //console.log(h)
          //console.log(rows)

          var newHeight = h/rows

          //console.log(newHeight)
          //console.dir(a)
          //console.log(w)
          //console.log(l)
          //console.log(newWidth)

          var left = 0
          var width = newWidth - space

          var currentCol = 1
          var currentRow = 1
          var newY = 0
          draft.dashboardData.dashboard.widgets.forEach(widget => {
            var index = draft.dashboardData.dashboard.widgets.map(item => item.id).indexOf(widget.id);
            if (index !== -1) {

              if (currentCol > columns) {
                left = 0
                currentRow = currentRow + 1
                newY = newY + newHeight
                currentCol = 1
              }
              // else {
              //   currentCol = currentCol + 1
              // }
              //console.log(currentRow,currentCol)

              draft.dashboardData.dashboard.widgets[index].properties.position =  {x:left,y: newY}
              draft.dashboardData.dashboard.widgets[index].properties.size = {width: width,height: newHeight - space}
              left = width + left + space

              currentCol = currentCol + 1

            }
          })

        })


      case "TILE_WIDGETS2":
        return produce(state, draft => {
          var a = document.getElementById('absolute')
          var length = draft.dashboardData.dashboard.widgets.length
          var space = 15
          //debugger
          //var w = a.scrollWidth
          //var h = a.scrollHeight - 40
          var w = a.clientWidth - space
          var h = a.clientHeight - space
          var l = draft.dashboardData.dashboard.widgets.length
          var newWidth = w/l
          //console.dir(a)
          //console.log(w)
          //console.log(l)
          //console.log(newWidth)


          // var left = 20
          // var width = newWidth - 40

          // draft.dashboardData.dashboard.widgets.forEach(widget => {
          //   var index = draft.dashboardData.dashboard.widgets.map(item => item.id).indexOf(widget.id);
          //   if (index !== -1) {
          //     draft.dashboardData.dashboard.widgets[index].properties.position =  {x:left,y: 20}
          //     draft.dashboardData.dashboard.widgets[index].properties.size = {width: width,height: h}
          //     left = width + left + 30
          //   }
          // })



          var left = 0
          var width = newWidth - space

          draft.dashboardData.dashboard.widgets.forEach(widget => {
            var index = draft.dashboardData.dashboard.widgets.map(item => item.id).indexOf(widget.id);
            if (index !== -1) {
              draft.dashboardData.dashboard.widgets[index].properties.position =  {x:left,y: 0}
              draft.dashboardData.dashboard.widgets[index].properties.size = {width: width,height: h}
              left = width + left + space
            }
          })

        })
    case "CHANGE_WIDGET_MODE":
      return produce(state, draft => {
        var index = draft.dashboardData.dashboard.widgets.map(item => item.id).indexOf(payload.id);
        if (index !== -1) {
          if (draft.dashboardData.dashboard.widgets[index].properties.mode == 'chart') {
            draft.dashboardData.dashboard.widgets[index].properties.mode = 'grid'
          }
          else {
            draft.dashboardData.dashboard.widgets[index].properties.mode = 'chart'
          }
        }
      })
      case "DELETE_WIDGET":
        //console.log('DELETE_WIDGET')
        return produce(state, draft => {
          var index = draft.dashboardData.dashboard.widgets.map(item => item.id).indexOf(payload.id);
          if (index !== -1) {
            draft.dashboardData.dashboard.widgets.splice(index, 1);
          }
        })
    case "UPDATE_WIDGET":
      return produce(state, draft => {
        var index = draft.dashboardData.dashboard.widgets.map(item => item.id).indexOf(payload.id);
        if (index !== -1) {
          draft.dashboardData.dashboard.widgets[index].properties.position =  {x: payload.x,y: payload.y}
          draft.dashboardData.dashboard.widgets[index].properties.size = {width: payload.w,height: payload.h}
        }
      })
    case "MOVE_WIDGET":
      return produce(state, draft => {
        var index = draft.dashboardData.dashboard.widgets.map(item => item.id).indexOf(payload.id);
        if (index !== -1) {
          draft.dashboardData.dashboard.widgets[index].properties.position = {x: payload.x,y: payload.y}
        }
      })

      // case "RESIZE_WIDGET":
      //   console.log("RESIZE_WIDGET",payload.id)
      //   return produce(state, draft => {
      //     draft.dashboardData.dashboard.widgets[0].test = true
      //   })

      case "SET_MESSAGE":
        console.log("SET_MESSAGE",payload.id)
        return produce(state, draft => {
          //console.log(draft)
          var index = draft.dashboardData.dashboard.widgets.map(item => item.id).indexOf(payload.id);
          if (index !== -1) {
            draft.dashboardData.dashboard.widgets[index].message = payload.message
          }
        })




    case "RESIZE_WIDGET":
      console.log("RESIZE_WIDGET",payload.id)
      return produce(state, draft => {
        //console.log(draft)
        var index = draft.dashboardData.dashboard.widgets.map(item => item.id).indexOf(payload.id);
        if (index !== -1) {
          draft.dashboardData.dashboard.widgets[index].properties.position = {x: payload.x, y: payload.y}
          draft.dashboardData.dashboard.widgets[index].properties.size = {width: payload.w,height: payload.h}
        }
      })
    case "ACTIVATE_WIDGET":
      console.log("ACTIVATE_WIDGET",payload.id)
      return produce(state, draft => {
        draft.dashboardData.dashboard.widgets.forEach(widget => widget.active = false)
        var index = draft.dashboardData.dashboard.widgets.map(item => item.id).indexOf(payload.id);
        if (index !== -1) {
          draft.activeItemId = payload.id
          draft.activeWidgetForm = draft.dashboardData.dashboard.widgets[index].WidgetForm
          draft.dashboardData.dashboard.widgets[index].active = true
          draft.toolkitTitle = draft.dashboardData.dashboard.widgets[index].defaultTitle
        }
      })
    default:
      return state;
  }
}