import React, { createContext, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AdminPnl from './components/AdminPnl/AdminPnl';
import HomeContent from './components/HomeContent/HomeContent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderPnl from './components/OrderPnl/OrderPnl';

export const MainCtx = createContext(null);

function App() {
  const [userIsAdmin, setUserIsAdmin] = useState(false);


  return (
    <Router>
      <MainCtx.Provider value={{
        userIsAdmin: userIsAdmin
      }}>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path='/' element={<HomeContent />} exact={true} />
            <Route path='/order' element={<OrderPnl />} />
            <Route path='/admin-panel' element={<AdminPnl />} />
          </Routes>
        </div>
      </MainCtx.Provider>
    </Router>
  );
}

export default App;