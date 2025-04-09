import React from 'react';

import stylesChanger from './Changer.module.scss';

function Changer() {
  return (
    <div className={stylesChanger.root}>
        <div className="chan-wrapp">
            <div className="row1">
                <div className="nav">
                    <button>Все</button>
                    <button>покупка</button>
                    <button>продажа</button>
                </div>
                <div className="balance">
                    <p>Ваш баланс:</p>
                    <p>0</p>
                </div>
            </div>
            <div className="row2">
                <input type="text" placeholder="Введите сумму" />
                <button>USD</button>
                <img src="./assets/img/Strelka.png" alt="strelka.png" />
            </div>
        </div>
        <button>Обмен</button>
    </div>
  )
}
export default Changer;