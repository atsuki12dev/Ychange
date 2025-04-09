import React from 'react';

import stylesCountries from './Countries.module.scss';

function Countries() {
  return (
    <div className={stylesCountries.root}>
        <div className="country">
            <img src="./assets/img/RUB.png" alt="rub.png" />
            <div className="text">
                <h1>Рубли Россия</h1>
                <p>RUB</p>
            </div>
        </div>
        <div className="country">
            <img src="./assets/img/USD.png" alt="usd.png" />
            <div className="text">
                <h1>Доллар США</h1>
                <p>USD</p>
            </div>
        </div>
        <div className="country">
            <img src="./assets/img/JPY.png" alt="jpy.png" />
            <div className="text">
                <h1>Иена Япония</h1>
                <p>JPY</p>
            </div>
        </div>
        <div className="country">
            <img src="./assets/img/EUR.png" alt="eur.png" />
            <div className="text">
                <h1>Евро</h1>
                <p>EUR</p>
            </div>
        </div>
        <div className="country">
            <img src="./assets/img/GBP.png" alt="gbp.png" />
            <div className="text">
                <h1>Фунт стрерлингов</h1>
                <p>GBP</p>
            </div>
        </div>
    </div>
  )
}
export default Countries;