export const changeSalary = (salary: number) => {
    return {
        type: 'CHANGE_SALARY',
        payload: salary,
    }
}; 
