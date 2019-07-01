import axios from "axios"
import { log } from "util";


export const Get_DATA = "/info/get_datalist";
export const Get_DATAFn = (res) => ({
    type: Get_DATA,
    res
})
export const GET_DATAajax = (dispatch) => {
    return () => {
        return axios({
            method: 'get',
            url: '/apis/home/getRecommendShow',
            data: {
                cityAdd: "",
                page: "2",
                version: "5.1.4",
                referer: "2"
            }
        }).then((res) => {
            dispatch(Get_DATAFn(res.data.data.recommend_show_list))
        })

    }

}