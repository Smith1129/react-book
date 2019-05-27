import * as Constants from './constants'
const defaultState = {
    focused:false,
    list:[]
}
export default (state = defaultState,action) => {
    if(action.type === Constants.SEARCH_FOCUS)
    {
        return {
            focused:true,
            list:[]
        }
    }
    if(action.type === Constants.SEARCH_BLUR)
    {
        return {
            focused:false
        }
    }
    if(action.type === Constants.CHANGE_LIST)
    {
        console.log(11)
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.value
        return newState
    }
    console.log(state)
    return state
}
