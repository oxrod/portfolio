import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css'
import BttButton from '../components/BttButton';
import { SkillsLists } from '../helpers/SkillsLists';

function Home() {
    return (
        <div className='home'>
            <BttButton />
            <div className='about'>
                <h2>Bonjour, Moi C'est Trystan</h2>
                <div className='prompt'>
                    <p>
                        Développeur Web curieux orienté Front-End, enthousiaste de découvrir de nouvelles technologies
                    </p>
                    <EmailIcon />
                    <LinkedInIcon />
                    <GitHubIcon />
                </div>
            </div>
            <div className='skills'>
                <h1>Compétences</h1>
                <ol className='skillList'>
                    {SkillsLists.map((skillList) => {
                        return (
                            <li className='SLItem'>
                                <h2>{skillList.header}</h2>
                                <span>{skillList.skills}</span>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}

export default Home