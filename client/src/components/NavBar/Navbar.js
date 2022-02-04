import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../images/logo512.png'

import Signup from './SignUp.js';
import StudyDrop from './StudyDrop.js';
import VitDrop from './VITDrop'
import ODrop from './OtherDrop'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [studyDrop, setsDrop] = useState(false);
    const [vitDrop, setvDrop] = useState(false);
    const [otherDrop, setoDrop] = useState(false);

    const handleClick = () => {setClick(!click)};
    const closeMobileMenu = () => setClick(false);

    const drop = (e) => {
        switch(e){
            case 1:
                if (window.innerWidth < 960) {
                setsDrop(false);
                } else {
                setsDrop(true);
                }
                break;
            case 2:
                setsDrop(false);
                break;
            case 3:
                if (window.innerWidth < 960) {
                setvDrop(false);
                } else {
                setvDrop(true);
                }
                break;
            case 4:
                setvDrop(false);
                break;
            case 5:
                if (window.innerWidth < 960) {
                setoDrop(false);
                } else {
                setoDrop(true);
                }
                break;
            case 6:
                setoDrop(false);
                break;
        }
    }

    return (
        <nav className='main-nav fixed-top'>
            <Link to='/' className='nav-logo'>
                <img src={logo} className='logo-img'/>
                <h1 className='logo-brand'>VITal</h1>
            </Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='submenu' onMouseEnter={()=>drop(1)} onMouseLeave={()=>drop(2)}>
                    <Link to='/' className='menuitem'>Study Material <i className='fas fa-caret-down' /></Link>
                    {(studyDrop && <StudyDrop/>)}
                </li>
                <li className='submenu' onMouseEnter={()=>drop(3)} onMouseLeave={()=>drop(4)}>
                    <Link to='/' className='menuitem'>Know VIT <i className='fas fa-caret-down' /></Link>
                    {(vitDrop && <VitDrop/>)}
                </li>
                <li className='submenu'><Link to='/event' className='menuitem'>Events and Hackathons</Link></li>
                <li className='submenu' onMouseEnter={()=>drop(5)} onMouseLeave={()=>drop(6)}>
                    <Link to='/' className='menuitem'>Coming Soon <i className='fas fa-caret-down' /></Link>
                    {(otherDrop && <ODrop/>)}
                </li>
            </ul>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
        </nav>
    )
}

export default Navbar;