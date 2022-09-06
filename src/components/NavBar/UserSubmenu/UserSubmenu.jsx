import { React, useState, useContext, useEffect, useRef } from "react"
import "./UserSubmenu.scss"
import { GlobalCtx } from "../../../App"
import { logOutUser } from "../../../services/Auth"
import { useNavigate } from "react-router-dom"

const UserSubmenu = () => {
  const navigate = useNavigate()
  const { user, setUser } = useContext(GlobalCtx)
  const [submenuOn, setSubmenuOn] = useState(false)

  const submenuBtnRef = useRef()

  const handleLogOutBtn = () => {
    logOutUser()
    localStorage.removeItem("accessToken")
    setUser({
      loggedIn: false,
      role: null,
      accessToken: null,
    })
    navigate("/log-in")
  }

  useEffect(() => {
    const handleCloseDropdown = (e) => {
      console.log(e)

      if (
        e.path[1] !== submenuBtnRef.current &&
        e.path[0] !== submenuBtnRef.current
      ) {
        setSubmenuOn(false)
      }
    }

    document.body.addEventListener("click", handleCloseDropdown)

    return () => document.body.removeEventListener("click", handleCloseDropdown)
  }, [])

  return (
    <div className="UserSubmenu">
      <button
        ref={submenuBtnRef}
        className="main-btn"
        onClick={() => setSubmenuOn((prev) => !prev)}
      >
        <i ref={submenuBtnRef} className="bx bxs-user"></i>
      </button>
      {submenuOn && (
        <div className="submenu">
          <h3>Jesteś zalogowany</h3>
          <p>Typ konta: {user.role}</p>
          <button onClick={handleLogOutBtn} className="log-out">
            Wyloguj się
          </button>
        </div>
      )}
    </div>
  )
}

export default UserSubmenu
