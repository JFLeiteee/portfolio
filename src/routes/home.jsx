import developerPhoto from '../assets/img/PICTURE.png'
import githubIcon from '../assets/img/github-icon.png'
import linkedinIcon from '../assets/img/linkedin-icon.png'
import curriculumIcon from '../assets/img/curriculum-icon.png'
import { useState } from 'react'
import { Context } from '../context/Context'
import { useContext } from 'react'
import Modal from '../components/modal'
import { useSpring, animated } from '@react-spring/web'

export default function Home() {

    const {handleModal, isModalOpen} = useContext(Context)

    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'scale(0.9)' },
        to: { opacity: 1, transform: 'scale(1)' }
    })

    function handleClick(id) {
        if(id == "github") {
            window.open().location.href = 'https://github.com/JFLeiteee'
        } else if (id == "linkedin") {
            window.open().location.href = 'https://www.linkedin.com/in/josé-silva-29b329249/'
        }
    }

    return(
        <>
            <animated.div class="content" style={{filter: isModalOpen ? "blur(0.2rem)" : "none", ...fadeIn}}>
                <div class="left-side">
                    <img src={developerPhoto} alt="Developer photo" class="photo"/>
                </div>

                <div class="right-side">
                    <p class="name">I'm José Silva,</p> 
                    <h1 class="highlight">A FRONTEND <br /> DEVELOPER</h1> 
                    <p class="about">who dreams big and works hard to achieve my objectives!</p>
                    
                    <div class="quick-tools">
                        <button class="social" id="github" onClick={() => handleClick("github")}><img src={githubIcon} alt="GITHUB" /></button>
                        <button class="social" id="linkedin" onClick={() => handleClick("linkedin")}><img src={linkedinIcon} alt="LINKEDIN" /></button>
                        <button class="social" id="curriculum" onClick={() => handleModal()}><img src={curriculumIcon} alt="CURRICULO" /></button>
                        <button class="projects">See my projects</button>
                    </div>
                </div>
            </animated.div> 

            { isModalOpen ? <Modal /> : null }
        </>
    )
}