import React, { useEffect, useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../styles/BttButton.css'

function BttButton() {
    const [bttVisible, setBttVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 550
                ? setBttVisible(true)
                : setBttVisible(false)
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
        console.log("Scrolling")
    }
    return (
        <button
            className={['bttBtn ', bttVisible ? 'bttVis' : 'bttInvis'].join('')}
            onClick={scrollUp}>
            <KeyboardArrowUpIcon />
        </button>
    )
}

export default BttButton