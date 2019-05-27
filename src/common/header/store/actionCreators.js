import {constants} from './index'
import axios from 'axios'
export const slideTrue = () =>({
        type:constants.SEARCH_FOCUS
})

export const slideFalse = () => ({
        type:constants.SEARCH_BLUR
})
export const changeList = (data)=>({
        type:constants.CHANGE_LIST,
        value:data
})

export const getSearchList = ()=>{
        return (dispatch)=> {
                axios.get('/api/headerList.json').then((res) => {
                        dispatch(changeList(res.data))
                }).catch(()=>{
                        console.log('error')
                })
        }
}

