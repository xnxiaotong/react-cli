import React, { Component, Fragment } from "react"
import { Route, Redirect } from "react-router-dom";

import Info from "@/components/Info/Info.jsx"
import News from "@/components/News/News.jsx"
import Test from "@/components/Test/Test.jsx"

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Route path="/info" component={Info} />
                <Route path="/news" component={News} />
                <Route path="/test" component={Test} />
                <Redirect to="/info"></Redirect>
            </Fragment>
        )
    }
}