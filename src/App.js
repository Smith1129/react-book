import React,{ Component,Fragment } from 'react'
import {Globalstyle} from "./style";
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
        <Header/>
        </Fragment>
        )
    }
}

export default App

