import React,{Component} from 'react'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addtion,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchInfoList} from './style'
import { CSSTransition } from "react-transition-group";
import { connect } from 'react-redux'
import {actionCreators} from './store'

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
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames={'slide'}
                        >
                            <NavSearch onFocus={this.props.handleInputSlide} className={this.props.focused ? 'focused' : ''} onBlur={this.props.handleInputBlur}></NavSearch>
                        </CSSTransition>
                        <span className="iconfont" className={this.props.focused ? 'iconfont focused' : 'iconfont'}>&#xe62d;</span>
                        {this.getListArea(this.props.focused)}
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
    getListArea(show)
    {
        if(show){
                return(
                    <SearchInfo>
                        <SearchInfoTitle>
                            热门搜索
                            <SearchInfoSwitch>
                                换一批
                            </SearchInfoSwitch>
                        </SearchInfoTitle>
                        <SearchInfoList>
                            {this.props.list.map((item,index)=>{
                                return(
                                    <SearchInfoItem key={index}>{item}</SearchInfoItem>
                                )
                            })}
                            {/*<SearchInfoItem>教育</SearchInfoItem>*/}
                            {/*<SearchInfoItem>教育</SearchInfoItem>*/}
                            {/*<SearchInfoItem>教育</SearchInfoItem>*/}
                            {/*<SearchInfoItem>教育</SearchInfoItem>*/}
                            {/*<SearchInfoItem>教育</SearchInfoItem>*/}
                            {/*<SearchInfoItem>教育</SearchInfoItem>*/}
                            {/*<SearchInfoItem>教育</SearchInfoItem>*/}
                            {/*<SearchInfoItem>教育</SearchInfoItem>*/}
                            {/*<SearchInfoItem>教育</SearchInfoItem>*/}
                            {/*<SearchInfoItem>教育</SearchInfoItem>*/}
                        </SearchInfoList>
                    </SearchInfo>
                )
        }else {
            return null
        }
    }

}




const mapStateToProps = (state) =>{
    return{
        focused:state.header.focused,
        list:state.header.list
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        handleInputSlide(){
            dispatch(actionCreators.slideTrue())
            dispatch(actionCreators.getSearchList())
        },
        handleInputBlur(){
            dispatch(actionCreators.slideFalse())
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)
