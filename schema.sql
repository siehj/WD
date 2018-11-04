-- CREATE DATABASE WDdatabase;

USE WDdb;

DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS contacts;
DROP TABLE IF EXISTS companyType;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS positions;

CREATE TABLE positions (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  position varchar(100)
);


CREATE TABLE employees (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(100), 
  username varchar(100),
  password varchar(100),
  admin_status BOOLEAN,
  position_id int,
  FOREIGN KEY (position_id) REFERENCES positions(id)
);


CREATE TABLE tasks (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  task text, 
  note varchar(200), 
  completed BOOLEAN,
  created datetime,
  deadline datetime,
  priority int,
  employee_id int,
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);


CREATE TABLE companyType (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Name text
);


CREATE TABLE contacts (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(100), 
  company varchar(100),
  phone varchar(12),
  email varchar(100),
  type_id int,
  FOREIGN KEY (type_id) REFERENCES companyType(id)
);



