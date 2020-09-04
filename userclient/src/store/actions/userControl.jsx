import axios from 'axios';
import { ADDUSER, UPDATEUSER, DELETEUSER, READUSER } from './actions';

export const addUser = () => dispatch => {
    console.log("hello")
    // axios
    //     .post("http://localhost:4000/users")
    //     .then((res) => {
    //         console.log("added")
    //         dispatch({
    //             type: ADDUSER,
    //             payload: res.data
    //         })
    //     })
    //     .catch(e => console.log("nope"))
}

export const deleteUser = (id) => dispatch => {
    axios
        .delete("http://localhost:4000/users")
        .then((res) => {
            dispatch({
                type: DELETEUSER,
                payload: id,
            })
        })
}