package com.crud.mytest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.mytest.entity.Employee;
import com.crud.mytest.service.EmployeeService;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

      @Autowired
      public EmployeeService employeeService;

      // create new employee
      @PostMapping
      public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
            Employee savedEmployee = employeeService.createEmployee(employee);
            return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
      }

      // Get employe all
      @GetMapping
      public ResponseEntity<List<Employee>> getAllEmployees() {
            List<Employee> employees = employeeService.getAllEmployees();
            return new ResponseEntity<>(employees, HttpStatus.OK);

      }

      {

      }
}
