import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderPanel from './components/OrderPanel/OrderPanel';
import LogIn from './components/LogIn/LogIn';
import AdminPanel from './components/AdminPanel/AdminPanel';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import RestList from './components/AdminPanel/RestList/RestList';
import NotFound404 from './components/NotFound404/NotFound404';
import React from 'react';
import AdminPanelStart from './components/AdminPanel/RestList/AdminPanelStart';
import NewRestForm from './components/AdminPanel/RestList/NewRestForm/NewRestForm';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/order' element={<OrderPanel />} />
          <Route path='/log-in' element={<LogIn />} />
          <Route path='/admin-panel' element={<AdminPanel />}>
            <Route path='restaurants' element={<RestList />} />
            <Route path='restaurants/add-new' element={<NewRestForm />} />
            <Route path='users' element={<h3 className="title">Lista użytkowników</h3>} />
            <Route path='' element={<>
              <h3 className="title">Start</h3>
              <AdminPanelStart />
            </>} />
          </Route>
          <Route exact path='*' element={<NotFound404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
