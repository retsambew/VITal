import React, {useEffect, useState} from 'react'
import SideBar from './SideBar.js';
import Card from './Card.js'

const View = () => {
    const [clubs, setClubs] = useState([{
        name: '',
        core: '',
        cord: '',
        desc: '',
        links: '',
        logo: '',
    }]);

    useEffect(() => {
        fetch("/clubs").then(res => {
            if(res.ok){
                return res.json();
            }
        }).then(jsonRes => setClubs(jsonRes));
        
    });

    return (
        <div>
            <div className='text-center my-3'>
               <h2 className='shadow-lg p-2 px-4' style={{display:'inline-block', borderRadius: '15px', background:'#050A30', color: '#F0BC58'}}>Clubs and Chapters</h2><hr/>
            </div>
            <div className='row'>
                <div className='col-2'>
                    <SideBar/>
                </div>
                <div className='col-10'>
                <div className='row row-cols-1 row-cols-md-1 g-4' style={{margin:'auto'}}>
                    {clubs.map( club =>
                            <div className='col'>
                            <Card name={club.name} desc={club.desc} logo={club.logo} />
                        </div>
                    )}
                </div>
                </div>
            </div>
        </div>
    )
}

export default View;