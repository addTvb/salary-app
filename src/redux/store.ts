import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    salary: 40000,
    boxVisible: true,
    salaryType: '',
    isChecked: true,
    radioChecked: 'monthPay'
};
const store = createStore(reducer, initialState);

export default store;