import React,{ Component } from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Input,Button,List  } from 'antd';
import store from './store/index'
import { getInputValueAction ,AddListAction,itemListDelAction} from './store/actionCreators'

class AntdLayout extends Component{
    constructor(props)
    {
        super(props)
        this.state = store.getState()
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleListAdd = this.handleListAdd.bind(this)
        store.subscribe(this.handleStoreChange)
        // this.state
    }
    render() {
        return(
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <Input placeholder="input"
                       style={{width:'300px',marginRight:'10px'}}
                       onChange={this.handleInputChange}
                       value={this.state.inputValue}/>
                <Button type="primary" onClick={this.handleListAdd}>提交</Button>
                <List
                    style={{marginTop:'10px',width:'300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (
                        <List.Item onClick={this.handleListDel.bind(this,index)}>{item}</List.Item>
                    )}
                    />
            </div>
        )
    }
    handleStoreChange(){
    this.setState(store.getState())
    }
    handleInputChange(e){
        const action = getInputValueAction(e.target.value)
        store.dispatch(action)
    }
    handleListDel(index){
        const action = itemListDelAction(index)
        store.dispatch(action)
    }
    handleListAdd(){
        const action = AddListAction(this.state.inputValue)
        store.dispatch(action)
    }

}
export default AntdLayout

