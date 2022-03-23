
INSERT INTO department (name)
VALUES
 ('Engineering'),
 ('Sales'),
 ('Legal'),
 ('Fiance');

 INSERT INTO role (title, salary, department_id)
 VALUES
('Software developer', 95000, 1),
('Lawyer', 100000, 3),
('Lead Engineer', 200000, 1),
('Accountant', 100000,4),
('Salesperson', 90000, 2);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
('Fischoeder', 'Calvin', 3, null),
('Belcher' , 'Bob' , 1, 1),
('Belcher' , 'Linda', 5, null),
('Belcher', 'Tina', 2, null),
('Belcher', 'Gene', 1, 1),
('Belcher', 'Louise', 4, null);

