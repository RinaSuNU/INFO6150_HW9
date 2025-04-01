# INFO6150_HW9_Job Portal Website Design
A full-stack job portal website with user authentication, company listings, and job postings.
### Project Setup
#### Prerequisites
<pre>Node.js (v16+)
MongoDB (v4.4+)
npm (v8+)</pre>
#### Installation
<pre>Backend Setup:
>cd backend
>npm install
>ps aux | grep mongod //Check if mongoDB is running
>node server.js</pre>
#### Frontend Setup
<pre>>cd frontend
>npm install
>npm run dev</pre>
#### Folder Structure
<pre>- Backend:
backend/
├── db/           
│   └── seed.js         # Database initialization
├── app/
│    ├── controllers/      # Controllers
│    ├── models/           # Mongoose models
│    └── routes/           # API routes
├── server.js         # Main application entry
└── swagger.js        # API documentation setup

- Frontend:
frontend/
vite-project/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components
│   ├── pages/        # Page components
│   ├── api/          # API services
├── App.jsx           # Main component
├── main.jsx          # Application entry
└── vite.config.js    # Vite configuration</pre>

#### Navigation
<pre>1. Authentication Flow:
Login Page (/login)
    - Implement session management using Axios for API requests
    - username&password authentication
    - Form validation
    - Error handling
2. Routes
    Company showcase (/companies)
3. Navigation Bar
    - Include a logout feature to securely end user sessions</pre>
#### Key functionalities
##### User Authentication
<pre>- Secure password hashing with bcrypt
- Axios-based authentication
- Session management</pre>

##### Web Content
<pre>- Job postings
- Company showcase: Images fetched from the backend
- Contact Info
- About</pre>

##### Web Design
<pre>1. Path design:
/ → default to /login page
/login → login page
/home → home page
/about → About Us
/jobLists → Job Lists
/companies → Company Information
/contact → Contact Us
* → 404 page (all unmatched paths)
2. Layout design:
The Login page is placed separately, while the other pages are wrapped by the Layout component, meaning that these pages will share a navigation bar
3. Material UI
Using Material UI in all pages
</pre>

#### API Documentation
<pre>The API is documented using Swagger UI. After starting the backend server, access the documentation at:
http://localhost:8000/api-docs</pre>
