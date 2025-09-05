import { URL } from "../config/const";
import HttpServcice from "./httpService";


class EmployeeService extends HttpServcice {

      async fetchEmployee() {
            return this.sendRequest({
                  method: 'GET',
                  url: `${URL.EMPPLOYE_URL}`
            })
      }

      async fetcEmployeeById(id) {
            return this.sendRequest({
                  method: 'GET',
                  url: `${URL.EMPPLOYE_URL}/${id}`
            })
      }

      async createEmployee(employe) {
            return this.sendRequest({
                  method: 'POST',
                  url: `${URL.EMPPLOYE_URL}`,
                  data: employe
            })
      }

      async updateEmployeeById(id, employe) {
            return this.sendRequest({
                  method: 'PUT',
                  url: `${URL.EMPPLOYE_URL}/${id}`,
                  dataL: employe
            })
      }

      async deleteEmployee() {
            return this.sendRequest({
                  method: 'DELETE',
                  url: `${URL.EMPPLOYE_URL}/${id}`
            })
      }

}

const employeeService = new EmployeeService();

export default employeeService;