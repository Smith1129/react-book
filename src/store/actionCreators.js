import { CHANGE_INPUT_VALUE ,CHANGE_LIST,CHANGE_ADDLIST} from "./actionTypes";
export const getInputValueAction = value=>({
    type:CHANGE_INPUT_VALUE,
    value
})
export const AddListAction = inputValue=>({
    type:CHANGE_ADDLIST,
    value:inputValue
})
export const itemListDelAction = index =>({
    type:CHANGE_LIST,
    value:index
})
