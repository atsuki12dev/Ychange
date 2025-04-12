import React from 'react';
import { Link } from "react-router-dom";

import stylesHeader from './Header.module.scss';

function Header({profileOpen, setProfileOpen, list1Open, setList1Open, list2Open, setList2Open, list3Open, setList3Open}) {
  

  return (
    <header className={stylesHeader.root}>
        <div className="logo-nav">
            <img src="./assets/img/Логотип.svg" alt="logo.svg" />
            <div className="nav">
                <Link to="/Ychange/">
                  <p>конвертер</p>
                </Link>
                <Link to="/Ychange/change">
                  <p>курс-валют</p>
                </Link>
                <img src="./assets/img/menu.png" alt="menu" onClick={() => setList1Open(!list1Open)}/>
            </div>
        </div>
        <div className="profile" 
          onClick={() => setProfileOpen(!profileOpen)}
        >
            <img src="./assets/img/Profile.png" alt="profile.png" />
            <p>ID</p>
        </div>
        {list1Open && [
          <div className="menu-List1">
            <Link to="/Ychange/">
              <p onClick={() => setList2Open(!list2Open)}>Конвертер</p>
            </Link>
            <Link to="/Ychange/change">
              <p onClick={() => setList3Open(!list3Open)}>Курс-валют</p>
            </Link>
          </div>
        ]}
        {list1Open && list2Open && [
          <div className="menu-List2">
            <a href="#sect1"><p>Выбор города</p></a>
            <a href="#sect2"><p>График</p></a>
            <a href="#sect3"><p>Популярное</p></a>
          </div>
        ]}
        {list1Open && list3Open && [
          <div className="menu-List3">
            <a href="#sect4"><p>Выбор города</p></a>
            <a href="#sect5"><p>График</p></a>
            <a href="#sect6"><p>Курс банков</p></a>
          </div>
        ]}
        
    </header>
  )
}
export default Header;