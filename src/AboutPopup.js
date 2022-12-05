import React, { useState } from 'react'
import AppStyles from "./AppStyles";
import './App.css'
import texts from './texts';

const AboutPopup = (props) => {

    const [activeTexts, setActiveTexts] = useState(texts.about_me.who);
    const [activeTab, setActiveTab] = useState('Who');

    const  AboutTabs = (props ) => {

      const AboutTab = (props) => {
        const [focused, setFocused] = useState(false);

        return (
          <button 
            className='about-tab' 
            onClick={() => {
                setActiveTab(props.name); setActiveTexts(props.textSet);
            }}
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
          <AboutTab name='Who' textSet={texts.about_me.who}/>
          <AboutTab name='Interests' textSet={texts.about_me.interests}/>
          <AboutTab name='This Page' textSet={texts.about_me.this_page}/>
        </div>
      )
    }
    
    if (props.visible) {
        return (
            <div className='popup-window'>
              <div style={{color:'black', textAlign:'center', fontSize:'xx-large'}}>
                About Me
              </div>
              <AboutTabs/>
              <p style={AppStyles.font.paragraph}>
                {activeTexts.description}
              </p>

            </div>
        )
    }
    // return nothing if invisible
    return <></>
}
export default AboutPopup