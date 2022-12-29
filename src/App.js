import Wave from 'react-wavify'
import { useEffect, useState, useRef } from 'react';
import { isMobile } from 'react-device-detect'
import { SideBar, Group, Tab, Divider } from './sidebar/sidebar'
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
        alt='Theme Button'
      />
    </div>
  )
}

const Center = (props) => {

  const svgRef = useRef(null);
  const logos = AppStyles.icon.images;

  useEffect(() => {
    const svg = document.getElementById('waveSvg');
    svgRef.current = svg;
    svg.style.overflow = 'visible'
  }, [])

  return (
    <div className='center' style={{background: props.lightTheme ? 'linear-gradient(#8FCBFF 20%, #FFCD8C)' : 'linear-gradient(#05081C 35%, #8FCBFF)'}}>
      <Header light={props.lightTheme} handleClick={() => props.themeClick()}/>

      <Wave 
       className='water' 
       fill='url(#gradient)' 
       options={{height: 40, amplitude: 40}} 
       id="wave" 
       svgPathId="wavePath"
       svgId="waveSvg"
      >
        <defs >
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="20%"  stopColor="#006FA3" />
            <stop offset="90%" stopColor="#000F30" />
          </linearGradient>
        </defs>

        
        <image 
          href={!props.light ? logos.logoDark : logos.logoLight}
          id="sailboat" 
          width="7rem"
          y="-105"
          className="sailboat"
          
        >
          <animateMotion 
            href="#sailboat" 
            dur='750s'
            begin='0s'
            repeatCount="indefinite" 
            from='0 -150'
            to='10 -150'
          >
            <mpath href="#wavePath" />
          </animateMotion>
        </image>
      
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

  const logos = AppStyles.icon.images;

  return (
    
      <div className='homescreen'>
      <AboutPopup visible={popup === 'about-me'}/>
      <Center lightTheme={light} themeClick={() => setLight(!light)}/>

      <SideBar >
        <Group name="Me">
          <Tab name='About Me' img={logos.logoDark} onClick={() => popupClick("about-me")}/>
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
  )
}

export default HomeScreen;