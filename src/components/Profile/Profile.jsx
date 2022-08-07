import React from 'react';
import './Profile.css';

const Profile = () => {

  return( 
    <div className="body">
            <div className="sideBar">
                <div className="menuContent">

                </div>
                <ul className="nav_list">
                    <li>
                        
                        <i className='bx bx-search-alt' onClick={()=>{
                            console.log("jafan")
                        }}></i>
                        <input type="text" placeholder="wyszukaj"/>
                    </li>
                    <li>
                        <a href="#">
                        <i className='bx bx-grid-alt' ></i>
                        <span className="links_name">rozliczanie</span>
                        </a>
               
                    </li>
                    <li>
                        <a href="#">
                        <i className='bx bx-user' ></i>
                        <span className="links_name">twoje konto</span>
                        </a>
                     
                    </li>

                    <li>
                        <a href="#">
                        <i className='bx bx-cart' ></i>
                        <span className="links_name">Składanie zamówień</span>
                        </a>
                       
                    </li>
                    <li>
                        <a href="#">
                        <i className='bx bx-folder' ></i>
                        <span className="links_name">Historia zamówień</span>
                        </a>
              
                    </li>
                    <li>
                        <a href="#">
                        <i className='bx bx-heart'></i>
                        <span className="links_name">Proponuj</span>
                        </a>

                    </li>
                </ul>
            </div>
        </div>
  ) 
}

export default Profile;     
