import React,{ Component,Fragment } from 'react'
import {Globalstyle} from "./style";
import {Globalstyle1} from "./statics/iconfont/iconfont";
import Header from './common/header/index'
class App extends Component {
    constructor(props) {
        super(props)
        // this.state
    }

    render() {
        return (
        <Fragment>
        <Globalstyle/>
        <Globalstyle1/>
        <Header/>
        </Fragment>
        )
    }
}

export default App

