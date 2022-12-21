import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wave from 'react-wavify'
import { useState } from 'react';
import { MobileView, BrowserView, isMobile } from 'react-device-detect'
import { SideBar, Group, Tab, Divider } from './sidebar/sidebar.js'
import AboutPopup from './AboutPopup';
import {AppStyles} from './AppStyles';
import './App.css';

const Header = (props) => {
  return  (
    <div className='header' style={isMobile ? {top:'8%', fontSize: '250%', width: '90%', right: '4%', justifyContent:'center'} : {top: '1%', width: '58%'}} >
      <b style={props.light ? {color:'black'} : {color: 'white'}}> John Flanagan </b>
      <img 
        className='theme-button' 
        src={props.light ? '/sun.png' : '/moon.png'} 
        onClick={() => props.handleClick()}
        alt={'Theme Button'}
      />
    </div>
  )
}

const Center = (props) => {

  // need to give id to wave svg path
  // so you can have image element follow that path

  return (
    <div className='center' style={{background: props.lightTheme ? 'linear-gradient(#8FCBFF 20%, #FFCD8C)' : 'linear-gradient(#05081C 35%, #8FCBFF)'}}>
      <Header light={props.lightTheme} handleClick={() => props.themeClick()}/>

      <Wave className='water' fill='url(#gradient)' options={{height: 40, amplitude: 40}} id="wave">
        <image 
          href="/sailboat_white.png" 
          id="sailboat" 
          x="15" y="15" 
          height="50px" width="50px" 
        >
          <animateMotion href="#sailboat" dur="10s"repeatCount="indefinite">
            <mpath href="#wavePath"/>
          </animateMotion>
        </image>
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

  const logos = AppStyles.icon.images;

  return (
    <div>
      <BrowserView>
        <div className='homescreen'>
          <AboutPopup visible={popup === 'about-me'}/>
          
          <Center lightTheme={light} themeClick={() => handleClick()}/>
          <img className='boat' src={light ? logos.logoLight : logos.logoDark} alt="Sailboat"/>

          <SideBar >
            <Group name="Me">
              <Tab name='About Me' img={AppStyles.icon.images.logoDark} onClick={() => popupClick("about-me")}/>
              <Tab name='GitHub' img='/github-light.png' url='https://github.com/johnamii' />
            </Group>

            <Divider/>

            <Group name="Projects" accent='white'>
              <Tab name ='Scootly.io' url="https://github.com/scootly/react-native-client" img='/scootly.png'/>
              <Tab name='PokeTheme Battles' url='https://poketheme.johnamii.com' img='/pokeballs.png'/>
              <Tab name='Terni Lapilli' url='https://terni.johnamii.com' img='/pebbles.png'/>
            </Group>
          </SideBar>

        </div>
      </BrowserView>

      <MobileView>
        <div className='mobilescreen'>
          <SideBar popupClick={(val) => popupClick(val)}>
            <Group name="Me">
              <Tab name='About Me' img={AppStyles.icon.images.logoDark}/>
              <Tab name='GitHub' img='/github-light.png' url='https://github.com/johnamii' />
            </Group>

            <Group name="Projects" accent='white'>
              <Tab name='PokeTheme Battles' url='https://poketheme.johnamii.com' img='/pokeballs.png'/>
              <Tab name='Terni Lapilli' url='https://terni.johnamii.com' img='/pebbles.png'/>
            </Group>
            <Tab name ='Scootly.io' url="https://github.com/scootly/react-native-client" img='/scootly.png'/>
          </SideBar>

          <AboutPopup visible={popup === 'about-me'}/>
          <Center lightTheme={light} themeClick={() => handleClick()}/>
            
        </div>
      </MobileView>
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

const MobileBar = (props) => {
  return (
    <div className='mobile-bar'>
      <Tab name='About Me' img='/sailboat.png' onClick={(val) => {props.popupClick('about-me')}}/>
      <Tab name='GitHub' url='https://github.com/johnamii' img='/github-light.png' />
      <Tab name='PokeTheme Battles' url='https://poketheme.johnamii.com' img={AppStyles.icon.images.poketheme} />
      <Tab name='Terni Lapilli' url='https://terni.johnamii.com' img='/pebbles.png'/>
    </div>
  )
}