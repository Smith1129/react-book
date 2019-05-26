import React,{ Component } from 'react'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addtion,Button,SearchWrapper} from './style'
class Header extends Component{

    render() {
    return(
        <HeaderWrapper>
        <Logo href='/'/>
        <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载APP</NavItem>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right'>
                <span className="iconfont">&#xe636;</span>
            </NavItem>
            <SearchWrapper>
            <NavSearch></NavSearch>
            <span className="iconfont">&#xe62d;</span>
            </SearchWrapper>
        </Nav>
            <Addtion>
                <Button className='writting'>
                    <span className="iconfont">&#xe615;</span>
                    写文章</Button>
                <Button className='reg'>注册</Button>
            </Addtion>
        </HeaderWrapper>
    )
    }
}
export default Header
