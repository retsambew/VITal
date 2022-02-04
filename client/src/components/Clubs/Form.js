import React, {useState} from 'react';
import axios from 'axios';
import FileBase from 'react-file-base64';

const Form = () => {
    const [clubData,setClubData]=useState({name:'', core:'', cord:'', desc:'', links: '', logo:''});
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:5000/clubs/add', clubData);
        alert('submitted successfully!');
        clear();
    }

    const clear = () => {
        setClubData({ ...clubData, name:'', core:'', cord:'', desc:'', links: ''});
        clubName.value='';
        clubCore.value='';
        clubCord.value='';
        clubDesc.value='';
        clubLinks.value='';
    };
    
    return (
        <div className='container align-items-center'>
            <h2 className='my-4'>Enter Club Details</h2>
            <form className='row g-3'>
                <div className='form-group'>
                    <label className='form-label' htmlFor='clubName'>Name</label>
                    <input className='form-control' id='clubName' placeholder='Enter Club Name' onChange={(e) => setClubData({ ...clubData, name: e.target.value })}/>
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor='clubCore'>Enter Name Of Core Members</label>
                    <input className='form-control' id='clubCore' placeholder='Enter Name Of Core Members' onChange={(e) => setClubData({ ...clubData, core: e.target.value.split(',') })}/>
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor='clubCord'>Club Coordinators</label>
                    <input className='form-control' id='clubCord' placeholder='Enter Name of Club Coordinator'onChange={(e) => setClubData({ ...clubData, cord: e.target.value.split(',') })}/>
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor='clubDesc'>Description</label>
                    <textarea className='form-control' id='clubDesc'onChange={(e) => setClubData({ ...clubData, desc: e.target.value })}/>
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor='clubLinks'>Social Handles</label>
                    <input className='form-control' id='clubLinks' placeholder='Enter Social Links (seperated by ,)'onChange={(e) => setClubData({ ...clubData, links: e.target.value.split(',') })}/>
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