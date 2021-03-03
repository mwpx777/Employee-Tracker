DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
-- DROP TABLE IF EXISTS departments;
-- DROP TABLE IF EXISTS role;
-- DROP TABLE IF EXISTS employees;


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
    -- FOREIGN KEY (departments_id) REFERENCES departments(id)
);

CREATE TABLE employees(
    id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER UNSIGNED NOT NULL,
    manager_id INTEGER UNSIGNED,
    PRIMARY KEY (id)
    -- FOREIGN KEY (role_id) REFERENCES role(id)
    -- FOREIGN KEY (manager_id) REFERENCES managers(managers_id)
);

CREATE TABLE managers(
    id INTEGER AUTO_INCREMENT NOT NULL,
    manager_name VARCHAR(30) NOT NULL,
    manager_id INTEGER UNSIGNED,
    PRIMARY KEY (id)
    -- FOREIGN KEY (manager_name) REFERENCES employees(manager_id),
    -- FOREIGN KEY (manager_id) REFERENCES employees(id)
);