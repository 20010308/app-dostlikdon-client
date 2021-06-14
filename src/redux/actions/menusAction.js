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
        dispatch(updateState({disabl: true}));
        console.log(event);
        console.log(values);
        if (event.nameUz === "" && event.nameRu === "" && event.nameEn === ""){
            toast.error("Malumotlarni tol'diring !!!")
        }else{
            axios.post(API_PATH + "menu", values)
                .then((res) => {
                    toast.success(res.data.message);
                    dispatch(updateState({open: false,disabl: false, submenu: false, url: ""}));
                    dispatch(getMenus());
                })
        }

    }
}

export const getMenus = () => (dispatch) => {
    axios.get(API_PATH + "menu/all")
        .then((res) => {
            dispatch(updateState({menus: res.data.data}));
        })
};

export const deleteMenus = () => (dispatch, getState) => {
    console.log(getState);
    // axios.delete(API_PATH + "menu/")
};