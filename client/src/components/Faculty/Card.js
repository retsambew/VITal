import react from "react";
import {Link} from 'react-router-dom'

const card = (props) => {

    return(
    <div className="card h-100 shadow bg-body rounded-3" style={{width: '19rem'}}>
        <img src={props.file} className="card-img-top px-4 pt-4 rounded-3 w-100 h-100" alt="..."/>
        <div className="card-body">
            <h4 className="card-title">{props.name}</h4>
            <h5 className='card-subtitle mb-2 text-muted'>{props.desn}</h5>
            <p class="card-text">{props.desc}</p>
            <Link to="/" className="btn btn-primary">View Details</Link>
        </div>
    </div>    
    )
}

export default card;