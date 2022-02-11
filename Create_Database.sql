/* Database DBTest Creation */

USE master
GO

IF EXISTS(select * from sys.databases where name='DBTest')
	DROP DATABASE DBTest
GO

CREATE DATABASE DBTest
GO

USE DBTest
GO
 
/* Login Table Creation */

IF EXISTS (SELECT * FROM sys.tables WHERE name = 'Login')
	DROP TABLE dbo.Login
GO

CREATE TABLE dbo.Login (
	Login_ID int identity(100,1) not null,
	Login_Username varchar(max) null,
	Login_Password varchar(max) null
) 
GO

INSERT INTO dbo.Login 
VALUES 
	('admin','apple'),
	('user1','orangle'),
	('user2','mango'),
	('user3','blueberry'),
	('user4','tomato');
GO

SELECT * FROM dbo.Login
ORDER BY Login_ID ASC


/* Product Table Creation */
IF EXISTS (SELECT * FROM sys.tables WHERE name = 'Product')
	DROP TABLE dbo.Product
GO

CREATE TABLE dbo.Product(
	Product_ID		int identity(100,1) not null,
	Product_Name 	VARCHAR(50) NOT NULL,
	Product_Cat 	VARCHAR(50) NOT NULL,
	Product_Price	INT NOT NULL,
)
GO
	
INSERT INTO dbo.Product (Product_Name, Product_Cat, Product_Price)
VALUES 
	('milk1', 'milk', 10), 
	('milk2', 'milk', 20), 
	('milk3', 'milk', 30), 
	('candy1', 'candy', 40), 
	('candy1', 'candy', 50), 
	('candy1', 'candy', 60); 
GO

SELECT * FROM dbo.Product
ORDER BY Product_Cat ASC

	
/* Customer Table Creation */
IF EXISTS (SELECT * FROM sys.tables WHERE name = 'Customer')
	DROP TABLE dbo.Customeromer
GO

CREATE TABLE dbo.Customer(
	Customer_ID 			int identity(100,1) not null,
	Customer_FirstName 		VARCHAR(50) null,
	Customer_LastName 		VARCHAR(50) null,
	Customer_CardNumber		VARCHAR(25) null,
) 
GO

INSERT INTO dbo.Customer (Customer_FirstName, Customer_LastName, Customer_CardNumber)
VALUES 
	('Paul', 'Samuelson', 1111111111), 
	('Adam', 'Smith', 2222222222), 
	('Milton', 'Friedman', 3333333333), 
	('Gary', 'Becker', 4444444444), 
	('Daniel', 'Kahneman', 5555555555);
GO

SELECT * FROM dbo.Customer
ORDER BY Customer_ID ASC
