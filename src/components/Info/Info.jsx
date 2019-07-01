import React, { Fragment } from 'react';
import { connect } from "react-redux"
import { GET_DATAajax } from "./actionCreator"
import { Button } from 'antd-mobile'
class Info extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <Fragment>
                <h4>INFO信息页面</h4>
                <Button onClick={this.props.handleAdd.bind(this)}>点击获取数据</Button>
                {
                    // .getIn("schePic")
                    this.props.infolist.map((item, index) => {
                        return (
                            <li key={index}>
                                <img src={item.get("schePic")} alt="" />
                            </li>
                        )
                    })
                }
            </Fragment>
        )
    }
}

const mapStateToProps = (store) => ({
    infolist: store.getIn(["Inforeducer", "infolist"])
})
//里面必需返回一个对象  //如果返回函数 要在定义中间件
//  store => index.js 
//import { createStore, applyMiddleware } from "redux"
// import thunk from 'redux-thunk';
// import store from "./reducer"
// export default createStore(store, applyMiddleware(thunk));
const mapDispathToProps = (dispatch) => ({
    handleAdd() {
        dispatch(GET_DATAajax(dispatch))
    }
})


export default connect(mapStateToProps, mapDispathToProps)(Info)