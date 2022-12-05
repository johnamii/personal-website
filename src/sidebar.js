import React, { useState } from 'react'
import './App.css'
import AppStyles from './AppStyles'
  
  const IconButton = (props) => {
  
  //props.extended
    return (
      <a href={props.url}>
        <button className='sidebar-icon' 
        href='https://github.com/johnamii' 
        style={props.ext ? {width: '25vh'} : {width:'5vh'}}
        onClick={(val) => { props.onClick && props.onClick(val)}}
        >
          <img src={props.img} alt={props.name} style={{height: '70%'}}/>
          {props.ext ? props.name : ''}
        </button>
      </a>
    )
    
  }
  
  export const MobileBar = (props) => {
    return (
      <div className='mobile-bar'>
        <IconButton name='GitHub' url='https://github.com/johnamii' img='/github-light.png' />
        <IconButton name='PokeTheme Battles' url='https://poketheme.johnamii.com' img={AppStyles.icon.images.poketheme} />
        <IconButton name='Terni Lapilli' url='https://terni.johnamii.com' img='/pebbles.png'/>
      </div>
    )
  }
  
  export const SideBar = (props) => {
    const [extended, setExtended] = useState(false);
  
    return (
      <div className='sidebar' 
      onMouseEnter={() => setExtended(true)} 
      onMouseLeave={() => setExtended(false)} 
      style={extended ? {width:'15%', boxShadow: '2px 0px 10px 2px rgba(0,0,0,.5)'} : {width: '4%'}}
      >
        <div className='sidebar-title' style={extended ? {fontSize:'large'} : {}}> <b> Me </b></div>
        
        <IconButton name='About Me' img='/sailboat.png' ext={extended} onClick={(val) => {props.popupClick('about-me')}}/>
        <IconButton name='GitHub' url='https://github.com/johnamii' img='/github-light.png' ext={extended}/>
  
        <div className='divider-bar'/>
  
        <div className='sidebar-title' style={extended ? {fontSize:'large'} : {}}> <b> Projects </b></div>
        <IconButton name='PokeTheme Battles' url='https://poketheme.johnamii.com' img='/pokeballs.png' ext={extended}/>
        <IconButton name='Terni Lapilli' url='https://terni.johnamii.com' img='/pebbles.png' ext={extended}/>

        
      </div>
    )
  }