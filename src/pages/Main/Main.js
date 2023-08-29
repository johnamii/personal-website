import React from 'react'
import { Helmet } from 'react-helmet'
import { NavHashLink as NavLink } from 'react-router-hash-link'

import { Footer, Landing, About, Skills, Education, Experience, Contacts, Projects, Navbar } from '../../components'
import { SideBar, Group, Tab, Divider  } from '@johnamii/react-smart-sidebar'
import { headerData } from '../../data/headerData'

import sailboat from'../../assets/png/sailboat_white.png';
import githubLogo from '../../assets/png/github-light.png';

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            {/* <Achievement /> */}
            {/* <Services /> */}
            {/* <Testimonials /> */}
            {/* <Blog /> */}
            <Contacts />
            <Footer />

            {/* <SideBar >
                <Group name="Me">
                <Tab name='My Sea' img={sailboat} url={window.location.href + '/playground'}/>
                <Tab name='GitHub' img={githubLogo} url='https://github.com/johnamii' />
                </Group>

                <Divider/>

                <Group name="This Page">
                    <Tab name="Resume">
                        <NavLink
                            to='/#resume'
                            smooth={true}
                            spy='true'
                            duration={2000}
                        />
                    </Tab>
                </Group>

            </SideBar> */}
        </div>
    )
}

export default Main
