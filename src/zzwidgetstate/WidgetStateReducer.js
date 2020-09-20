

export const WidgetStateReducer = (state, action) => {
  var o = {}
  switch (action.type) {
    case 'widgetRecord':
      return { ...state, widgetRecord: action.payload }
      case 'defaultTitle':
        return { 
          ...state, 
          widgetRecord: { ...state.widgetRecord, ['defaultTitle']:  action.payload } 
        }
      case 'style':
        return { ...state, style: action.payload }
    default:
      return state;
  }
}
