import {Link} from 'react-router-dom'

const card = (props) => {
    return(
    <div className="card shadow bg-body rounded-3" >
        <div className='row g-0'>
            <div className='col-md-4'>
                <img src={props.logo} className="img-fluid p-3 rounded-3 h-100" alt="..."/>
            </div>
            <div className='col-md-8'>
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <h6 className="card-title">by {props.host}</h6><br/>
                    <p class="card-text text-muted">{props.desc}</p>
                    <p class='card-text'><small class="text-success">closes by: {props.date}</small></p>
                    <a href={props.link} className="btn btn-primary">View Details</a>
                </div>
            </div>
        </div>
    </div>    
    )
}

export default card;