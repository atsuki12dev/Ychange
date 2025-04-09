import React from 'react';

import stylesDiscription from './Discription.module.scss';

function Discription() {
  return (
    <div className={stylesDiscription.root}>
        <h1>Курсы обмена валют</h1>
        <p>На данной странице отображаются лучшие курсы обмена валюты в банках. Вы можете отслеживать динамику курса интересующей валюты с помощью интерактивного графика, а также воспользоваться калькулятором для конвертации стоимости одной валюты в другую. Информация постоянно обновляется, поэтому вам доступны актуальные данные на сегодняшний день.</p>
    </div>
  )
}
export default Discription;