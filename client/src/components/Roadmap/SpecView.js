import React, {useEffect, useState} from 'react'
import SideBar from './SideBar.js';
import Card from './Card.js'
import { useParams } from 'react-router';

const View = () => {
    const [roadmaps, setRoadmap] = useState([{
        title:'', auth:'', platform:'', link:'', year:'', section:'', img:'',
    }]);

    let {sec}=useParams();
    useEffect(() => {
        fetch("/roadmap/"+sec).then(res => {
            if(res.ok){
                return res.json();
            }
        }).then(jsonRes => setRoadmap(jsonRes));
        {console.log(roadmaps)}
    });

    return (
        <div>
            <div className='text-center my-3'>
               <h2 className='shadow-lg p-2 px-4' style={{display:'inline-block', borderRadius: '15px', background:'#050A30', color: '#F0BC58'}}>Roadmaps</h2><hr/>
            </div>
            <div className='row'>
                <div className='col-2'>
                    <SideBar/>
                </div>
                <div className='col-10'>
                <div className='row row-cols-1 row-cols-md-2 g-4 mx-5' style={{margin:'auto'}}>
                    {roadmaps.map( roadmap =>
                        <div className='col'>
                            <Card title={roadmap.title} auth={roadmap.auth} plt={roadmap.platform} img={roadmap.img} link={roadmap.link}/>
                        </div>
                    )}
                </div>
                </div>
            </div>
        </div>
    )
}

export default View;