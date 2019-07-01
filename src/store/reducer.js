// import { combineReducers } from "redux"
import {combineReducers} from "redux-immutable"
import Inforeducer from "@/components/Info/Inforeducer"
import Newsreducer from "@/components/News/Newsreducer"

export default combineReducers({
    Inforeducer,
    Newsreducer
})