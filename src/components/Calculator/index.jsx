import React from 'react';
import stylesCalculator from './Calculator.module.scss';

function Calculator() {
  const [First, setFirst] = React.useState(false);
  const [Second, setSecond] = React.useState(false);

  const RefInp1 = React.useRef();
  const RefInp2 = React.useRef();

  const [val1, setVal1] = React.useState('RUB');
  const [val2, setVal2] = React.useState('USD');

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
            <button onClick={() => setFirst(!First)}>{val1}</button>
        </div>
        <div className={First ? 'list1 active' : 'list1 unactive'} >
            <p onClick={() => [setVal1('RUB'), setFirst(false)]}>RUB</p>
            <p onClick={() => [setVal1('USD'), setFirst(false)]}>USD</p>
            <p onClick={() => [setVal1('JPY'), setFirst(false)]}>JPY</p>
            <p onClick={() => [setVal1('EUR'), setFirst(false)]}>EUR</p>
            <p onClick={() => [setVal1('GBP'), setFirst(false)]}>GBP</p>
        </div>
        
        <img src="./assets/img/Change.png" alt="change.png" onClick={() => trade(val1, val2)}/>

        <div className="inp1">
            <input type="text" placeholder="0" ref={RefInp2}/>
            <button onClick={() => setSecond(!Second)}>{val2}</button>
        </div>
        <div className={Second ? 'list2 active' : 'list2 unactive'}>
            <p onClick={() => [setVal2('RUB'), setSecond(false)]}>RUB</p>
            <p onClick={() => [setVal2('USD'), setSecond(false)]}>USD</p>
            <p onClick={() => [setVal2('JPY'), setSecond(false)]}>JPY</p>
            <p onClick={() => [setVal2('EUR'), setSecond(false)]}>EUR</p>
            <p onClick={() => [setVal2('GBP'), setSecond(false)]}>GBP</p>
        </div>
    </div>
    )
}
export default Calculator;