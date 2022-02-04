import react, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css'

const study = () => {
    return(
        <div>
            <ul className='dropmenu' style={{left: '44.5%'}}>
                <li><Link to='/notes' className='droplink'>Notes</Link></li>
                <li><Link to='/papers' className='droplink'>Previous Year Papers</Link></li>
                <li><Link to='/roadmaps' className='droplink'>RoadMaps</Link></li>
                <li><Link to='/courses' className='droplink'>Courses and Certifications</Link></li>
            </ul>
        </div>
    );
}

export default study;