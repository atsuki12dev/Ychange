import React from 'react';

import style from './Profile.module.scss';

function Profile({profileOpen, setProfileOpen}) {
  return (
    <div className={style.root}>
        <div className="content">
          <div className="text">
            <h1>Вход и регистрация</h1>
            <p>Вход через банковские ID сэкономит <br/>время — данные в анкете заполнятся <br/>автоматически. Это быстро и <br/>безопасно</p>
          </div>
          <img src='./assets/img/Крестик.png' 
            onClick={() => setProfileOpen(!profileOpen)}
          />
        </div>
        <div className="banksid">
          <button>
            <p>Sber ID</p>
            <div className='backimg'>
              <img src='./assets/img/Sber.png' />
            </div>
          </button>
          <button>
            <p>T ID</p>
            <img src='./assets/img/TBank.png' />
          </button>
        </div>
        <div className="otherVar">
          <p>Другие способы</p>
          <input type="tel" placeholder='Номер телефона' />
          <img src='./assets/img/Phone.png' />
        </div>
        <div className="checkboxes">
          <div className="row">
            <input type="checkbox" />
            <p>Соглашаюсь с Пользовательским соглашением, предоставляю свое согласие на обработку персональных данных и на участие в Программе лояльности</p>
          </div>
          <div className="row">
            <input type="checkbox" />
            <p>Предоставляю свое согласие на получение рекламы и информационных сообщений</p>
          </div>
          <div className="row">
            <input type="checkbox" />
            <p>Соглашаюсь с Правилами финансовой платформы, Правилами ЭДО, предоставляю согласие на получение данных БКИ, направляю Офорету</p>
          </div>
        </div>
        <div className="btn">
          <button>Подтвердить</button>
        </div>
    </div>
  )
}
export default Profile;