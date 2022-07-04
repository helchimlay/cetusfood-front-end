import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderPanel from './components/OrderPanel/OrderPanel';
import LogIn from './components/LogIn/LogIn';
import AdminPanel from './components/AdminPanel/AdminPanel';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import RestList from './components/AdminPanel/RestList/RestList';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/order' element={<OrderPanel />} />
          <Route path='/log-in' element={<LogIn />} />
          <Route path='/admin-panel' element={<AdminPanel />}>
            <Route path='restaurants' element={<>
              <h3 className="title">Lista restauracji</h3>
              <RestList />
            </>} />
            <Route path='users' element={<>
              <h3 className="title">Lista użytkowników</h3>
              {/* <RestList /> */}
            </>} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
