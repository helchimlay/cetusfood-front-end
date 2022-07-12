import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import OrderPanel from "./components/OrderPanel/OrderPanel";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import RestList from "./components/AdminPanel/RestList/RestList";
import NewRestForm from "./components/AdminPanel/RestList/NewRestForm/NewRestForm";
import AdminPanelStart from "./components/AdminPanel/RestList/AdminPanelStart";
import NotFound404 from "./components/NotFound404/NotFound404";
import EditRestForm from "./components/AdminPanel/RestList/EditRestForm/EditRestForm";
import { HelmetProvider } from "react-helmet-async";
import React from "react";

export const GlobalCtx = React.createContext();

function App() {
  const [user, setUser] = React.useState({ loggedIn: false, role: null, accessToken: null });

  console.log(user)

  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <GlobalCtx.Provider value={{
            user, setUser
          }}>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} exact />
              {user.loggedIn && <Route path="/order" element={<OrderPanel />} />}
              <Route path="/log-in" element={<LogIn />} />
              <Route path="/register" element={<Register />} />
              {user.role==='admin' && (
                <Route path="/admin-panel" element={<AdminPanel />}>
                <Route path="restaurants" element={<RestList />} />
                <Route path="restaurants/add-new" element={<NewRestForm />} />
                <Route path="restaurants/edit/:id" element={<EditRestForm />} />
                <Route
                  path="users"
                  element={<h3 className="title">Lista użytkowników</h3>}
                />
                <Route path="" element={<AdminPanelStart />} />
              </Route>
              )}
              <Route exact path="*" element={<NotFound404 />} />
            </Routes>
            <Footer />
          </GlobalCtx.Provider>
          {/* <Popup show={false}/> */}
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
