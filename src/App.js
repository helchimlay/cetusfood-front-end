import './App.css';
import NavBar from './components/NavBar/NavBar';
import AdminPnl from './components/AdminPnl/AdminPnl';
import HomeContent from './components/HomeContent/HomeContent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderPnl from './components/OrderPnl/OrderPnl';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<HomeContent />} exact={true} />
          <Route path='/order' element={<OrderPnl />} />
          <Route path='/admin-panel' element={<AdminPnl />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;