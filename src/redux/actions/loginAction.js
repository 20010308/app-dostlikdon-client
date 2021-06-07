import axios from "axios";
import {API_PATH, TOKEN_NAME} from "../../tools/constants";
import {toast} from "react-toastify";

export function login(event, errors, values) {
    console.log(values);

    axios.post(API_PATH + "auth/login", values)
        .then((res) => {
            console.log(res);
            localStorage.setItem(TOKEN_NAME, res.data.tokenType + " " + res.data.accessToken);
        })
        .catch((error) => {
            toast.error(error.response.data.message);
        });

    return {}
}