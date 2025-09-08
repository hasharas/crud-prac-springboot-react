
package com.crud.mytest.service;

import java.lang.StackWalker.Option;
import java.util.List;
import java.util.Optional;

import javax.management.RuntimeErrorException;

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

      public Optional<Employee> getEmployeeById(Long id) {
            return employeeRepository.findById(id);
      }

      public Employee updateEmployeeById(Long id, Employee UpdateEmployeeById) {
            return employeeRepository.findById(id).map(emp -> {
                  emp.setName(UpdateEmployeeById.getName());
                  emp.setEmail(UpdateEmployeeById.getEmail());
                  emp.setDepartment(UpdateEmployeeById.getDepartment());
                  return employeeRepository.save(emp);
            }).orElseThrow(() -> new RuntimeException("Employee not found with id " + id));
      }

      public void deleteEmployee(Long id) {
            if (!employeeRepository.existsById(id)) {
                  throw new RuntimeException("Employe not found" + id);
            }
            employeeRepository.deleteById(id);
      }
}