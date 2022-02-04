import {Link} from "react-router-dom";

const section = () => {
    return(
        <div style={{borderRight:'1px solid grey', height:'100%'}}>
            <br/>
            <h5 className='mx-3'>Filter</h5>
            <ul>
                <Link to='/roadmaps' class='text-success'><li>View All</li></Link>
                <Link to='/roadmaps/webd' class='text-success'><li>Web Development</li></Link>
                <Link to='/roadmaps/cp' class='text-success'><li>Competitive Programming</li></Link>
                <Link to='/roadmaps/blockc' class='text-success'><li>BlockChain</li></Link>
                <Link to='/roadmaps/dsa' class='text-success'><li>Data Structure and Algorithm</li></Link>
            </ul>
            <div style={{textAlign:'center'}}>
                <Link to='/roadmaps/add'>Add a Roadmap</Link>
            </div>
        </div>
    )
}

export default section;