import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './components/pages/Home';
import Change from './components/pages/Change';

import Header from './components/Header';
import Profile from './components/Profile';
import FeedbackModal from './components/FeedbackModal';
import Footer from './components/Footer';
import './scss/App.scss';

function App() {
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [feedbackOpen, setFeedbackOpen] = React.useState(false);
  const [list1Open, setList1Open] = React.useState(false);
  const [list2Open, setList2Open] = React.useState(false);
  const [list3Open, setList3Open] = React.useState(false);
  const [graphicOpen, setGraphicOpen] = React.useState(false);
  const [calculatorList1Open, setCalculatorList1Open] = React.useState(false);
  const [calculatorList2Open, setCalculatorList2Open] = React.useState(false);
  const RefInp1 = React.useRef();
  const RefInp2 = React.useRef();
  const [calculatorVal1, setCalculatorVal1] = React.useState('RUB');
  const [calculatorVal2, setCalculatorVal2] = React.useState('USD');
  const [changerList1Open, setChangerList1Open] = React.useState(false);
  const [changerList2Open, setChangerList2Open] = React.useState(false);
  const [changerVarList1, setChangerVarList1] = React.useState('RUB');
  const [changerVarList2, setChangerVarList2] = React.useState('USD');
  const [balance, setBalance] = React.useState(0);
  const [balanceRUB, setBalanceRUB] = React.useState(10000);
  const [balanceUSD, setBalanceUSD] = React.useState(0);
  const [balanceJPY, setBalanceJPY] = React.useState(0);
  const [balanceEUR, setBalanceEUR] = React.useState(0);
  const [balanceGBP, setBalanceGBP] = React.useState(0);

  return (
    <div className="container">
        <Header 
          profileOpen={profileOpen} setProfileOpen={setProfileOpen}
          list1Open={list1Open} setList1Open={setList1Open}
          list2Open={list2Open} setList2Open={setList2Open}
          list3Open={list3Open} setList3Open={setList3Open}
        />
        <div className={profileOpen ? 'profile active' : 'profile unactive'}>
          <Profile profileOpen={profileOpen} setProfileOpen={setProfileOpen}/>
        </div>
        <div className="wrapper">
        <Routes>
            <Route path="/Ychange/" element={
              <Home
                graphicOpen={graphicOpen} setGraphicOpen={setGraphicOpen}
                calculatorList1Open = {calculatorList1Open} setCalculatorList1Open = {setCalculatorList1Open}
                calculatorList2Open = {calculatorList2Open} setCalculatorList2Open = {setCalculatorList2Open}
                RefInp1 = {RefInp1}
                RefInp2 = {RefInp2}
                calculatorVal1 = {calculatorVal1} setCalculatorVal1 = {setCalculatorVal1}
                calculatorVal2 = {calculatorVal2} setCalculatorVal2 = {setCalculatorVal2}
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
            } />
            <Route path="/Ychange/change" element={
              <Change graphicOpen={graphicOpen} setGraphicOpen={setGraphicOpen}
            />} />
        </Routes>
        </div>
        <div className={feedbackOpen ? 'feedback active' : 'feedback unactive'}>
          <FeedbackModal />
        </div>
        <Footer feedbackOpen={feedbackOpen} setFeedbackOpen={setFeedbackOpen}/>
    </div>
  );
}

export default App;