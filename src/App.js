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
  const [profile, setProfile] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  return (
    <div className="container">
        <Header profile={profile} setProfile={setProfile}/>
        <div className={profile ? 'profile active' : 'profile unactive'}>
          <Profile profile={profile} setProfile={setProfile}/>
        </div>
        <div className="wrapper">
        <Routes>
            <Route path="/Ychange/" element={<Home />} />
            <Route path="/Ychange/change" element={<Change />} />
        </Routes>
        </div>
        <div className={open ? 'feedback active' : 'feedback unactive'}>
          <FeedbackModal />
        </div>
        <Footer open={open} setOpen={setOpen}/>
    </div>
  );
}

export default App;