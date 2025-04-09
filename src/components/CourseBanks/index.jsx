import React from 'react';

import Card from './Card';

import styleCourseBanks from './Course.module.scss';

function CourseBanks() {
  const cards = [
    {
      "id": 0,
      "title": "КамКомБанк",
      "output1": "101,2 USD",
      "output2": "102,2 EUR",
      "output3": "106,65 JPY",
      "update": "30.11.2024 08:30",
      "img": "./assets/img/KamKomBank.png"
    },
    {
      "id": 1,
      "title": "Банк “Открытие",
      "output1": "100 USD",
      "output2": "101 EUR",
      "output3": "105 JPY",
      "update": "30.11.2024 08:30",
      "img": "./assets/img/Otkritie.png"
    },
    {
      "id": 2,
      "title": "СберБанк",
      "output1": "97,7 USD",
      "output2": "103,3 EUR",
      "output3": "102,6 JPY",
      "update": "30.11.2024 08:30",
      "img": "./assets/img/Sber.png"
    },
    {
      "id": 3,
      "title": "Банк ВТБ",
      "output1": "100,15 USD",
      "output2": "105,15 EUR",
      "output3": "106,05 JPY",
      "update": "30.11.2024 08:30",
      "img": "./assets/img/VTB.png"
    }
  ];

  return (
    <div className={styleCourseBanks.root}>
        <div className="title">Курсы популярных банков</div>
        {cards.map((card) => <Card key={card.id} {...card}/>)}
        <div className="allCourse">
          <button>Все курсы</button>
        </div>
    </div>
  )
}
export default CourseBanks;