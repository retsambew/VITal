import react from "react";
import {Link} from 'react-router-dom'

const card = (props) => {

    return(
    <div className="card h-100 shadow bg-body rounded-3" style={{width: '27rem'}}>
        <img src={props.img} className="card-img-top px-4 pt-4 rounded-3 w-100 h-100" alt="..."/>
        <div className="card-body">
            <h4 className="card-title">{props.title}</h4>
            <h5 className='card-subtitle mb-2 text-muted'>By {props.auth}</h5>
            <p class="card-text text-success">Available at {props.plt}</p>
            <a href={props.link} className="btn btn-primary">View Course</a>
        </div>
    </div>    
    )
}

export default card;