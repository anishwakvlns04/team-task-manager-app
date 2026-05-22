# Team Task Manager

A modern full-stack Team Task Manager web application built using Spring Boot, React, MySQL, and Tailwind CSS.

The application allows teams to manage projects, assign tasks, track task progress, and monitor project activities through a responsive dashboard with role-based access.

---

# Features

## Authentication
- User Signup
- User Login
- Session Persistence
- Role-Based Access (Admin / Member)

## Project Management
- Create Projects
- View All Projects
- Organize Tasks by Project

## Task Management
- Create Tasks
- Assign Tasks to Team Members
- Update Task Status
- Overdue Task Detection

## Dashboard
- Total Projects Count
- Total Tasks Count
- Completed Tasks Tracking
- In Progress Tasks Tracking
- Responsive Dashboard Analytics

## UI Features
- Modern Tailwind CSS UI
- Responsive Design
- Interactive Dashboard Cards
- Clean Navigation Interface

---

# Tech Stack

## Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

## Backend
- Spring Boot
- Spring Data JPA
- Spring Security
- REST APIs

## Database
- MySQL

## Deployment
- Railway

---

# Project Structure

```bash
team-task-manager/
│
├── backend/
│   ├── src/main/java/com/taskmanager/backend/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── entity/
│   │   ├── dto/
│   │   ├── security/
│   │   └── BackendApplication.java
│   │
│   └── src/main/resources/
│       └── application.properties
│
├── public/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.js
│   └── index.js
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

# API Endpoints

## Authentication
- POST `/auth/signup`
- POST `/auth/login`

## Projects
- GET `/projects`
- POST `/projects`

## Tasks
- GET `/tasks`
- POST `/tasks`
- PUT `/tasks/{id}`

---

# Role-Based Access

## Admin
- Create Projects
- Create Tasks
- View Dashboard
- Update Task Status

## Member
- View Dashboard
- Update Task Status

---

# Screenshots

## Dashboard Features
- Project statistics
- Task analytics
- Status tracking
- Overdue task alerts

---

# Live Deployment

## Application URL

```bash
https://team-task-manager-production-2a41.up.railway.app
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/anishwakvlns04/team-task-manager.git
```

---

# Frontend Setup

```bash
npm install
npm start
```

Frontend runs on:
```bash
http://localhost:3000
```

---

# Backend Setup

```bash
cd backend
./mvnw spring-boot:run
```

Backend runs on:
```bash
http://localhost:8080
```

---

# Environment Variables

## Backend

```properties
SPRING_DATASOURCE_URL=
SPRING_DATASOURCE_USERNAME=
SPRING_DATASOURCE_PASSWORD=
```

---

# Deployment

The application is deployed using Railway.

## Services Deployed
- Frontend
- Backend
- MySQL Database

---

# Future Enhancements

- Task Priority Levels
- Search & Filters
- Charts & Analytics
- Notifications
- Dark Mode
- Team Collaboration Features

---

# Author

## Anishwa Kasichainula


