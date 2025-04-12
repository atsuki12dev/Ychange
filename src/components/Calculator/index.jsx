import React from 'react';
import stylesCalculator from './Calculator.module.scss';

function Calculator({calculatorList1Open, setCalculatorList1Open, calculatorList2Open, setCalculatorList2Open, RefInp1, RefInp2, calculatorVal1, setCalculatorVal1, calculatorVal2, setCalculatorVal2}) {

  function trade(v1, v2){
    switch (v1){
        case 'RUB':{
            if(v2 == 'RUB'){
                RefInp2.current.value = (RefInp1.current.value * Number(1)).toFixed(2);
            }
            if(v2 == 'USD'){
                RefInp2.current.value = (RefInp1.current.value / Number(84)).toFixed(2);
            }
            if(v2 == 'JPY'){
                RefInp2.current.value = (RefInp1.current.value * Number(1,75)).toFixed(2);
            }
            if(v2 == 'EUR'){
                RefInp2.current.value = (RefInp1.current.value / Number(93,16191)).toFixed(2);
            }
            if(v2 == 'GBP'){
                RefInp2.current.value = (RefInp1.current.value / Number(109,40919)).toFixed(2);
            }
        }
        break;
        case 'USD':{
            if(v2 == 'RUB'){
                RefInp2.current.value = (RefInp1.current.value * Number(84,38106)).toFixed(2);
            }
            if(v2 == 'USD'){
                RefInp2.current.value = (RefInp1.current.value * Number(1)).toFixed(2);
            }
            if(v2 == 'JPY'){
                RefInp2.current.value = (RefInp1.current.value * Number(146,41288)).toFixed(2);
            }
            if(v2 == 'EUR'){
                RefInp2.current.value = (RefInp1.current.value * Number(91) / 100).toFixed(2);
            }
            if(v2 == 'GBP'){
                RefInp2.current.value = (RefInp1.current.value * Number(77) / 100).toFixed(2);
            }
        }
        break;
        case 'JPY':{
            if(v2 == 'RUB'){
                RefInp2.current.value = (RefInp1.current.value * Number(57) / 100).toFixed(2);
            }
            if(v2 == 'USD'){
                RefInp2.current.value = (RefInp1.current.value * Number(683) / 10000).toFixed(2);
            }
            if(v2 == 'JPY'){
                RefInp2.current.value = (RefInp1.current.value * Number(1)).toFixed(2);
            }
            if(v2 == 'EUR'){
                RefInp2.current.value = (RefInp1.current.value * Number(621) / 10000).toFixed(2);
            }
            if(v2 == 'GBP'){
                RefInp2.current.value = (RefInp1.current.value * Number(525) / 10000).toFixed(2);
            }
        }
        break;
        case 'EUR':{
            if(v2 == 'RUB'){
                RefInp2.current.value = (RefInp1.current.value * Number(93,19664)).toFixed(2);
            }
            if(v2 == 'USD'){
                RefInp2.current.value = (RefInp1.current.value * Number(11) / 10).toFixed(2);
            }
            if(v2 == 'JPY'){
                RefInp2.current.value = (RefInp1.current.value * Number(161)).toFixed(2);
            }
            if(v2 == 'EUR'){
                RefInp2.current.value = (RefInp1.current.value * Number(1)).toFixed(2);
            }
            if(v2 == 'GBP'){
                RefInp2.current.value = (RefInp1.current.value * Number(85) / 100).toFixed(2);
            }
        }
        break;
        case 'GBP':{
            if(v2 == 'RUB'){
                RefInp2.current.value = (RefInp1.current.value * Number(109,52902)).toFixed(2);
            }
            if(v2 == 'USD'){
                RefInp2.current.value = (RefInp1.current.value * Number(13) / 10).toFixed(2);
            }
            if(v2 == 'JPY'){
                RefInp2.current.value = (RefInp1.current.value * Number(190,47619)).toFixed(2);
            }
            if(v2 == 'EUR'){
                RefInp2.current.value = (RefInp1.current.value * Number(118) / 100).toFixed(2);
            }
            if(v2 == 'GBP'){
                RefInp2.current.value = (RefInp1.current.value * Number(1)).toFixed(2);
            }
        }
        break;
    }
  }

  return (
    <div className={stylesCalculator.root}>
        <p>Конвертер</p>

        <div className="inp1">
            <input type="text" placeholder="0" ref={RefInp1}/>
            <button onClick={() => setCalculatorList1Open(!calculatorList1Open)}>{calculatorVal1}</button>
        </div>
        <div className={calculatorList1Open ? 'list1 active' : 'list1 unactive'} >
            <p onClick={() => [setCalculatorVal1('RUB'), setCalculatorList1Open(false)]}>RUB</p>
            <p onClick={() => [setCalculatorVal1('USD'), setCalculatorList1Open(false)]}>USD</p>
            <p onClick={() => [setCalculatorVal1('JPY'), setCalculatorList1Open(false)]}>JPY</p>
            <p onClick={() => [setCalculatorVal1('EUR'), setCalculatorList1Open(false)]}>EUR</p>
            <p onClick={() => [setCalculatorVal1('GBP'), setCalculatorList1Open(false)]}>GBP</p>
        </div>
        
        <img src="./assets/img/Change.png" alt="change.png" onClick={() => trade(calculatorVal1, calculatorVal2)}/>

        <div className="inp1">
            <input type="text" placeholder="0" ref={RefInp2}/>
            <button onClick={() => setCalculatorList2Open(!calculatorList2Open)}>{calculatorVal2}</button>
        </div>
        <div className={calculatorList2Open ? 'list2 active' : 'list2 unactive'}>
            <p onClick={() => [setCalculatorVal2('RUB'), setCalculatorList2Open(false)]}>RUB</p>
            <p onClick={() => [setCalculatorVal2('USD'), setCalculatorList2Open(false)]}>USD</p>
            <p onClick={() => [setCalculatorVal2('JPY'), setCalculatorList2Open(false)]}>JPY</p>
            <p onClick={() => [setCalculatorVal2('EUR'), setCalculatorList2Open(false)]}>EUR</p>
            <p onClick={() => [setCalculatorVal2('GBP'), setCalculatorList2Open(false)]}>GBP</p>
        </div>
    </div>
    )
}
export default Calculator;