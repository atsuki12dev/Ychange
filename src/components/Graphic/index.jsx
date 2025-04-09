import React from 'react';

import stylesGraphic from './Graphic.module.scss';

function Graphic({open, setOpen}) {

  return (
    <div className={stylesGraphic.root}>
        <h1>График изменения курса</h1>
        <button onClick={() => setOpen(!open)}> &gt;</button>
    </div>
  )
}
export default Graphic;