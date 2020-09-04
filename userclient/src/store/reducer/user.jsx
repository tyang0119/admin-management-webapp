import * as actionTypes from '../actions/actions';

const initialState = {
    user: [],
    preParent: "",
    editTarget: [],
    isEditing: false,
    store: [],
    isSorting: false
}

const reducer = (state = initialState, action) => {
    const parent = action.payload
    switch (action.type) {
        case actionTypes.READUSER:
            console.log("Connected to READUSER reducer")
            return {
                ...state,
                user: action.payload,
                store: [...state.user],
                isSorting: false
            }
        case actionTypes.ADDUSER:
            console.log("Connected to ADDUSER reducer")
            return {
                ...state,
                user: [...state.user, action.payload],
                preParent: "AddUser"
            }

        case actionTypes.DELETEUSER:
            console.log("Connected to DELETE reducer")
            return {
                ...state,
                user: state.user.filter((user) => user._id !== action.payload),
                preParent: parent
            }

        case actionTypes.UPDATEUSER:
            console.log("Connected to UPDATE reducer", action.payload)
            const updatedUser = action.payload
            const newArray = state.user.map(user => {
                if (user._id === action.id) {
                    return updatedUser
                }
                return user
            })
            return {
                ...state,
                user: newArray,
                editTarget: [],
                isEditing: false
            }
        case actionTypes.READTARGET:
            const targetArray = action.payload
            return {
                ...state,
                editTarget: [targetArray],
                isEditing: true
            }

        case actionTypes.OFFEDITOR:
            return {
                ...state,
                editTarget: [],
                isEditing: false
            }
        case actionTypes.HANDLESEARCH:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default reducer;