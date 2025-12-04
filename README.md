# ✨ Todo App – REST API (Node.js + Express + MongoDB)

A simple and secure **User & Todo Management API** built using:

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **MVC Architecture**

This project includes complete CRUD for todos, user authentication, pagination, error handling, and Postman documentation.

---

## 🚀 Features

### 🔐 User Module
- Register new users  
- Login with email & password  
- JWT-based authentication  
- Get logged-in user profile  

### 📝 Todo Module
- Create todo  
- List todos (with pagination)  
- Update todo status (pending/completed)  
- Delete todo  
- Each todo belongs to the logged-in user  

### 🧰 Bonus Features
- Error handling middleware  
- Rate limiting for auth routes  
- Environment variables using `.env`  
- Clean MVC folder structure  

---

## 📂 Project Structure

```
TodoApp/
│── config/
│── controllers/
│── middleware/
│── models/
│── routes/
│── utils/
│── screenshots/
│── .gitignore
│── .env.example
│── server.js
│── package.json
│── README.md
```

---

## 🔧 Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Rohit777-7/TodoApp.git
cd TodoApp
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Configure environment variables  
Create a `.env` file using the example below:

```
PORT=5000
MONGO_URI=your_mongodb_url_here
JWT_SECRET=your_secret_here
JWT_EXPIRES_IN=7d
```

### 4️⃣ Start the server
```bash
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

## 🛠 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/auth/register` | Register user |
| POST   | `/api/auth/login` | Login user |
| GET    | `/api/user/profile` | Get user profile (protected) |

---

### 📝 Todo Routes (Protected)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/todos` | Create todo |
| GET    | `/api/todos` | List todos |
| PATCH  | `/api/todos/:id` | Update todo status |
| DELETE | `/api/todos/:id` | Delete todo |

---

## 🔑 Authentication

Send JWT token in headers:

```
Authorization: Bearer <your_token>
```

---

## 📸 API Screenshots (Postman)

### 1️⃣ Register User
![Register](./screenshots/register.png)

### 2️⃣ Login User
![Login](./screenshots/login.png)

### 3️⃣ Get Profile
![Profile](./screenshots/profile.png)

### 4️⃣ Create Todo
![Create Todo](./screenshots/create_todo.png)

### 5️⃣ List Todos
![List Todos](./screenshots/list_todos.png)

### 6️⃣ Update Todo
![Update Todo](./screenshots/update_todo.png)

### 7️⃣ Delete Todo
![Delete Todo](./screenshots/delete_todo.png)

---

## 📦 Postman Collection
A Postman collection is included in the project root.  
You can import it directly into Postman for testing.

---

## 👨‍💻 Author

**Rohit Yadav**  
Assignment Project  
