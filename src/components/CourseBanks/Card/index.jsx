import React from 'react';

import styleCard from './Card.module.scss';

function Card({title, output1, output2, output3, update, img}) {
  return (
    <div className={styleCard.root}>
        <div className="row1">
            <div className="logo">
                <img src={img} alt="county.png" />
                <div className="text">
                    <h1>{title}</h1>
                    <p>курс банка</p>
                </div>
            </div>
            <div className="map">
                <img src="./assets/img/Map.png" alt="Map.png" />
            </div>
        </div>
        <div className="row2">
            <div className="output">
                <button>{output1}</button>
                <button>{output2}</button>
                <button>{output3}</button>
            </div>
            <div className="dateUpdate">
                <div className="text">
                    <p>Обновление: </p>
                    <p>{update}</p>
                </div>
                <button>подробнее</button>
            </div>
        </div>
    </div>
  )
}
export default Card;