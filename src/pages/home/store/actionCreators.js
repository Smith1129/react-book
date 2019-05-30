import {constants} from './index'
import axios from 'axios'
export const getHomeList = ()=>{
        return (dispatch)=> {
                axios.get('/api/homeList.json').then((res) => {
                        dispatch(initTHomeList(res.data.data))
                }).catch(()=>{
                        console.log('error')
                })
        }
}
const initTHomeList = (data)=>{
        return{
                type:constants.GET_HOMEDATA,
                value:data.topicList,
                ArticleList:data.articleList,
                recommendList:data.recommendList
        }
}

export const loadMore = () =>{
        return (dispatch)=> {
                axios.get('/api/homeList.json').then((res) => {
                        dispatch(loadMoreList(res.data.data))
                }).catch(()=>{
                        console.log('error')
                })
        }
}
const loadMoreList = (data) =>{
        return{
                type:constants.LOAD_MORE,
                value:data.articleList
        }
}

export const changeScrollShow = (show) => {
        return{
                type:constants.SCROLL_SHOW,
                value:show
        }
}



