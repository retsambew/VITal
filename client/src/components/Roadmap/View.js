import React, {useEffect, useState} from 'react'
import SideBar from './SideBar.js';
import Card from './Card.js'

const View = () => {
    const [raodmaps, setRoadmap] = useState([{
        title:'', auth:'', platform:'', link:'', year:'', section:'', img:'',
    }]);

    useEffect(() => {
        fetch("/roadmap").then(res => {
            if(res.ok){
                return res.json();
            }
        }).then(jsonRes => setRoadmap(jsonRes));
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
                    {raodmaps.map( roadmap =>
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