import React, { useState } from 'react'
import {AppStyles, Texts} from "./AppStyles";
import './App.css'
import { isMobile } from 'react-device-detect';

const AboutPopup = (props) => {

    const [activeTexts, setActiveTexts] = useState(Texts.about.me);
    const [activeTab, setActiveTab] = useState('Me');

    const  AboutTabs = (props ) => {

      const AboutTab = (props) => {
        const [focused, setFocused] = useState(false);

        return (
          <button 
            className='about-tab' 
            onClick={() => { setActiveTab(props.name); setActiveTexts(props.textSet); }}
            onMouseEnter={() => setFocused(true)}
            onMouseLeave={() => setFocused(false)}
            style={{background:focused ? 'rgb(200,200,200,.3)' : 'transparent', 
                    borderBottom:activeTab === props.name ? '4px solid #006FA3' : 'none',
                  }}
            >
            {props.name}
          </button>
        )
      }

      return (
        <div className='about-tabs'>
          <AboutTab name='Me' textSet={Texts.about.me}/>
          <AboutTab name='Interests' textSet={Texts.about.interests}/>
          <AboutTab name='This Page' textSet={Texts.about.this_page}/>
        </div>
      )
    }
    
    if (props.visible) {
        return (
            <div className='popup-window' style={isMobile ? {top: '50vh', width: '90vw'} : {}}>
              <div style={{color:'black', textAlign:'center', fontSize:'xx-large'}}>
                About Me
              </div>
              <AboutTabs/>
              <p style={AppStyles.font.paragraph}>
                <li>{activeTexts.description}</li>
                <li>{activeTexts.description2}</li>
                <li>{activeTexts.description3}</li>
              </p>

            </div>
        )
    }
}
export default AboutPopup