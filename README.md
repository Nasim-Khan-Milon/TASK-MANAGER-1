# Task Manager API (In-Memory)
A lightweight and beginner-friendly **Task Manager REST API** built with **Node.js and Express**.  
This project demonstrates core backend concepts like **routing, MVC structure, CRUD operations, filtering, and searching**, using an **in-memory data store** (no database).


## Features
- Create, Read, Update, Delete Tasks (CRUD)
- Search tasks by title or description
- Filter tasks by status
- Status management:
  - `Pending`
  - `Ongoing`
  - `Complete`
- Fast in-memory data handling (no DB required)
- Clean MVC architecture (Model, Controller, Routes)

## Project Structure
```
TASK-MANAGER-2/
│
├── models/
│   └── taskModeldb.js
│
├── controllers/
│   ├── taskController.js
│
├── routes/
│   ├── taskRoutes.js
│
├── .env
├── server.js
├── package.json
```


## Tech Stack

- **Backend:** Node.js  
- **Framework:** Express.js  
- **Data Storage:** In-memory (Array)  
- **Tools:** Nodemon (for development)


## How to Run This Project

### 1. Clone the project

```
git clone https://github.com/Nasim-Khan-Milon/TASK-MANAGER-1.git
cd TASK-MANAGER-1
```

---

### 2. Install dependencies

```
npm install
```

### 5. Start server

```
node server.js
```

Server will run at:

```
http://localhost:3000
```


## API Overview

### Tasks

* `POST /tasks` → create task  
* `GET /tasks` → get all tasks  
* `GET /tasks/:id` → get single task  
* `PUT /tasks/:id` → update task  
* `DELETE /tasks/:id` → delete task  
* `GET /tasks/search?q=keyword` → search tasks (title/description)  
* `GET /tasks/filter/:status` → filter tasks by status (Pending/Ongoing/Complete)

## Testing
You can test all APIs using Postman.


## Possible Improvements
* Add database (MySQL )
* Add authentication (JWT)
* Add due dates & reminders
* Build frontend (React)
* Deployment with Docker


## Author
MD. NASIM KHAN MILON


## Note
This project is created for learning purposes and backend practice.
