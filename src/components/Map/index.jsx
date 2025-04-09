import React from 'react';

import stylesMap from './Map.module.scss';

function Map() {
  return (
    <div className={stylesMap.root}>
        <img src="./assets/img/Map.png" alt="map.png" />
        <button>Укажите город</button>
    </div>
  )
}
export default Map;