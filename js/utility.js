// const stringifyDate = (date) =>{
//     const options = {day:'numeric',month:'short',year:'numeric'};
//     const newDate = !date ? "undefined" :
//     new Date (Date.parse(date)).toLocaleDateString('en-IN',options);
//     return newDate;
// }


const formatDate = (date) => {
    let startDate = new Date(date);
    const options = {
        year: 'numeric', month: 'long', day: 'numeric'
    };
    const empDate = !startDate ? "undefined" : startDate.toLocaleDateString("en-IN", options);
    return empDate;
} 

// const update = (node) => {
//     let employeePayrollData = employeePayrollList.find(empDate=>empDate._id == node.id)
//     if (!employeePayrollData) return;
//     localStorage.setItem('editeEmp',JSON.stringify(employeePayrollData))
//     window.location.replace(site_properties.add_emp_payroll_page);
// }