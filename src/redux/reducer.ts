const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'CHANGE_SALARY':
            return state = { ...state, salary: action.payload }
        case 'CHANGE_BOX_VISIBLE':
            return state = { ...state, boxVisible: action.payload }
        case 'CHANGE_SALARY_TYPE':
            return state = { ...state, salaryType: action.payload }
        case 'CHANGE_CHECK_STATE':
            return state = { ...state, isChecked: action.payload }
        case 'CHANGE_RADIO_STATE':
            return state = { ...state, radioChecked: action.payload }
        default:
            return state;
    }
}

export default reducer;