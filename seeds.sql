INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Mark', 'Peterson', 2, 1),
    ('Kathryn', 'Peterson', 1, 2),
    ('Tyler', 'Peterson', 2, 3),
    ('Madalyn', 'Peterson', 2, 4),
    ('Maggie', 'Peterson', 3, 2),
    ('Zoey', 'Peterson', 3, 2);

INSERT INTO role (title, salary, departments_id)
VALUES
    ('Manager', 50000, 1),
    ('Employee', 40000, 2),
    ('Dog', 10000, 3);

INSERT INTO departments (departments_name, department_id)
VALUES
    ('Web Development', 1),
    ('Behavorial Care', 2),
    ('Treats', 3),
    ('Education', 4),
    ('Warehouse', 5);

INSERT INTO managers (manager_name, department_id)
VALUES
    ('Lenny Lenord', 1),
    ('Carl Carlson', 2 ),
    ('Kent Brockman', 3),
    ('Waylon Smithers', 4);
    