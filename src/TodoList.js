import React,{ Component,Fragment} from 'react'
import Todoitem from './Todoitem'
import './style.css'
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
            />
            <button onClick={this.handleSubmit}>提交</button>
            </div>
            <ul>
                {this.handleGetTodoList()}
            </ul>
        </Fragment>
        )
    }
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
    handleInputChange(e){
        // this.setState({
        //     inputValue:e.target.value
        // })
        const value  = e.target.value
        this.setState(()=>({
            inputValue:value
        }))
    }
    handleSubmit(){
        const list = [...this.state.list,this.state.inputValue]
        this.setState((prevState)=>({
                // prevState前一个State
            list:list,
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
