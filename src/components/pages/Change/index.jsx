import React from 'react';

import Discription from '../../Discription';
import Map from '../../Map';
import Graphic from '../../Graphic';
import CourseBanks from '../../CourseBanks';
import GraphicModal from '../../GraphicModal';

import stylesChange from './Change.module.scss';

function Change({graphicOpen, setGraphicOpen}) {
  return (
    <>
      <div className={stylesChange.section1} id='sect4'>
          <Discription />
          <Map />
      </div>
      <div className={stylesChange.section2} id='sect5'>
          <div className="course">
            <Graphic graphicOpen={graphicOpen} setGraphicOpen={setGraphicOpen}/>
            <div className={graphicOpen ? 'graphicm active' : 'graphicm unactive'}>
                <GraphicModal graphicOpen={graphicOpen} setGraphicOpen={setGraphicOpen}/>
            </div>
          </div>
      </div>
      <div className="section6" id='sect6'>
        <CourseBanks />
      </div>
    </>
  )
}
export default Change;