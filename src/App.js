import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wave from 'react-wavify'
import { useEffect, useState } from 'react';
import { MobileView, BrowserView, isMobile } from 'react-device-detect'

const Header = (props) => {

  return  (
    <div className='header' style={isMobile ? {top:'8%', fontSize: '250%'} : {top: '1%'}} >
      <i style={props.light ? {color:'black'} : {color: 'white'}}> John Flanagan </i>
      <img className='theme-button' src={props.light ? '/sun.png' : '/moon.png'} onClick={() => props.handleClick()}/>
    </div>
  )
}

const IconButton = (props) => {

//props.extended
  return (
    <a href={props.url}>
      <button className='sidebar-icon' href='https://github.com/johnamii' style={props.ext ? {width: '25vh'} : {width:'5vh'}}>
        <img src={props.img} alt={props.name} style={{height: '70%'}}/>
        {props.ext ? props.name : ''}
      </button>
    </a>
  )
}

const MobileBar = (props) => {
  return (
    <div className='mobile-bar'>
      <IconButton name='GitHub' url='https://github.com/johnamii' img='/github-light.png' />
      <IconButton name='PokeTheme Battles' url='https://poketheme.johnamii.com' img='/pokeballs.png' />
      <IconButton name='Terni Lapilli' url='https://terni.johnamii.com' img='/pebbles.png'/>
    </div>
  )
}

const SideBar = (props) => {
  const [extended, setExtended] = useState(false);

  return (
    <div className='sidebar' 
    onMouseEnter={() => setExtended(true)} 
    onMouseLeave={() => setExtended(false)} 
    style={extended ? {width:'15%'} : {width: '4%'}}
    >
      <IconButton name='GitHub' url='https://github.com/johnamii' img='/github-light.png' ext={extended}/>
      <IconButton name='PokeTheme Battles' url='https://poketheme.johnamii.com' img='/pokeballs.png' ext={extended}/>
      <IconButton name='Terni Lapilli' url='https://terni.johnamii.com' img='/pebbles.png' ext={extended}/>
    </div>
  )
}

const Center = (props) => {
  return (
    <div className='center' style={props.lightTheme ? {background:'#8FCBFF'} : {background: '#05081C'}}>
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

  function handleClick(){
    setLight(!light);
  }

  return (
    <div>
      <MobileView>
        <div className='mobilescreen'>
          <MobileBar/>
          <Center lightTheme={light} themeClick={() => handleClick()}/>
            <img className='boat' id='boat' src='/sailboat.png' />
        </div>
      </MobileView>

      <BrowserView>
        <div className='homescreen'>
          <SideBar/>
          <Center lightTheme={light} themeClick={() => handleClick()}/>
          <img className='boat' src='/sailboat.png'></img>
          
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
