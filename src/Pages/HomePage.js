import React from 'react'
import styled from 'styled-components'
import Particle from '../Components/Particle';
import GithubIcon from '@material-ui/icons/GitHub';

export default function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-container">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Daniel Marcos</span></h1>
                <p>
                Dedicated and efficient full stack developer with 2+ years experience in the IT industry. Background in both F/E and B/E technologies.
                 Passionate about FrontEnd and specialized in Javascript with either Vue or React.js.
                </p>
                <div className="icons">
                    <a href="https://github.com/dmarcosc" target="_blank" className="icon i-github" rel="noreferrer">
                        <GithubIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
   .typography{
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       text-align: center;
       width: 80%;
       .icons{
           display: flex;
           justify-content: center;
           margin-top: 1rem;
           .icon{
               border: 2px solid var(--border-color);
               display: flex;
               align-items: center;
               justify-content: center;
               border-radius: 50%;
               transition: all .4s ease-in-out;
               cursor: pointer;
               &:hover{
                   border: 2px solid var(--primary-color);
                   color: var(--primary-color);
               }
               &:not(:last-child){
                   margin-right: 1rem;
               }
               svg{
                   margin: .5rem;
               }
           }
       }
   }
`;
