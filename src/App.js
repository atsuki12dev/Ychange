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
        {
          profile && [
            <Profile profile={profile} setProfile={setProfile}/>
          ]
        }
        <div className="wrapper">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/change" element={<Change />} />
        </Routes>
        </div>
        {open && [
          <FeedbackModal />
        ]}
        <Footer open={open} setOpen={setOpen}/>
    </div>
  );
}

export default App;