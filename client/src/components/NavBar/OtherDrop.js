import { Link } from 'react-router-dom';
import './Dropdown.css'

const drop = () => {
    return(
        <div>
            <ul className='dropmenu' style={{left: '85%'}}>
                <li><Link to='/devl' className='droplink'>GPA/CGPA Calculator</Link></li>
                <li><Link to='/devl' className='droplink'>Blogs</Link></li>
                <li><Link to='/devl' className='droplink'>Internships</Link></li>
            </ul>
        </div>
    );
}

export default drop;