import React from 'react';

import style from './GraphicModal.module.scss';

function GraphicModal({graphicOpen, setGraphicOpen}) {
  return (
    <div className={style.root}>
        <div className="row1">
            <h1>Курс Центрального Банка</h1>
            <img src="./assets/img/Крестик.png" onClick={() => setGraphicOpen(!graphicOpen)}/>
        </div>
        <div className="row2">
            <div className="course">
                <p>RUB</p>
                <p>USD</p>
                <p>EUR</p>
                <p>JPY</p>
                <p>GBP</p>
            </div>
            <div className="data">
                <p>дата обновления: </p>
                <p>01.01.2024</p>
            </div>
        </div>
        <div className="line"></div>
        <div className="row3">
            <div className="GraphNum">
                <p>110</p>
                <p>105</p>
                <p>100</p>
                <p>95</p>
            </div>
            <img src="./assets/img/graphic.png" />
        </div>
        <div className="row4">
            <p>сен.</p>
            <p>окт.</p>
            <p>ноя.</p>
            <p>дек.</p>
            <p>янв.</p>
            <p>фев.</p>
            <p>мар.</p>
            <p>апр.</p>
            <p>май.</p>
            <p>июн.</p>
            <p>июл.</p>
            <p>авг.</p>
        </div>
    </div>
  )
}
export default GraphicModal;