import React from 'react';

import stylesChanger from './Changer.module.scss';

function Changer({changerList1Open, setChangerList1Open, changerList2Open, setChangerList2Open, changerVarList1, setChangerVarList1, changerVarList2, setChangerVarList2, balance, setBalance, balanceRUB, setBalanceRUB, balanceUSD, setBalanceUSD, balanceJPY, setBalanceJPY, balanceEUR, setBalanceEUR, balanceGBP, setBalanceGBP}) {

    const TradeInput = React.useRef();
    function trade(v1, v2){
        switch (v1){
            case 'RUB':{
                if(v2 == 'RUB'){
                    if(TradeInput.current.value <= balanceRUB){
                        setBalanceRUB((balanceRUB + TradeInput.current.value * Number(1)));
                        setBalanceRUB(balanceRUB - TradeInput.current.value);
                    }
                }
                if(v2 == 'USD'){
                    if(TradeInput.current.value <= balanceRUB){
                        setBalanceUSD((balanceUSD + TradeInput.current.value / Number(84)));
                        setBalanceRUB(balanceRUB - TradeInput.current.value);
                    }
                }
                if(v2 == 'JPY'){
                    if(TradeInput.current.value <= balanceRUB){
                        setBalanceJPY((balanceJPY + TradeInput.current.value * Number(175) / 100));
                        setBalanceRUB(balanceRUB - TradeInput.current.value);
                    }
                }
                if(v2 == 'EUR'){
                    if(TradeInput.current.value <= balanceRUB){
                        setBalanceEUR((balanceEUR + TradeInput.current.value / Number(93,16191)));
                        setBalanceRUB(balanceRUB - TradeInput.current.value);
                    }
                }
                if(v2 == 'GBP'){
                    if(TradeInput.current.value <= balanceRUB){
                        setBalanceGBP((balanceGBP + TradeInput.current.value / Number(109,40919)));
                        setBalanceRUB(balanceRUB - TradeInput.current.value);
                    }
                }
            }
            break;
            case 'USD':{
                if(v2 == 'RUB'){
                    if(TradeInput.current.value <= balanceUSD){
                        setBalanceRUB((balanceRUB + TradeInput.current.value * Number(84,38106)));
                        setBalanceUSD(balanceUSD - TradeInput.current.value);
                    }
                }
                if(v2 == 'USD'){
                    if(TradeInput.current.value <= balanceUSD){
                        setBalanceUSD((balanceUSD + TradeInput.current.value * Number(1)));
                        setBalanceUSD(balanceUSD - TradeInput.current.value);
                    }
                }
                if(v2 == 'JPY'){
                    if(TradeInput.current.value <= balanceUSD){
                        setBalanceJPY((balanceJPY + TradeInput.current.value * Number(146,41288)));
                        setBalanceUSD(balanceUSD - TradeInput.current.value);
                    }
                }
                if(v2 == 'EUR'){
                    if(TradeInput.current.value <= balanceUSD){
                        setBalanceEUR((balanceEUR + TradeInput.current.value * Number(91) / 100));
                        setBalanceUSD(balanceUSD - TradeInput.current.value);
                    }
                }
                if(v2 == 'GBP'){
                    if(TradeInput.current.value <= balanceUSD){
                        setBalanceGBP((balanceGBP + TradeInput.current.value * Number(77) / 100));
                        setBalanceUSD(balanceUSD - TradeInput.current.value);
                    }
                }
            }
            break;
            case 'JPY':{
                if(v2 == 'RUB'){
                    if(TradeInput.current.value <= balanceJPY){
                        setBalanceRUB((balanceRUB + TradeInput.current.value * Number(57) / 100));
                        setBalanceJPY(balanceJPY - TradeInput.current.value);
                    }
                }
                if(v2 == 'USD'){
                    if(TradeInput.current.value <= balanceJPY){
                        setBalanceUSD((balanceUSD + TradeInput.current.value * Number(683) / 10000));
                        setBalanceJPY(balanceJPY - TradeInput.current.value);
                    }
                }
                if(v2 == 'JPY'){
                    if(TradeInput.current.value <= balanceJPY){
                        setBalanceJPY((balanceJPY + TradeInput.current.value * Number(1)).toFixed(2));
                        setBalanceJPY(balanceJPY - TradeInput.current.value);
                    }
                }
                if(v2 == 'EUR'){
                    if(TradeInput.current.value <= balanceJPY){
                        setBalanceEUR((balanceEUR + TradeInput.current.value * Number(621) / 10000));
                        setBalanceJPY(balanceJPY - TradeInput.current.value);
                    }
                }
                if(v2 == 'GBP'){
                    if(TradeInput.current.value <= balanceJPY){
                        setBalanceGBP((balanceGBP + TradeInput.current.value * Number(525) / 10000));
                        setBalanceJPY(balanceJPY - TradeInput.current.value);
                    }
                }
            }
            break;
            case 'EUR':{
                if(v2 == 'RUB'){
                    if(TradeInput.current.value <= balanceEUR){
                        setBalanceRUB((balanceRUB + TradeInput.current.value * Number(93,19664)));
                        setBalanceEUR(balanceEUR - TradeInput.current.value);
                    }
                }
                if(v2 == 'USD'){
                    if(TradeInput.current.value <= balanceEUR){
                        setBalanceUSD((balanceUSD + TradeInput.current.value * Number(11) / 10));
                        setBalanceEUR(balanceEUR - TradeInput.current.value);
                    }
                }
                if(v2 == 'JPY'){
                    if(TradeInput.current.value <= balanceEUR){
                        setBalanceJPY((balanceJPY + TradeInput.current.value * Number(161)));
                        setBalanceEUR(balanceEUR - TradeInput.current.value);
                    }
                }
                if(v2 == 'EUR'){
                    if(TradeInput.current.value <= balanceEUR){
                        setBalanceEUR((balanceEUR + TradeInput.current.value * Number(1)));
                        setBalanceEUR(balanceEUR - TradeInput.current.value);
                    }
                }
                if(v2 == 'GBP'){
                    if(TradeInput.current.value <= balanceEUR){
                        setBalanceGBP((balanceGBP + TradeInput.current.value * Number(85) / 100));
                        setBalanceEUR(balanceEUR - TradeInput.current.value);
                    }
                }
            }
            break;
            case 'GBP':{
                if(v2 == 'RUB'){
                    if(TradeInput.current.value > balanceEUR){
                        setBalanceRUB((balanceRUB + TradeInput.current.value * Number(109,52902)));
                        setBalanceGBP(balanceGBP - TradeInput.current.value);
                    }
                }
                if(v2 == 'USD'){
                    if(TradeInput.current.value > balanceEUR){
                        setBalanceUSD((balanceUSD + TradeInput.current.value * Number(13) / 10));
                        setBalanceGBP(balanceGBP - TradeInput.current.value);
                    }
                }
                if(v2 == 'JPY'){
                    if(TradeInput.current.value > balanceEUR){
                        setBalanceJPY((balanceJPY + TradeInput.current.value * Number(190,47619)));
                        setBalanceGBP(balanceGBP - TradeInput.current.value);
                    }
                }
                if(v2 == 'EUR'){
                    if(TradeInput.current.value > balanceEUR){
                        setBalanceEUR((balanceEUR + TradeInput.current.value * Number(118) / 100));
                        setBalanceGBP(balanceGBP - TradeInput.current.value);
                    }
                }
                if(v2 == 'GBP'){
                    if(TradeInput.current.value > balanceEUR){
                        setBalanceGBP((balanceGBP + TradeInput.current.value * Number(1)));
                        setBalanceGBP(balanceGBP - TradeInput.current.value);
                    }
                }
            }
            break;
        }
    }
    function TypeTracking(){
        if(changerVarList2 == 'RUB'){
            setBalance(balanceRUB);
        }
        if(changerVarList2 == 'USD'){
            setBalance(balanceUSD);
        }
        if(changerVarList2 == 'JPY'){
            setBalance(balanceJPY);
        }
        if(changerVarList2 == 'EUR'){
            setBalance(balanceEUR);
        }
        if(changerVarList2 == 'GBP'){
            setBalance(balanceGBP);
        }
    }
    React.useEffect(() => {    
        TypeTracking();
    }, [changerVarList2, balance, balanceRUB, balanceUSD, balanceJPY, balanceEUR, balanceGBP]);

  return (
    <div className={stylesChanger.root}>
        <div className="chan-wrapp">
            <div className="row1">
                <div className="nav">
                    <p>Конвертер</p>
                </div>
                <div className="balance">
                    <p>Ваш баланс:</p>
                    <p>{balance.toFixed(2)} {changerVarList2}</p>
                </div>
            </div>
            <div className="row2">
                <input type="text" placeholder="Введите сумму" ref={TradeInput}/>
                <button onClick={() => setChangerList1Open(!changerList1Open)}>{changerVarList1}</button>
                <div className={changerList1Open ? 'changerList1 active' : 'changerList1 unactive'}>
                    <p onClick={() => 
                        [
                            setChangerVarList1('RUB'), 
                            setChangerList1Open(false)
                        ]
                    }>RUB</p>
                    <p onClick={() => 
                        [
                            setChangerVarList1('USD'), 
                            setChangerList1Open(false)
                        ]
                    }>USD</p>
                    <p onClick={() => 
                        [
                            setChangerVarList1('JPY'), 
                            setChangerList1Open(false)
                        ]
                    }>JPY</p>
                    <p onClick={() => 
                        [
                            setChangerVarList1('EUR'), 
                            setChangerList1Open(false)
                        ]
                    }>EUR</p>
                    <p onClick={() => 
                        [
                            setChangerVarList1('GBP'), 
                            setChangerList1Open(false)
                        ]
                    }>GBP</p>
                </div>
                <img src="./assets/img/Strelka.png" alt="strelka.png" onClick={() => setChangerList2Open(!changerList2Open)}/>
                <div className={changerList2Open ? 'changerList2 active' : 'changerList2 unactive'}>
                    <p onClick={() => 
                        [
                            setChangerVarList2('RUB'), 
                            setChangerList2Open(false)
                        ]
                    }>RUB</p>
                    <p onClick={() => 
                        [
                            setChangerVarList2('USD'), 
                            setChangerList2Open(false)
                        ]
                    }>USD</p>
                    <p onClick={() => 
                        [
                            setChangerVarList2('JPY'), 
                            setChangerList2Open(false)
                        ]
                    }>JPY</p>
                    <p onClick={() => 
                        [
                            setChangerVarList2('EUR'), 
                            setChangerList2Open(false)
                        ]
                    }>EUR</p>
                    <p onClick={() => 
                        [
                            setChangerVarList2('GBP'), 
                            setChangerList2Open(false)
                        ]
                    }>GBP</p>
                </div>
            </div>
        </div>
        <button onClick={() => trade(changerVarList1, changerVarList2)}>Обмен</button>
    </div>
  )
}
export default Changer;