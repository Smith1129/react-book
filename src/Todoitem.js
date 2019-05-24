import React,{ Component} from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component{
    constructor(props)
    {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.content !== this.props.content)
        {
            return true
        }else {
            return false
        }
    }

    render(){
    const { content } = this.props
        return(
        <div onClick={this.handleClick}>{content}</div>
        )
    }
    handleClick(){
        const { deleteItem,index } = this.props
        deleteItem(index)
    }
    //当1个组件从父组件接受了参数才会执行
    //如果这个组件第一次存在于父组件中，不会执行
    //如果这个组件之前已经存在于父组件中，才会执行
    // componentWillReceiveProps(nextProps, nextContext) {
    // }
}
// 父组件传值校验
Todoitem.propTypes = {
    content:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    deleteItem:PropTypes.func,
    index:PropTypes.number
}

// 设置默认值
Todoitem.defaultProps = {
}

export default Todoitem;
