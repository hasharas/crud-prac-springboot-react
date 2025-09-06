
package com.crud.mytest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.mytest.entity.Employee;
import com.crud.mytest.repository.EmployeeRepository;

@Service
public class EmployeeService {

      @Autowired
      public EmployeeRepository employeeRepository;

      public Employee createEmployee(Employee employee) {
            return employeeRepository.save(employee);
      }

      public List<Employee> getAllEmployees() {
            return employeeRepository.findAll();
      }

}