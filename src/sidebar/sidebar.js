import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import './sidebar.css'

  export const Divider = (props) => {
    const styles = {
      background: props.background ?? '#757F95'
    }

    return <div className='divider-bar' style={styles}/>
  }

  export const Tab = (props) => {
    const styles = {
      width: props.ext ? '15em' : '3em',
      justifyContent: props.ext ? 'space-between' : 'center',
      borderColor: props.accent ?? '#757F95',
      background: props.background ?? 'none'
    }

    return (
        <button 
         className='tab'
         style={styles}
         onClick={(val) => { 
          props.onClick && props.onClick(val);
          props.url && window.open(props.url, "_self");
         }}
        >
          <img src={props.img} alt={props.name} className='icon-image'/>
          {props.ext && props.name}
        </button>
    ) 
  }

  export const Group = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    const styles = {
      color: props.accent ?? 'lightskyblue',
      borderColor: props.accent ?? 'lightskyblue',
      borderTop: props.borderVisible ? '1px solid grey' : 'none',
      borderBottom: props.borderVisible ? '1px solid grey' : 'none'
    }

    const rotateArrow = {
      transform: !collapsed && 'rotate(-45deg)'
    }

    return (
      <div className='group-wrapper' style={styles} >

        <button className='group-button' onClick={() => setCollapsed(!collapsed)} style={styles}>
          
          <b style={props.ext ? {fontSize: '150%'} : {fontSize: '100%'}}>{props.name}</b>
          {props.ext && <img className='collapse-arrow' src='/down_arrow.png' style={rotateArrow} alt='down'/>}
        </button>

        {!collapsed && 
        <div className='group-container' style={styles}>
          {
            React.Children.map(
              props.children,
              (child, i) => {
                return React.cloneElement(child, {
                  ext: props.ext
                })
            })
          }
        </div>
        }

      </div>
    )
  }
  
  export const SideBar = (props) => {
    const [visible, setVisible] = useState(true);
    const [extended, setExtended] = useState(false);

    const menuButton = <img src="/menu.png" alt="Hide Menu" className='menu-button' onClick={() => setVisible(!visible)}/>

    const styles = {
      background: props.background ?? '#1e2127',
      boxShadow: extended && '2px 0px 10px 2px rgba(0,0,0,.5)',
      fontSize: props.size ?? '55%'
    }

    return visible ? (
      <div className='sidebar-container' 
      onMouseEnter={() => setTimeout(() => setExtended(true), 150)} 
      onMouseLeave={() => setTimeout(() => setExtended(false), 150)} 
      style={styles}
      >
        <Scrollbars 
         autoHeight
         autoHeightMin={'100vh'}
         renderView={props => <div {...props} className="scroll-view"/>}
        >
          {React.Children.map(
            props.children,
            (child, i) => {
              return React.cloneElement(child, {
                ext: extended
              })
            }
          )}
          {menuButton}
        </Scrollbars>
      </div>
    )
    : menuButton;
  }