import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons'

export default function MainMenu() {
    const [menuState, SetMenuState] = useState('none')
    let toggleMenu = (e) => {
        SetMenuState(menuState === 'none' ? 'block' : 'none');
        document.getElementById('menu-items').style.display = menuState;
    }
    return (
        <nav className="MainMenu">
            <FontAwesomeIcon id="toggleBtn" onClick={toggleMenu} className="mx-3" icon={faBars} size={'lg'} />
            <ul id="menu-items">
                <li>ALL CATEGORIES <FontAwesomeIcon icon={faCaretDown} size={'lg'} /></li>
                <li>Mobile Phones</li>
                <li>Cars</li>
                <li>Motorcycles</li>
                <li>Houses</li>
                <li>TV - Video - Audio</li>
                <li>Tablets</li>
                <li>Land and Plots</li>
            </ul>
        </nav>
    )
}