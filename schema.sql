DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
-- DROP TABLE IF EXISTS departments;
-- DROP TABLE IF EXISTS role;
-- DROP TABLE IF EXISTS employees;
-- DROP TABLE IF EXISTS managers;


USE company_db;


CREATE TABLE departments(
    id INTEGER AUTO_INCREMENT NOT NULL,
    departments_name VARCHAR(30) NOT NULL,
   
    PRIMARY KEY(id)
);

CREATE TABLE role(
    id INTEGER AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    departments_id INTEGER UNSIGNED NOT NULL,
    PRIMARY KEY (id)
   
);

CREATE TABLE employees(
    id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    FOREIGN KEY (role_id) REFERENCES departments(id),
    manager_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
   
);

