import React from 'react';

import Discription from '../../Discription';
import Map from '../../Map';
import Graphic from '../../Graphic';
import GraphicModal from '../../GraphicModal';
import Changer from '../../Changer';
import Calculator from '../../Calculator';
import Countries from '../../Countries';

import stylesHome from './Home.module.scss';

                function Home({graphicOpen, setGraphicOpen, changerList1Open, setChangerList1Open, changerList2Open, setChangerList2Open, changerVarList1, setChangerVarList1, changerVarList2, setChangerVarList2, balance, setBalance, balanceRUB, setBalanceRUB, balanceUSD, setBalanceUSD, balanceJPY, setBalanceJPY, balanceEUR, setBalanceEUR, balanceGBP, setBalanceGBP, calculatorList1Open, setCalculatorList1Open, calculatorList2Open, setCalculatorList2Open, RefInp1, RefInp2, calculatorVal1, setCalculatorVal1, calculatorVal2, setCalculatorVal2}) {
    return (
    <>
        <div className={stylesHome.section1} id='sect1'>
            <Discription />
            <Map />
        </div>
        <div className={stylesHome.section2} id='sect2'>
            <div className="course">
                <Graphic graphicOpen={graphicOpen} setGraphicOpen={setGraphicOpen}/>
                <div className={graphicOpen ? 'graphicm active' : 'graphicm unactive'}>
                    <GraphicModal graphicOpen={graphicOpen} setGraphicOpen={setGraphicOpen} />
                </div>
                <Changer 
                    graphicOpen={graphicOpen} setGraphicOpen={setGraphicOpen}
                    changerList1Open={changerList1Open} setChangerList1Open={setChangerList1Open}
                    changerList2Open={changerList2Open} setChangerList2Open={setChangerList2Open}
                    changerVarList1={changerVarList1} setChangerVarList1={setChangerVarList1}
                    changerVarList2={changerVarList2} setChangerVarList2={setChangerVarList2}
                    balance={balance} setBalance={setBalance}
                    balanceRUB={balanceRUB} setBalanceRUB={setBalanceRUB}
                    balanceUSD={balanceUSD} setBalanceUSD={setBalanceUSD}
                    balanceJPY={balanceJPY} setBalanceJPY={setBalanceJPY}
                    balanceEUR={balanceEUR} setBalanceEUR={setBalanceEUR}
                    balanceGBP={balanceGBP} setBalanceGBP={setBalanceGBP}
                />
            </div>
            <Calculator 
                calculatorList1Open = {calculatorList1Open} setCalculatorList1Open = {setCalculatorList1Open}
                calculatorList2Open = {calculatorList2Open} setCalculatorList2Open = {setCalculatorList2Open}
                RefInp1 = {RefInp1}
                RefInp2 = {RefInp2}
                calculatorVal1 = {calculatorVal1} setCalculatorVal1 = {setCalculatorVal1}
                calculatorVal2 = {calculatorVal2} setCalculatorVal2 = {setCalculatorVal2}
            />
        </div>
        <div className={stylesHome.section3} id='sect3'>
            <div className="title"><h1>Популярные валюты</h1></div>
            <Countries />
        </div>
    </>
  )
}
export default Home;