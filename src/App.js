import React, { createContext, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AdminPnl from './components/AdminPnl/AdminPnl';
import HomeContent from './components/HomeContent/HomeContent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderPnl from './components/OrderPnl/OrderPnl';
import LogIn from './components/LogIn/LogIn';

export const MainCtx = createContext(null);

function App() {
  const [userData, setUserData] = useState({loggedIn: false, admin: true})


  return (
    <Router>
      <MainCtx.Provider value={{
        userData: userData
      }}>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path='/' element={<HomeContent />} exact={true} />
            <Route path='/order' element={<OrderPnl />} />
            <Route path='/admin-panel' element={<AdminPnl />} />
            <Route path='/log-in' element={<LogIn />} />
          </Routes>
        </div>
      </MainCtx.Provider>
    </Router>
  );
}

export default App;