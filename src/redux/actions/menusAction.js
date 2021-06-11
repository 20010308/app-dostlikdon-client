import {UPDATE_STATE} from "../types/menusTypes";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {toast} from "react-toastify";

export function updateState(data) {
    return {
        type: UPDATE_STATE,
        payload: data
    }
}

export function saveMenu(event, errors, values) {
    return function (dispatch) {

        axios.post(API_PATH + "menu", values)
            .then((res) => {
                toast.success(res.data.message);
                dispatch(updateState({open: false, submenu: false, url: ""}));
            })
    }
}

export const getMenus = () => (dispatch) => {
    axios.get(API_PATH + "menu/all")
        .then((res) => {
            console.log(res);
            dispatch(updateState({menus: res.data.data}));
        })
}