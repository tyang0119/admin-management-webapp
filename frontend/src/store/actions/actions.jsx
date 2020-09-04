import axios from 'axios'
//pageReducer

export const PREVIOUSPAGE = 'PREVIOUSPAGE';
export const NEXTPAGEPAGE = 'NEXTPAGEPAGE';
export const ONPAGECHANGE = 'ONPAGECHANGE';

//userReducer
export const ADDUSER = "ADDUSER";
export const UPDATEUSER = "UPDATEUSER";
export const DELETEUSER = "DELETEUSER";
export const READUSER = "READUSER";
export const READTARGET = "READTARGET";
export const OFFEDITOR = "OFFEDITOR";

//sortReducer

export const SORTINGFIRSTNAME = 'SORTINGFIRSTNAME';
export const SORTLASTNAME = 'SORTLASTNAME';
export const SORTAGE = 'SORTAGE';
export const SORTGENDER = 'SORTGENDER';

//searchReducer

export const HANDLESEARCH = 'HANDLESEARCH';
export const RESULTSELECT = 'RESULTSELECT';

//file
export const SELECTEDFILE = 'SELECTEDFILE';
export const UNSELECTEDFILE = 'UNSELECTEDFILE';

export const addUser = (state, data) => dispatch => {
    const formData = new FormData()
    formData.append(
        'avatar',
        state,
        state.name
    )
    let store = "";
    axios.post('http://localhost:4000/users/avatar', formData)
        .then(res => {
            console.log("adding")
            store = res.data
            dispatch({
                type: ADDUSER,
                payload: { _id: store, ...data }
            })

            dispatch({
                type: UNSELECTEDFILE
            })
        })
        .then(res => {
            axios.put("http://localhost:4000/users/" + store, data)
                .then(res => console.log("uploaded success"))

        })
        .catch(error => console.log(error))
}

export const updateUser = (id, state, data) => dispatch => {
    console.log("Here is actionCreator", id, state, data)

    const formData = new FormData()
    formData.append(
        'avatar',
        state,
        state.name
    )
    let store = "";

    axios.put("http://localhost:4000/users/avatar/" + id, formData)
        .then(res => {
            console.log('update')
            store = res.data
            dispatch({
                type: UPDATEUSER,
                id: id,
                payload: data
            })
        })
        .then(res => {
            axios.put("http://localhost:4000/users/" + id, data)
                .then(res => console.log("update completed"))
        })
        .catch(() => console.log("fail"))

}


export const readUser = () => dispatch => {
    axios
        .get("http://localhost:4000/users")
        .then((res) => {
            dispatch({
                type: READUSER,
                payload: res.data
            })
        })
}

export const deleteUser = (id) => dispatch => {
    axios
        .delete("http://localhost:4000/users/" + id)
        .then((res) => {
            console.log("delete")
            dispatch({
                type: DELETEUSER,
                payload: id,
            })
        })
        .catch(e => console.log(id))
}


export const readTarget = (id) => dispatch => {
    axios
        .get("http://localhost:4000/users/" + id)
        .then((res) => {
            console.log(res.data)
            dispatch({
                type: READTARGET,
                payload: res.data
            })
        })
        .catch(e => console.log(e))
}

export const offeditor = () => {
    return {
        type: OFFEDITOR
    }
}

export const selectedFile = (data) => dispatch => {
    const file = data.target.files[0]
    const preview = URL.createObjectURL(data.target.files[0])
    dispatch({
        type: SELECTEDFILE,
        payload: file,
        preview: preview
    })
}

export const unselectedFile = () => dispatch => {
    dispatch({
        type: UNSELECTEDFILE
    })
}

//Update 
// .then(res => {
    //     console.log("adding")
    //     store = res.data
    //     dispatch({
    //         type: ADDUSER,
    //         payload: { _id: store, ...data }
    //     })

    //     dispatch({
    //         type: UNSELECTEDFILE
    //     })
    // })
    // .then(res => {
    //     axios.put("http://localhost:4000/users/" + store, data)
    //         .then(res => console.log("uploaded success"))

    // })
    // .catch(error => console.log(error))


    // axios
    //     .put("http://localhost:4000/users/" + id, { ...data, avatar: null })
    //     .then((res) => {
    //         console.log("update success")
    //         dispatch({
    //             type: UPDATEUSER,
    //             id: id,
    //             payload: data
    //         })
    //     })
    //     .catch((err) => console.log("Fail Update", data, "id is", id, "error is ", err))