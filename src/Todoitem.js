import React,{ Component} from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component{
    constructor(props)
    {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render(){
    const { content,test } = this.props
        return(
        <div onClick={this.handleClick}>{test}-{content}</div>
        )
    }
    handleClick(){
        const { deleteItem,index } = this.props
        deleteItem(index)
    }
}
// 父组件传值校验
Todoitem.propTypes = {
    test:PropTypes.string.isRequired,
    content:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    deleteItem:PropTypes.func,
    index:PropTypes.number
}

// 设置默认值
Todoitem.defaultProps = {
    test:'Hello World'
}

export default Todoitem;
