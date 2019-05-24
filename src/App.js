import React, {Component, Fragment} from 'react'
import './App.css'
import { CSSTransition,TransitionGroup } from 'react-transition-group';

class App extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            show:true,
            list:[]
        }
        this.handleChangeState = this.handleChangeState.bind(this)
    }
    render() {
        return(
        <Fragment>
            <TransitionGroup>
                {this.state.list.map((item,index)=>{
                    return(
                        <CSSTransition
                            // in={this.state.show} //绑定数据
                            timeout={1000} //动画时间
                            classNames={'fade'}
                            unmountOnExit   //隐藏的时候把dom也取消了
                            onEntered = {(el) => {              //动画结束执行的钩子函数
                                el.style.color = 'blue'
                            }}
                            appear={true} //第一次展示的时候就显示动画 对应的className .fade-appear .fade-appear-active .fade-appear-done
                        >
                        <div key={index}>{item}</div>
                        </CSSTransition>
                    )
                })
                }
                {/*<span className={this.state.show ? 'show' : 'hide'}>hello</span>*/}
            </TransitionGroup>
                <button type='button' onClick={this.handleChangeState}>toggle</button>
        </Fragment>
        )
    }
    handleChangeState(){
        this.setState((prevState)=>{
            return {
                list:[...prevState.list,'item']
            }
        })
    }
}
export default App
