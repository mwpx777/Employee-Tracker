INSERT INTO employees ( first_name, last_name, role_id, manager_name)
VALUES
    ('Mark', 'Peterson', 2, 'Waylon Smithers'),
    ('Kathryn', 'Peterson', 1, 'Carl Carlson'),
    ('Tyler', 'Peterson', 2, 'Lenny Leonard'),
    ('Madalyn', 'Peterson', 2, 'Kent Brockman'),
    ('Maggie', 'Peterson', 3, 'Waylon Smithers'),
    ('Zoey', 'Peterson', 3, 'Waylon Smithers');

INSERT INTO role (title, salary, departments_id)
VALUES
    ('Manager', 50000, 4),
    ('Employee', 40000, 5),
    ('Dog', 10000, 6);

INSERT INTO departments (departments_name)
VALUES
    ('Web Development'),
    ('Behavorial Care'),
    ('Treats'),
    ('Education'),
    ('Warehouse');


    