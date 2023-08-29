import Wave from 'react-wavify'
import { useEffect, useState, useRef } from 'react';
import { isMobile } from 'react-device-detect'
import {AppStyles} from '../../AppStyles';
import './Playground.css';

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

function Playground() {

  const [light, setLight] = useState(true);
  const [popup, setPopup] = useState(null);

  return (
    
      <div className='homescreen'>
      <Center lightTheme={light} themeClick={() => setLight(!light)}/>
    </div>
  )
}

export default Playground;