import axios from 'axios'

//const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:9090/api/v1/employees';

//const sam_url= 'http://localhost:8080/currency/';
const get='http://localhost:8080/currency/All/'

class EmployeeService{

    // getAllEmployees(){
    //     return axios.get(EMPLOYEE_BASE_REST_API_URL)
    // }

    getAllEmployees(){
        return axios.get(get)
    }

    // createEmployee(employee){
    //     return axios.post(sam_url)
    // }

    getEmployeeById(employeeId){
       // return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
        return axios.put(get + '/' + employeeId);
    }

    // updateEmployee(employeeId, employee){
    //     //return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' +employeeId, employee);
    //     return axios.put(sam_url + '/' +employeeId, employee);
    // }

    // deleteEmployee(employeeId){
    //     return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    // }
}

export default new EmployeeService();