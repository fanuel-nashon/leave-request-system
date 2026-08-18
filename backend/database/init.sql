CREATE TABLE IF NOT EXISTS roles(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
);

CREATE TABLE IF NOT EXISTS privileges(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS role_privileges(
    role_id INT,
    privilege_id INT,
    PRIMARY KEY(role_id, privilege_id),
    FOREIGN KEY (role_id) REFERENCES role(id)
    FOREIGN KEY (privilege_id)  REFERENCES privileges(id)
);

CREATE TABLE employees(
    id INT PRIMARY KEY AUTO_INCEREMENT,
    fname VARCHAR(255) NOT NULL,
    mname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
)

CREATE TABLE IF NOT EXISTS users(
    id INT PRIMARY KEY AUTO_INCEREMENT,
)




