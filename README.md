# Team Task Manager

A full-stack Team Task Manager web application built using React, Spring Boot, and MySQL. The application helps teams manage projects, assign tasks, track progress, and monitor task status efficiently through a clean and responsive interface.

---

## Features

### Authentication
- User Signup
- User Login

### Project Management
- Create Projects
- View All Projects

### Task Management
- Create Tasks
- Assign Tasks
- Update Task Status
- Overdue Task Detection

### Dashboard
- Project statistics
- Task analytics
- Status tracking
- Overdue alerts

---

## Tech Stack

### Frontend
- React.js
- Axios
- Tailwind CSS

### Backend
- Spring Boot
- Spring Security
- Spring Data JPA

### Database
- MySQL

### Deployment
- Railway

---

## Folder Structure

```plaintext
team-task-manager/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── tailwind.config.js
│   └── ...
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   ├── mvnw
│   └── ...
│
└── README.md
```

---

## Frontend Setup

### Navigate to frontend folder

```bash
cd frontend
```

### Install dependencies

```bash
npm install
```

### Start frontend

```bash
npm start
```

Frontend will run on:

```plaintext
http://localhost:3000
```

---

## Backend Setup

### Navigate to backend folder

```bash
cd backend
```

### Configure Database

Open:

```plaintext
src/main/resources/application.properties
```

Add the following configuration:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/taskmanager

spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update

spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

spring.jpa.show-sql=true
```

Replace:

```plaintext
YOUR_PASSWORD
```

with your MySQL password.

---

## Create MySQL Database

Run the following query in MySQL:

```sql
CREATE DATABASE taskmanager;
```

---

## Run Backend

Run:

```plaintext
BackendApplication.java
```

Backend will run on:

```plaintext
http://localhost:8080
```

---

## API Endpoints

### Authentication

#### Signup

```http
POST /auth/signup
```

#### Login

```http
POST /auth/login
```

---

### Projects

#### Get Projects

```http
GET /projects
```

#### Create Project

```http
POST /projects
```

---

### Tasks

#### Get Tasks

```http
GET /tasks
```

#### Create Task

```http
POST /tasks
```

#### Update Task Status

```http
PUT /tasks/{id}
```

---

## Deployment

The application is deployed using Railway.
URL : https://team-task-manager-app-production-ae41.up.railway.app/create-project

### Frontend Deployment
- Root Directory: `frontend`

### Backend Deployment
- Root Directory: `backend`

---



## Author

### Anishwa Kasichainula
