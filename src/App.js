import React,{ Component,Fragment } from 'react'
import {Globalstyle} from "./style";
import {Globalstyle1} from "./statics/iconfont/iconfont";
import Header from './common/header/index'
import { Provider } from 'react-redux'
import store from './store'
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
        <Provider store={store}>
        <Header/>
        </Provider>
        </Fragment>
        )
    }
}

export default App

