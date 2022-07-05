import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderPanel from './components/OrderPanel/OrderPanel';
import LogIn from './components/LogIn/LogIn';
import AdminPanel from './components/AdminPanel/AdminPanel';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import Popup from './components/popup/popup';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/order' element={<OrderPanel />} />
          <Route path='/log-in' element={<LogIn />} />
          <Route path='/admin-panel' element={<AdminPanel />} />
        </Routes>
        <Footer />
        <Popup />
      </div>
    </Router>
  );
}

export default App;
