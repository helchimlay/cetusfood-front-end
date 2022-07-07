import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderPanel from './components/OrderPanel/OrderPanel';
import LogIn from './components/LogIn/LogIn';
import AdminPanel from './components/AdminPanel/AdminPanel';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import RestList from './components/AdminPanel/RestList/RestList';
import NewRestForm from './components/AdminPanel/RestList/NewRestForm/NewRestForm';
import AdminPanelStart from './components/AdminPanel/RestList/AdminPanelStart';
import NotFound404 from './components/NotFound404/NotFound404';
<<<<<<< HEAD
import { HelmetProvider } from "react-helmet-async"; 
=======
import Popup from './components/popup/popup';
import EditRestForm from './components/AdminPanel/RestList/EditRestForm/EditRestForm';
import { Helmet, HelmetProvider } from "react-helmet-async";
>>>>>>> 2c8bd5a19d5cf664801c466f8833a6a3a6901d91

function App() {
  return (
    <HelmetProvider>
      <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/order' element={<OrderPanel />} />
          <Route path='/log-in' element={<LogIn />} />
          <Route path='/admin-panel' element={<AdminPanel />}>
            <Route path='restaurants' element={<RestList />} />
            <Route path='restaurants/add-new' element={<NewRestForm />} />
            <Route path='restaurants/edit/:id' element={<EditRestForm />} />
            <Route path='users' element={<h3 className="title">Lista użytkowników</h3>} />
            <Route path='' element={<AdminPanelStart />} />
          </Route>
          <Route exact path='*' element={<NotFound404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
    
  );
}

export default App;
