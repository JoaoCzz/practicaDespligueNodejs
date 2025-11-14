--create database practicadespliegue_mio;
--use practicadespliegue_mio;


CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    precio DECIMAL(10,2),
    stock INT
);

INSERT INTO productos (nombre, precio, stock) VALUES
('Iphone 13', 800.00, 10),              
('Samsung Galaxy S24', 1099.50, 5),     
('Xiaomi 14T Pro', 700.00, 25),         
('Realme 2.6"', 500.00, 8),             
('HP Gaming Laptop Victus 16"', 1500.00, 8),  
('Lenovo ThinkCentre M90s', 1200.00, 6),     
('Dell OptiPlex 7010', 1100.00, 4);      

CREATE TABLE usuarios (
  id int  AUTO_INCREMENT PRIMARY KEY,
  nombre varchar (50) NOT NULL,
  apellidos varchar (255) NOT NULL,
  dni char(9) unique NOT NULL,
  email varchar(255) NOT NULL,
  nombreUsuario varchar(50) NOT NULL unique,
  contrasena varchar(255) NOT NULL
)     
