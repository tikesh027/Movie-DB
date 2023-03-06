import React, { useEffect } from 'react';
import WhatsHot from './Components/WhatsHot/WhatsHot';
import NewRelease from './Components/NewReleases/NewReleases';
import "./App.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/CommonComponents/Navbar';
import Footer from './Components/CommonComponents/Footer';
import Page404 from './Components/Page404/Page404';


function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
          <Route
            path="/"
            element={<Navigate to="/new" replace />}
          />
          <Route path="/new" element={<NewRelease />}></Route>
          <Route path="/hot" element={<WhatsHot />}></Route>
          <Route path='*' element={<Page404 />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
