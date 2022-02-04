import {Link} from "react-router-dom";

const section = () => {
    return(
        <div style={{borderRight:'1px solid grey', height:'100%'}}>
            <br/>
            <h5 className='mx-3'>Filter</h5>
            <ul>
                <Link to='/courses' class='text-success'><li>View All</li></Link>
                <Link to='/courses/webd' class='text-success'><li>Web Development</li></Link>
                <Link to='/courses/cp' class='text-success'><li>Competitive Programming</li></Link>
                <Link to='/courses/blockc' class='text-success'><li>BlockChain</li></Link>
                <Link to='/courses/dsa' class='text-success'><li>Data Structure and Algorithm</li></Link>
            </ul>
            <div style={{textAlign:'center'}}>
                <Link to='/courses/add'>Add a Courses</Link>
            </div>
        </div>
    )
}

export default section;