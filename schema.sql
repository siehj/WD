CREATE DATABASE WDdatabase;

USE WDdatabase;

CREATE TABLE contacts (
  id int NOT NULL AUTO_INCREMENT,
  Name varchar(100), 
  Company varchar(100),
  Phone varchar(12),
  Email varchar(100)
  PRIMARY KEY (ID)
);

CREATE TABLE companyType (
  id int NOT NULL AUTO_INCREMENT,
  Name text,
  PRIMARY KEY (ID)
)
ALTER TABLE 'contacts' ADD FOREIGN KEY (type_id) REFERENCES 'companyType' ('id');

CREATE TABLE employees (
  id int NOT NULL AUTO_INCREMENT,
  Name varchar(100), 
  Username varchar(100),
  Password varchar(100),
  Position int,
  Admin BOOLEAN,
  PRIMARY KEY (ID)
)

CREATE TABLE positions (
  id int NOT NULL AUTO_INCREMENT,
  position varchar(100)
  PRIMARY KEY (ID)
)

CREATE TABLE tasks (
  id int NOT NULL AUTO_INCREMENT,
  task text, 
  note varchar(200), 
  completed Boolean,
  created datetime,
  deadline datetime,
  priority int,
  PRIMARY KEY (ID)
)

ALTER TABLE 'tasks' ADD FOREIGN KEY (employee_id) REFERENCES 'employees' ('id');