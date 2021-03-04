INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Mark', 'Peterson', 1, 1),
    ('Kathryn', 'Peterson', 2, 1),
    ('Tyler', 'Peterson', 3, 1),
    ('Madalyn', 'Peterson', 3, 1),
    ('Maggie', 'Peterson', 2, 2),
    ('Zoey', 'Peterson', 3, 3);

INSERT INTO role (title, salary, departments_id)
VALUES
    ('Manager', 50000, 1),
    ('Employee', 40000, 2),
    ('Dog', 10000, 3);

INSERT INTO departments (departments_name)
VALUES
    ('Web Development'),
    ('Behavorial Care'),
    ('Treats'),
    ('Education'),
    ('Warehouse');

INSERT INTO managers (manager_name, manager_id)
VALUES
    ('Dave Jones', 1),
    ('Mark Bogani', 2),
    ('Lee Galperin', 3);