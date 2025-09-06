package com.crud.mytest.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "employee")
@AllArgsConstructor
@NoArgsConstructor
public class Employee {

      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      public Long id;

      @Column(nullable = false)
      public String name;

      @Column(nullable = false, unique = true)
      public String email;

      public String department;

}