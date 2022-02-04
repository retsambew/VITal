import React, {useEffect, useState} from 'react'
import SideBar from './SideBar.js';
import Card from './Card.js'

const View = () => {
    const [events, setEvent] = useState([{
        name: '',
        desc: '',
        host: '',
        reward: '',
        eleg: '',
        date: '',
        link: '',
        logo: '',
    }]);

    useEffect(() => {
        fetch("/event").then(res => {
            if(res.ok){
                return res.json();
            }
        }).then(jsonRes => setEvent(jsonRes));
        
    });

    return (
        <div>
            <div className='text-center my-3'>
               <h2 className='shadow-lg p-2 px-4' style={{display:'inline-block', borderRadius: '15px', background:'#050A30', color: '#F0BC58'}}>Upcoming Events</h2><hr/>
            </div>
            <div className='row'>
                <div className='col-2'>
                    <SideBar/>
                </div>
                <div className='col-10'>
                <div className='row row-cols-1 row-cols-md-1 g-4' style={{margin:'auto'}}>
                    {events.map( event =>
                            <div className='col'>
                            <Card name={event.name} host={event.host} desc={event.desc} logo={event.logo} date={event.date} link={event.link} />
                        </div>
                    )}
                </div>
                </div>
            </div>
        </div>
    )
}

export default View;