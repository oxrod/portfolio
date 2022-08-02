import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <a target='_blank' rel='noreferrer' href='https://github.com/Oxrod'><FacebookIcon /></a>
                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/trystanrld/?hl=fr'><InstagramIcon /></a>
                <a target='_blank' rel='noreferrer' href='https://twitter.com/trystanrld'><TwitterIcon /></a>

            </div>
            <p> &copy; 2022 trystan-rolland.com</p>
        </div>
    )
}

export default Footer