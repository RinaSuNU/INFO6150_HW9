import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import JobLists from './pages/JobLists'
import Contact from './pages/Contact'
import Companies from './pages/Companies'
import Login from './pages/Login'
import Layout from './components/Layout'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobLists" element={<JobLists />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/contact" element={<Contact />} />
        </Route>


        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
