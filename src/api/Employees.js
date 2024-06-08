import request from '@/utils/request.js'
import { url } from '@/api/url'

export const Employees = {
  add(employeeInfo) {
    return request.post(
      url.Employee.add,
      employeeInfo
    )
  },
  list() {
    return request.get(url.Employee.list)
  },
  query(pageQuery) {
    return request({
      url: url.Employee.query,
      method: 'get',
      params: pageQuery
    })
  },
  modification(employeeInfo) {
    return request.post(
      url.Employee.modification,
      employeeInfo
    )
  }
}
