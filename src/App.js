import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
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
import { getUserRole } from "./services/Auth";
import UsersList from "./components/AdminPanel/UsersList/UsersList";
import NewUserForm from "./components/AdminPanel/UsersList/Forms/NewUserForm";
import EditUserForm from "./components/AdminPanel/UsersList/Forms/EditUserForm";
import AcceptQueue from "./components/AdminPanel/AcceptQueue/AcceptQueue";
import EditMenuPnl from "./components/AdminPanel/RestList/EditMenuPnl/MenuPnl";
import VerifyEmail from "./components/VerifyEmail/VerifyEmail";
import Profile from "./components/Profile/Profile";

export const GlobalCtx = React.createContext();

function App() {
  const [user, setUser] = React.useState({
    loggedIn: false,
    role: null,
    accessToken: null,
  });
  React.useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      getUserRole(localStorage.getItem("accessToken")).then((res) =>
        setUser((prev) => ({
          ...prev,
          role: res.data,
          loggedIn: true,
          accessToken: localStorage.getItem("accessToken"),
        }))
      );
    }
   
  }, []);
  React.useEffect(() => {
    if (user.accessToken) {
      getUserRole(user.accessToken).then((res) =>
        setUser((prev) => ({ ...prev, role: res.data, loggedIn: true }))
      );
      localStorage.setItem("accessToken", user.accessToken);
    }
    
  }, [user.accessToken]);

  console.log(user);
  
 
  // var audio = new Audio(Music);
  // audio.play();
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <GlobalCtx.Provider
            value={{
              user,
              setUser,
            }}
          >
            <NavBar />
            <Routes>
             <Route path="/Profile" element={<Profile />} />
              <Route path="/" element={<HomePage />} exact />
              <Route path="/order" element={<OrderPanel />} />
              {!user.loggedIn && <Route path="/log-in" element={<LogIn />} />}
              {!user.loggedIn && <Route path="/register" element={<Register />} />}
              {user.role === "admin" && (
                <Route path="/admin-panel" element={<AdminPanel />}>

                    {/* restaurants */}
                  <Route path="restaurants" element={<RestList />} />
                  <Route path="restaurants/add-new" element={<NewRestForm />} />
                  <Route path="restaurants/edit/:id" element={<EditRestForm />} />
                  <Route path="restaurants/edit/:id/menu" element={<EditMenuPnl />} />

                    {/* users */}
                  <Route path="users" element={<UsersList />} />
                  <Route path="users/accept-queue" element={<AcceptQueue />} />
                  {/* <Route path="users/add-new" element={<NewUserForm />} /> */}
                  <Route path="users/edit/:id" element={<EditUserForm />} />
                  <Route path="" element={<AdminPanelStart />} />
                </Route>
              )}
              <Route path='/verify-email/:code' element={<VerifyEmail />} />
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
