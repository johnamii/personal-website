import React, { useState } from 'react'
import {AppStyles} from '../AppStyles'
import './sidebar.css'

  export const IconButton = (props) => {
  
    return (
      <a href={props.url}>
        <button className='sidebar-icon'
        href='https://github.com/johnamii' 
        style={props.ext ? {width: '12rem'} : {width:'2.5rem'}}
        onClick={(val) => { props.onClick && props.onClick(val)}}
        >
          <img src={props.img} alt={props.name} className='icon-image'/>
          {props.ext && props.name}
        </button>
      </a>
    ) 
  }
  
  export const SideBar = (props) => {
    const [extended, setExtended] = useState(false);
  
    return (
      <div className='sidebar' 
      onMouseEnter={() => setExtended(true)} 
      onMouseLeave={() => setExtended(false)} 
      style={extended ? {boxShadow: '2px 0px 10px 2px rgba(0,0,0,.5)'} : {}}
      >
        <div className='sidebar-title' style={extended ? {fontSize:'large'} : {}}> <b> Me </b></div>
        
        <IconButton name='About Me' img={AppStyles.icon.images.logoDark} ext={extended} onClick={(val) => {props.popupClick('about-me')}}/>
        <IconButton name='GitHub' url='https://github.com/johnamii' img='/github-light.png' ext={extended}/>
  
        <div className='divider-bar'/>
  
        <div className='sidebar-title' style={extended ? {fontSize:'large'} : {}}> <b> Projects </b></div>

        <IconButton name ='Scootly.io' url="https://github.com/scootly/react-native-client" img='/scootly.png' ext={extended}/>
        <IconButton name='PokeTheme Battles' url='https://poketheme.johnamii.com' img='/pokeballs.png' ext={extended}/>
        <IconButton name='Terni Lapilli' url='https://terni.johnamii.com' img='/pebbles.png' ext={extended}/>

        
      </div>
    )
  }