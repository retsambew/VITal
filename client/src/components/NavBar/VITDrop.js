import react, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css'

const drop = () => {
    return(
        <div>
            <ul className='dropmenu' style={{left: '57%'}}>
                <li><Link to='/faculty' className='droplink'>Faculties</Link></li>
                <li><Link to='/clubs' className='droplink'>Clubs and Chapters</Link></li>
                <li><Link to='/event' className='droplink'>Upcoming Events</Link></li>
            </ul>
        </div>
    );
}

export default drop;