import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
// import { socialsData } from '../../data/socialsData';

import sailboatRight from '../../assets/png/sailboat_white.png';
import sailboatLeft from '../../assets/png/sailboat_white_left.png';


// import {
//     FaTwitter,
//     FaLinkedin,
//     FaGithub,
//     FaYoutube,
//     FaBlogger,
// } from 'react-icons/fa';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));
    const classes = useStyles();


    ////////////////////////////////////////////////////////////////////

    // A custom hook that returns the mouse position
    const useMousePosition = () => {
        const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    
        useEffect(() => {
            const updateMousePosition = (ev) => {
                setMousePosition({ x: ev.clientX, y: ev.clientY });
            };

            window.addEventListener("mousemove", updateMousePosition);

            return () => window.removeEventListener("mousemove", updateMousePosition);
        }, []);
    
        return mousePosition;
    };

    // Get the mouse position from the custom hook
    const mousePosition = useMousePosition();

    const [sailboatOnRight, setSailboatOnRight] = useState(true);

    var sailboatRef = useRef();
    var wavePathRef = useRef();
    var wrapperRef = useRef();

    // Define the start and end ratio of the portion of the svg path to follow
    const startRatio = 0.0075;

    // A useEffect hook that updates the image position based on the mouse position and the svg path
    useEffect(() => {
        if (window.scrollY < window.innerHeight) {
            const wrapper = wrapperRef.current;
            const image = sailboatRef.current;
            const wave = wavePathRef.current;
            const svgCanvas = document.querySelector("#svgCanvas");

            const pathLength = wave.getTotalLength();
            const svgBox = svgCanvas.getBoundingClientRect();
            let imgBox = image.getBoundingClientRect();

            let endRatio = svgBox.width / 18000;

            // Calculate the relative mouse position within the svg element
            const relativeX = mousePosition.x - svgBox.left;

            // Calculate the distance ratio of the relative mouse position along the x-axis of the svg element
            const distanceRatio = Math.min(Math.max(relativeX / svgBox.width, 0), 1);

            // Calculate the point on the svg path that corresponds to the distance ratio within the portion range
            const point = wave.getPointAtLength(
                startRatio * pathLength + distanceRatio * (endRatio - startRatio) * pathLength
            );

            let yOffset = -85;
            const transformX = point.x - (imgBox.width / 2);
            const transformY = yOffset + point.y;

            setSailboatOnRight(imgBox.x < mousePosition.x)

            wrapper.style.transform = `translateX(${transformX}px) translateY(${transformY}px)`;
        }

    }, [mousePosition]);

    return (
        <div className='landing'>
            <div className='landing--container' id='svgCanvas'>
                <div className='wave--container'>
                <svg className='wave'  version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                            <stop stopColor="rgba(0, 157.008, 214.388, 1)" offset="0%"></stop>
                            <stop stopColor="rgba(253.093, 228.504, 180.995, 0.52)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path style={{opacity:1}} fill="url(#sw-gradient-0)" d="M0,17L60,17C120,17,240,17,360,17C480,17,600,17,720,39.7C840,62,960,108,1080,113.3C1200,119,1320,85,1440,62.3C1560,40,1680,28,1800,34C1920,40,2040,62,2160,76.5C2280,91,2400,96,2520,87.8C2640,79,2760,57,2880,51C3000,45,3120,57,3240,76.5C3360,96,3480,125,3600,116.2C3720,108,3840,62,3960,56.7C4080,51,4200,85,4320,85C4440,85,4560,51,4680,45.3C4800,40,4920,62,5040,68C5160,74,5280,62,5400,48.2C5520,34,5640,17,5760,14.2C5880,11,6000,23,6120,39.7C6240,57,6360,79,6480,79.3C6600,79,6720,57,6840,42.5C6960,28,7080,23,7200,39.7C7320,57,7440,96,7560,119C7680,142,7800,147,7920,150.2C8040,153,8160,153,8280,136C8400,119,8520,85,8580,68L8640,51L8640,170L8580,170C8520,170,8400,170,8280,170C8160,170,8040,170,7920,170C7800,170,7680,170,7560,170C7440,170,7320,170,7200,170C7080,170,6960,170,6840,170C6720,170,6600,170,6480,170C6360,170,6240,170,6120,170C6000,170,5880,170,5760,170C5640,170,5520,170,5400,170C5280,170,5160,170,5040,170C4920,170,4800,170,4680,170C4560,170,4440,170,4320,170C4200,170,4080,170,3960,170C3840,170,3720,170,3600,170C3480,170,3360,170,3240,170C3120,170,3000,170,2880,170C2760,170,2640,170,2520,170C2400,170,2280,170,2160,170C2040,170,1920,170,1800,170C1680,170,1560,170,1440,170C1320,170,1200,170,1080,170C960,170,840,170,720,170C600,170,480,170,360,170C240,170,120,170,60,170L0,170Z">
                    </path>
                    <defs>
                        <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
                            <stop stopColor="rgba(5.4, 88.007, 143.808, 1)" offset="0%"></stop>
                            <stop stopColor="rgba(142.106, 212.111, 181.042, 1)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path ref={wavePathRef} style={{ opacity:.9}} fill="url(#sw-gradient-1)" d="M0,17L60,36.8C120,57,240,96,360,96.3C480,96,600,57,720,51C840,45,960,74,1080,73.7C1200,74,1320,45,1440,42.5C1560,40,1680,62,1800,70.8C1920,79,2040,74,2160,65.2C2280,57,2400,45,2520,42.5C2640,40,2760,45,2880,39.7C3000,34,3120,17,3240,11.3C3360,6,3480,11,3600,36.8C3720,62,3840,108,3960,116.2C4080,125,4200,96,4320,82.2C4440,68,4560,68,4680,82.2C4800,96,4920,125,5040,127.5C5160,130,5280,108,5400,107.7C5520,108,5640,130,5760,138.8C5880,147,6000,142,6120,138.8C6240,136,6360,136,6480,133.2C6600,130,6720,125,6840,107.7C6960,91,7080,62,7200,42.5C7320,23,7440,11,7560,22.7C7680,34,7800,68,7920,76.5C8040,85,8160,68,8280,65.2C8400,62,8520,74,8580,79.3L8640,85L8640,170L8580,170C8520,170,8400,170,8280,170C8160,170,8040,170,7920,170C7800,170,7680,170,7560,170C7440,170,7320,170,7200,170C7080,170,6960,170,6840,170C6720,170,6600,170,6480,170C6360,170,6240,170,6120,170C6000,170,5880,170,5760,170C5640,170,5520,170,5400,170C5280,170,5160,170,5040,170C4920,170,4800,170,4680,170C4560,170,4440,170,4320,170C4200,170,4080,170,3960,170C3840,170,3720,170,3600,170C3480,170,3360,170,3240,170C3120,170,3000,170,2880,170C2760,170,2640,170,2520,170C2400,170,2280,170,2160,170C2040,170,1920,170,1800,170C1680,170,1560,170,1440,170C1320,170,1200,170,1080,170C960,170,840,170,720,170C600,170,480,170,360,170C240,170,120,170,60,170L0,170Z">
                    </path>
                    
                </svg>
                <div ref={wrapperRef} className='boat-wrapper'>
                    <img ref={sailboatRef} src={sailboatOnRight ? sailboatRight : sailboatLeft} className='sailboat'/>
                </div>
                </div>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
                >
                   
                </div>
                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.secondary,
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.desciption}</p>

                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Button className={classes.resumeBtn}>
                                        Résumé
                                    </Button>
                                </a>
                            )}
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <Button className={classes.contactBtn}>
                                    Contact
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
