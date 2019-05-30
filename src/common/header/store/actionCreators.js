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
        value:data,
        pageCount:Math.ceil((data.length)/10)
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
export const mouseInTrue = ()=>{
        return{
                type:constants.MOUSEIN_TRUE,
                value:true
        }
}
export const mouseInFalse = ()=>{
        return{
                type:constants.MOUSEIN_FALSE,
                value:false
        }
}
export const pageChange = (page)=>{
        return{
        type:constants.PAGE_CHANGE,
        value:page
        }
}


