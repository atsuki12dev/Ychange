import React from 'react';

import Discription from '../../Discription';
import Map from '../../Map';
import Graphic from '../../Graphic';
import GraphicModal from '../../GraphicModal';
import Changer from '../../Changer';
import Calculator from '../../Calculator';
import Countries from '../../Countries';

import stylesHome from './Home.module.scss';

function Home() {
    const [open, setOpen] = React.useState(false);

    return (
    <>
        <div className={stylesHome.section1} id='sect1'>
            <Discription />
            <Map />
        </div>
        <div className={stylesHome.section2} id='sect2'>
            <div className="course">
                <Graphic open={open} setOpen={setOpen}/>
                {open && [
                    <GraphicModal open={open} setOpen={setOpen} />
                ]}
                <Changer />
            </div>
            <Calculator />
        </div>
        <div className={stylesHome.section3} id='sect3'>
            <div className="title"><h1>Популярные валюты</h1></div>
            <Countries />
        </div>
    </>
  )
}
export default Home;