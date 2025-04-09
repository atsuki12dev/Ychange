import React from 'react';
import { Link } from "react-router-dom";

import stylesHeader from './Header.module.scss';

function Header({profile, setProfile}) {
  const [list1, setList1] = React.useState(false);
  const [list2, setList2] = React.useState(false);
  const [list3, setList3] = React.useState(false);

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
                <img src="./assets/img/menu.png" alt="menu" onClick={() => setList1(!list1)}/>
            </div>
        </div>
        <div className="profile" 
          onClick={() => setProfile(!profile)}
        >
            <img src="./assets/img/Profile.png" alt="profile.png" />
            <p>ID</p>
        </div>
        {list1 && [
          <div className="menu-List1">
            <Link to="/Ychange/">
              <p onClick={() => setList2(!list2)}>Конвертер</p>
            </Link>
            <Link to="/Ychange/change">
              <p onClick={() => setList3(!list3)}>Курс-валют</p>
            </Link>
          </div>
        ]}
        {list1 && list2 && [
          <div className="menu-List2">
            <a href="#sect1"><p>Выбор города</p></a>
            <a href="#sect2"><p>График</p></a>
            <a href="#sect3"><p>Популярное</p></a>
          </div>
        ]}
        {list1 && list3 && [
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