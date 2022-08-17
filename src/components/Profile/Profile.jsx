import './Profile.css';
const Profile = () => {

  return( 
    <div className="body">
            <div className="sideBar">
                <div className="logo_content">
                    <div className="logo">
                        <i className='bx bxl-postgresql'></i>
                        <div className="logo_name">
                            cetusfood
                        </div>
                    </div>
                    <i className='bx bx-menu' id="bnt"></i>
                </div>
                <ul className="nav_list">
                    <li>
                        <i className='bx bx-search-alt' ></i>
                        <input type="text" placeholder="wyszukaj"/>
                        {/* <span className="toolTip">daschbord</span> */}
                    </li>
                    <li>
                        <a href="#">
                        <i className='bx bx-grid-alt' ></i>
                        <span className="links_name">rozliczanie</span>
                        </a>
                        {/* <span className="toolTip">daschbord</span> */}
                    </li>
                    <li>
                        <a href="#">
                        <i className='bx bx-user' ></i>
                        <span className="links_name">twoje konto</span>
                        </a>
                        {/* <span className="toolTip">daschbord</span> */}
                    </li>

                    <li>
                        <a href="#">
                        <i className='bx bx-cart' ></i>
                        <span className="links_name">Składanie zamówień</span>
                        </a>
                        {/* <span className="toolTip">daschbord</span> */}
                    </li>
                    <li>
                        <a href="#">
                        <i className='bx bx-folder' ></i>
                        <span className="links_name">Historia zamówień</span>
                        </a>
                        {/* <span className="toolTip">daschbord</span> */}
                    </li>
                    <li>
                        <a href="#">
                        <i className='bx bx-heart'></i>
                        <span className="links_name">Proponuj</span>
                        </a>
                        {/* <span className="toolTip">daschbord</span> */}
                    </li>
                </ul>
                <div className="profile_content">
                    <div className="profile">
                        <div className="profile_detals">
                            <img src="" alt="" />
                            <div className="name_job">
                                <div className="name">nazwa użytkownika</div>
                                <div className="rang">urzytkownik</div>
                            </div>
                            <i className='bx bx-log-out' id="log_out"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  ) 
}

export default Profile;     
{/* <li>
<a href="#">
<i className='bx bx-chat' ></i>
<span className="links_name">chat</span>
</a>
<span className="toolTip">daschbord</span> 
</li>
<li>
<a href="#">
<i className='bx bx-pie-chart-alt-2' ></i>
<span className="links_name">analytics</span>
</a>
<span className="toolTip">daschbord</span> 
</li> */}