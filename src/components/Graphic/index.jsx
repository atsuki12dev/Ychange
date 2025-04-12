import React from 'react';

import stylesGraphic from './Graphic.module.scss';

function Graphic({graphicOpen, setGraphicOpen}) {

  return (
    <div className={stylesGraphic.root}>
        <h1>График изменения курса</h1>
        <button onClick={() => setGraphicOpen(!graphicOpen)}> &gt;</button>
    </div>
  )
}
export default Graphic;