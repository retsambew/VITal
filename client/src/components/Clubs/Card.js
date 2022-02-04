import {Link} from 'react-router-dom'

const card = (props) => {

    return(
    <div className="card shadow bg-body rounded-3" >
        <div className='row g-0'>
            <div className='col-md-4'>
                <img src={props.logo} className="img-fluid p-4 rounded-3" alt="..."/>
            </div>
            <div className='col-md-8'>
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <p class="card-text text-muted">{props.desc}</p><br/>
                    <Link to="/" className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    </div>    
    )
}

export default card;