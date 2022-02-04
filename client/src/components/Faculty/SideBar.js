import {Link} from "react-router-dom";

const section = () => {
    return(
        <div style={{borderRight:'1px solid grey', height:'100%'}}>
            <br/>
            <h5 className='mx-3'>Sort</h5>
            <ul>
            <li>sort by name</li>
            <li>...</li>
            </ul>
            <Link to='/faculty/add' className='mx-5'>Add Faculty</Link>
        </div>
    )
}

export default section;