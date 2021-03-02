INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES
    ('Mark', 'Peterson', 1, 1),
    ('Kathryn', 'Peterson', 2, 1),
    ('Tyler', 'Peterson', 3, 1),
    ('Madalyn', 'Peterson', 3, 1),
    ('Maggie', 'Peterson', 4, 2),
    ('Zoey', 'Peterson', 4, 2);

INSERT INTO role (title, salary, department_id)
VALUES
    ('Manager', $50000, 1),
    ('Employee', $40000, 2),
    ('Dog', $10000, 3);

INSERT INTO departments (name)
VALUES
    ('Web Development'),
    ('Behavorial Care'),
    ('Treats'),
    ('Education'),
    ('Warehouse');

