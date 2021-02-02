export const changeRadioState = (radioChecked: boolean) => {
    return {
        type: 'CHANGE_RADIO_STATE',
        payload: radioChecked,
    }
}; 
