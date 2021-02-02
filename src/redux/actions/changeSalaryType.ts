export const changeSalaryType = (salaryType: string) => {
    return {
        type: 'CHANGE_SALARY_TYPE',
        payload: salaryType,
    }
}; 
