import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wave from 'react-wavify'
import { useEffect, useState } from 'react';
import { MobileView, BrowserView, isMobile } from 'react-device-detect'
import { SideBar, MobileBar } from './sidebar.js'
import AboutPopup from './AboutPopup';
import AppStyles from './AppStyles';

const Header = (props) => {
//error: blocks top part of sidebar
  return  (
    <div className='header' style={isMobile ? {top:'8%', fontSize: '250%', width: '90%', right: '4%', justifyContent:'center'} : {top: '1%', width: '58%'}} >
      <b style={props.light ? {color:'black'} : {color: 'white'}}> John Flanagan </b>
      <img className='theme-button' src={props.light ? '/sun.png' : '/moon.png'} onClick={() => props.handleClick()}/>
    </div>
  )
}

const Center = (props) => {
  return (
    <div className='center' style={{background: props.lightTheme ? 'linear-gradient(#8FCBFF 20%, #FFCD8C)' : 'linear-gradient(#05081C 35%, #8FCBFF)'}}>
      <Header light={props.lightTheme} handleClick={() => props.themeClick()}/> 
      <Wave className='water' fill='url(#gradient)' options={{height: 40, amplitude: 40}}>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="20%"  stopColor="#006FA3" />
            <stop offset="90%" stopColor="#000F30" />
          </linearGradient>
        </defs>
      </Wave>
    </div>
  )
}

const HomeScreen = () => {

  const [light, setLight] = useState(true);
  const [popup, setPopup] = useState(null);
  
  function popupClick(val){
    popup === null ? setPopup(val) : setPopup(null);
  }

  function handleClick(){
    setLight(!light);
  }

  return (
    <div>
      <MobileView>
        <div className='mobilescreen'>
          <MobileBar/>
          <Center lightTheme={light} themeClick={() => handleClick()}/>
            <img className='boat' id='boat' src='/sailboat.png' onClick={() => {console.log('boat!')}}/>
           
        </div>
      </MobileView>

      <BrowserView>
        <div className='homescreen'>
          <AboutPopup visible={popup === 'about-me'}/>
          <SideBar popupClick={(val) => popupClick(val)}/>
          <Center lightTheme={light} themeClick={() => handleClick()}/>
          <img className='boat' src={AppStyles.icon.images.logo}></img>
          
          
        </div>
      </BrowserView>
    </div>
    
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
