import * as actionTypes from '../actions/actions';

const initialState = {
    activePage: 1,
    boundaryRange: 1,
    siblingRange: 1,

    totalPages: 50,

    showEllipsis: true,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: true,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ONPAGECHANGE:
            return {
                ...state,
                activePage: action.page
            }
        default:
            return state
    }
}

export default reducer;