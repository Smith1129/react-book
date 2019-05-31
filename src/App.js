import React,{ Component,Fragment } from 'react'
import {Globalstyle} from "./style";
import {Globalstyle1} from "./statics/iconfont/iconfont";
import Header from './common/header/index'
import { Provider } from 'react-redux'
import { BrowserRouter,Route} from 'react-router-dom'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'
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
        <BrowserRouter>
        <div>
            <Header/>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
        </div>
        </BrowserRouter>
        </Provider>
        </Fragment>
        )
    }
}

export default App

