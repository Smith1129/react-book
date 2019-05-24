import React,{ Component,Fragment} from 'react'
import Todoitem from './Todoitem'
import './style.css'
import axios from 'axios'
class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            list:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInputDel = this.handleInputDel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleGetTodoList = this.handleGetTodoList.bind(this)
    }
    // 组件即将被挂载到页面的时刻执行
    // componentWillMount() {
    //
    // }

    //JSX语法
    render(){
        return (
        <Fragment>
            <div>
            <label htmlFor='insetArea'>输入内容:</label>
            <input id='insetArea'
                   className='input'
                   value={this.state.inputValue}
                   onChange={this.handleInputChange}
                   ref={ (input) => {
                   this.input = input
                   }}
            />
            <button onClick={this.handleSubmit}>提交</button>
            </div>
            <ul>
                {this.handleGetTodoList()}
            </ul>
        </Fragment>
        )
    }
    componentDidMount() {
        axios.get('/api/todolist').then((res)=>{

        }).catch(()=>{
            alert('worry')
        })
    }

    // // 组件被挂载之后执行
    // componentDidMount() {
    // }
    // //当这个组件即将从页面中被剔除的时候，才会执行
    // componentWillUnmount() {
    // }

    // //组件更新之前会自动执行
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     // return true 需要被更新
    //     // return false 不需要被更新
    // }
    // // shouldComponentUpdate返回true才执行 返回false不执行
    // componentWillUpdate(nextProps, nextState, nextContext) {
    // }
    // //组件更新完成之后会被执行
    // componentDidUpdate(prevProps, prevState, snapshot) {
    // }

    handleGetTodoList(){
        return this.state.list.map((item,index)=>{
            return(
                <Todoitem key={index} content={item} index={index} deleteItem={this.handleInputDel}/>
            )
            // return <li key={index} onClick={this.handleInputDel.bind(this,index)}
            // >{item}</li>
            // dangerouslySetInnerHTML={{__html:item}} 对输入内容不转译
        })
    }
    handleInputChange(){
        // this.setState({
        //     inputValue:e.target.value
        // })
        // const value  = e.target.value
        const value  = this.input.value
        this.setState(()=>({
            inputValue:value
        }))
    }
    handleSubmit(){
        const list = [...this.state.list,this.state.inputValue]
        this.setState((prevState)=>({
                // prevState前一个State
            // list:list,
            // inputValue:''
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }))
    // this.setState({
    //     list:[...this.state.list,this.state.inputValue],
    //     inputValue:''
    // })
    }
    handleInputDel(index){
    // this.setState({
    //     list:list
    // })
    this.setState(()=>{
        const list = [...this.state.list]
        list.splice(index,1)
        return {list}
    })
    }
}
export default TodoList
