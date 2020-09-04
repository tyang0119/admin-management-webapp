import * as actionTypes from '../actions';

const initialState = {
    sortedList: [],
    sortedFirstName: '',
    sortedLastName: '',
    sortedAge: '',
    sortedGender: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SORTAGE:
            let newAgeOrder = ''
            if (state.sortedAge === '' || state.sortedAge === 'descending') {
                action.userList.sort((a, b) => (a.age - b.age))
                newAgeOrder = 'ascending'
            } else if (state.sortedAge === "ascending") {
                action.userList.sort((a, b) => (b.age - a.age))
                newAgeOrder = 'descending'
            }
            return {
                ...state,
                sortedFirstName: '',
                sortedLastName: '',
                sortedAge: newAgeOrder,
                sortedGender: ''
            }
        case actionTypes.SORTINGFIRSTNAME:
            let newFirstOrder = ''
            if (state.sortedFirstName === '' || state.sortedFirstName === 'descending') {
                action.userList.sort((a, b) => (a.firstName.toLowerCase() > b.firstName.toLowerCase()) ? 1 : -1)
                newFirstOrder = 'ascending'
            } else if (state.sortedFirstName === "ascending") {
                action.userList.sort((a, b) => (a.firstName.toLowerCase() < b.firstName.toLowerCase()) ? 1 : -1)
                newFirstOrder = 'descending'
            }
            return {
                sortedFirstName: newFirstOrder,
                sortedLastName: '',
                sortedAge: '',
                sortedGender: ''
            }
        case actionTypes.SORTLASTNAME:
            let newLastOrder = ''
            if (state.sortedLastName === '' || state.sortedLastName === 'descending') {
                action.userList.sort((a, b) => (a.lastName.toLowerCase() > b.lastName.toLowerCase()) ? 1 : -1)
                newLastOrder = 'ascending'
            } else if (state.sortedLastName === "ascending") {
                action.userList.sort((a, b) => (a.lastName.toLowerCase() < b.lastName.toLowerCase()) ? 1 : -1)
                newLastOrder = 'descending'
            }

            return {
                sortedFirstName: '',
                sortedLastName: newLastOrder,
                sortedAge: '',
                sortedGender: ''
            }
        case actionTypes.SORTGENDER:
            let newGenderOrder = ''
            if (state.sortedGender === '' || state.sortedGender === 'descending') {
                action.userList.sort((a, b) => (a.gender.toLowerCase() > b.gender.toLowerCase()) ? 1 : -1)
                newGenderOrder = 'ascending'
            } else if (state.sortedGender === "ascending") {
                action.userList.sort((a, b) => (a.gender.toLowerCase() < b.gender.toLowerCase()) ? 1 : -1)
                newGenderOrder = 'descending'
            }

            return {
                sortedFirstName: '',
                sortedLastName: '',
                sortedAge: '',
                sortedGender: newGenderOrder
            }

        default:
            return state;
    }
};

export default reducer;