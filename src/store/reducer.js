import { CHANGE_INPUT_VALUE ,CHANGE_LIST,CHANGE_ADDLIST} from "./actionTypes";
const defaultState = {
    inputValue:'123',
    list:[1,2,3,4]
}

export default (state=defaultState,action) => {
    if(action.type === CHANGE_INPUT_VALUE)
    {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === CHANGE_LIST)
    {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value,1)
        return newState
    }
    if(action.type === CHANGE_ADDLIST)
    {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = [...newState.list,action.value]
        newState.inputValue = ''
        return newState
    }
    return state
}
