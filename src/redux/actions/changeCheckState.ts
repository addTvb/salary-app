export const changeCheckState = (isChecked: boolean) => {
    return {
        type: 'CHANGE_CHECK_STATE',
        payload: isChecked,
    }
}; 
