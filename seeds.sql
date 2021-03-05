-- INSERT INTO employees ( first_name, last_name, manager_name, role_id )
-- VALUES
--     ('Mark', 'Peterson', 'Waylon Smithers', 2),
--     ('Kathryn', 'Peterson', 'Carl Carlson', 1),
--     ('Tyler', 'Peterson', 'Lenny Leonard', 2),
--     ('Madalyn', 'Peterson', 'Kent Brockman', 2),
--     ('Maggie', 'Peterson', 'Waylon Smithers', 3),
--     ('Zoey', 'Peterson', 'Waylon Smithers', 3);

-- INSERT INTO role (title, salary, departments_name, departments_id)
-- VALUES
--     ('Manager', 50000, 'Behavorial Care', 4),
--     ('Employee', 40000, 'Web Development',  5),
--     ('Dog', 10000, 'Treats', 6),
--     ('Logistics', 30000, 'Warehouse', 7),
--     ('Student', 10000, 'Education', 8);

-- INSERT INTO departments (departments_name)
-- VALUES
--     ('Web Development'),
--     ('Behavorial Care'),
--     ('Treats'),
--     ('Education'),
--     ('Warehouse');


INSERT INTO employees ( first_name, last_name, role_id )
VALUES
    ('Mark', 'Peterson',  2),
    ('Kathryn', 'Peterson' , 1),
    ('Tyler', 'Peterson' , 2),
    ('Madalyn', 'Peterson' , 2),
    ('Maggie', 'Peterson',  3),
    ('Zoey', 'Peterson',  3);

INSERT INTO role (title, departments_name, salary, manager_name, departments_id)
VALUES
    ('Manager','Behavorial Care',50000, 'Carl Carlson' , 4),
    ('Employee','Web Development',40000, 'Waylon Smithers', 5),
    ('Dog','Treats',  10000, 'Santas Little Helper', 6),
    ('Logistics','Warehouse', 30000,'Lenny Leonard', 7),
    ('Student', 'Education',  10000, 'Kent Brockman', 8);

INSERT INTO departments (departments_name)
VALUES
    ('Web Development'),
    ('Behavorial Care'),
    ('Treats'),
    ('Education'),
    ('Warehouse');

   