# Toy Shop Inventory API — Assignment 3

This project is a **Node.js + Express** backend application developed for **Assignment 3**.  
It demonstrates the migration from a local JSON-based storage to a **MongoDB** database using **Mongoose** and provides a fully functional **CRUD API** with a simple frontend interface.

The application allows users to view and manage a toy inventory through RESTful API endpoints and a basic web interface.

---

## Project Objectives

- Learn how to work with **MongoDB** using **Mongoose**
- Migrate data storage from a local JSON file to a database
- Implement full **CRUD** functionality
- Validate incoming data on POST and PUT requests
- Use proper **HTTP status codes**
- Build a simple **full-stack** application with backend and frontend
- Follow clean backend project organization

---

## Project Structure

```text
assignment3/
│
├─ models/
│   └─ Product.js        # Mongoose schema for the Product entity
│
├─ routes/
│   └─ products.js       # API routes for CRUD operations
│
├─ public/               # Static frontend files
│   ├─ index.html
│   ├─ script.js
│   └─ style.css
│
├─ .env                  # Environment variables
├─ .gitignore
├─ package.json          # Project metadata and dependencies
├─ server.js             # Main Express server file
└─ README.md
Technologies Used
Node.js

Express.js

MongoDB

Mongoose

dotenv

HTML / CSS / JavaScript

Required Dependencies
System Requirements
Node.js (v18 or higher recommended)

npm

MongoDB

MongoDB Atlas (cloud) or

Local MongoDB installation

Node.js Packages
Install all required packages using:

bash
Copy code
npm install express mongoose dotenv
express — backend server and routing

mongoose — MongoDB connection and schema modeling

dotenv — secure environment variable management

Environment Variables
Create a .env file in the root directory of the project:

env
Copy code
PORT=3000
MONGO_URI=your_mongodb_connection_string
PORT — server port

MONGO_URI — MongoDB connection string

Environment variables are loaded securely using the dotenv package.

How to Run the Project
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
node server.js
Open the website in your browser:

arduino
Copy code
http://localhost:3000
The frontend is served automatically from the public folder.

API Documentation
Product API Endpoints
Method	Endpoint	Description
POST	/products	Create a new toy
GET	/products	Get all toys
GET	/products/:id	Get a toy by ID
PUT	/products/:id	Update a toy
DELETE	/products/:id	Delete a toy

Product Schema
Each product includes the following fields:

name (String, required)

price (Number, required)

category (String, required)

createdAt (Timestamp)

updatedAt (Timestamp)

All required fields are validated before saving to the database.

Frontend
Served from the public folder

Simple and user-friendly interface

Allows users to:

View the list of toys

Add new toys

Key Design Decisions
MongoDB is used instead of a JSON file for data persistence

Mongoose schemas enforce validation rules

RESTful API structure is used

Environment variables protect sensitive data

Express static middleware serves frontend files

Clear separation between routes, models, and server logic

Testing
Manual Testing
All API endpoints were tested using Postman

Web Interface
Available at:

arduino
Copy code
http://localhost:3000
Assignment Notes
This project fulfills all Assignment 3 requirements:

Migration from JSON to MongoDB

Fully working CRUD API

Proper validation and error handling

Use of correct HTTP status codes

Simple full-stack implementation

Author
Student: Tutkyshbaeva Dana
