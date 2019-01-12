
USE WDdb;

DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS contacts;
DROP TABLE IF EXISTS companyType;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS positions;

CREATE TABLE positions (
  id serial PRIMARY KEY,
  position VARCHAR(100)
);


CREATE TABLE employees (
  id serial PRIMARY KEY,
  name VARCHAR(100), 
  username VARCHAR(100),
  password VARCHAR(100),
  admin_status BOOLEAN,
  position_id INTEGER,
  FOREIGN KEY (position_id) REFERENCES positions(id)
);


CREATE TABLE tasks (
  id serial PRIMARY KEY,
  task text, 
  note VARCHAR(200), 
  completed BOOLEAN,
  created timestamp,
  deadline timestamp,
  priority INTEGER,
  employee_id INTEGER,
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);


CREATE TABLE companyType (
  id serial PRIMARY KEY,
  Name text
);


CREATE TABLE contacts (
  id serial PRIMARY KEY,
  name VARCHAR(100), 
  company VARCHAR(100),
  phone VARCHAR(12),
  email VARCHAR(100),
  type_id INTEGER,
  FOREIGN KEY (type_id) REFERENCES companyType(id)
);

CREATE TABLE completedTasks (
  id serial PRIMARY KEY,
  task text, 
  note VARCHAR(200), 
  completeDate timestamp,
  employee_id INTEGER,
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);

