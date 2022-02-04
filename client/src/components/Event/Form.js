import React, {useState} from 'react';
import axios from 'axios';
import FileBase from 'react-file-base64';

const Form = () => {
    const [clubData,setClubData]=useState({name:'', desc:'', host:'', reward:'', eleg: '', date:'', link: '', logo:''});
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:5000/event/add', clubData);
        alert('submitted successfully!');
        clear();
    }

    const clear = () => {
        setClubData({ ...clubData, name:'', desc:'', host:'', reward:'', eleg: '', date:'', link: '', logo:''});
        eventName.value='';
        eventDesc.value='';
        eventHost.value='';
        eventEleg.value='';
        eventPrize.value='';
        eventLink.value='';
        eventDate.value='';
    };
    
    return (
        <div className='container align-items-center'>
            <h2 className='my-4'>Enter Event Details</h2>
            <form className='row g-3'>
                <div className='form-group col-6'>
                    <label className='form-label' htmlFor='eventName'>Name</label>
                    <input className='form-control' id='eventName' placeholder='Enter Event Name' onChange={(e) => setClubData({ ...clubData, name: e.target.value })}/>
                </div>

                <div className='form-group col-6'>
                    <label className='form-label' htmlFor='eventHost'>Host</label>
                    <input className='form-control' id='eventHost' placeholder='Enter Event Host' onChange={(e) => setClubData({ ...clubData, host: e.target.value })}/>
                </div>

                <div className='form-group col-6'>
                    <label className='form-label' htmlFor='eventPrize'>Prize</label>
                    <textarea className='form-control' id='eventPrize' placeholder='Enter Winning Prize' onChange={(e) => setClubData({ ...clubData, reward: e.target.value })}/>
                </div>

                <div className='form-group col-6'>
                    <label className='form-label' htmlFor='eventEleg'>Elegibility Criteria</label>
                    <textarea className='form-control' id='eventEleg' placeholder='Enter Eligibility Criteria' onChange={(e) => setClubData({ ...clubData, eleg: e.target.value })}/>
                </div>

                <div className='form-group col-8'>
                    <label className='form-label' htmlFor='eventDesc'>Breif Description</label>
                    <textarea className='form-control' id='eventDesc'onChange={(e) => setClubData({ ...clubData, desc: e.target.value })}/>
                </div>

                <div className='form-group col-4'>
                    <label className='form-label' htmlFor='eventDate'>Closing Date</label>
                    <input type='date' className='form-control' id='eventDate' placeholder='Enter Eligibility Criteria' onChange={(e) => setClubData({ ...clubData, date: e.target.value })}/>
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor='eventLink'>Registration Link</label>
                    <input className='form-control' id='eventLink' placeholder='Enter Redirect Link for event'onChange={(e) => setClubData({ ...clubData, link: e.target.value })}/>
                </div>

                <div className='form-group'>
                    <label className='form-label'>Select Logo:</label><br/>
                    <FileBase type='file' multiple={false} onDone={({base64}) => {setClubData({...clubData, logo: base64})}} />
                </div>
                <button onClick={handleSubmit} className='btn btn-large btn-info'>Submit</button>
            </form>
        </div>
    )
}

export default Form;