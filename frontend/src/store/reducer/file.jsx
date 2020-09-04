import * as actionTypes from '../actions/actions';

const initialState = {
    selectedFile: null,
    previewedFile: null,
}

const reducer = (state = initialState, action) => {
    const parent = action.payload
    switch (action.type) {
        case actionTypes.SELECTEDFILE:
            console.log("Connected to SelectedFile reducer")
            return {
                ...state,
                previewedFile: action.preview,
                selectedFile: action.payload
            }
        case actionTypes.UNSELECTEDFILE:
            console.log("Connected to UNSELECTEDFILE reducer")
            return initialState
        default:
            return state;
    }
}

export default reducer;