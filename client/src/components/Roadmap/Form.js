import React, {useState} from 'react';
import axios from 'axios';
import FileBase from 'react-file-base64';

const Form = () => {
    const [Data,setData]=useState({ title:'', auth:'', platform:'', link:'', year:'', section:'', img:''});
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:5000/roadmap/add', Data);
        alert('submitted successfully!');
        clear();
    }

    const clear = () => {
        setData({ ...Data, title:'', auth:'', platform:'', link:'', year:'', section:''});
        mapTitle.value='';
        mapAuth.value='';
        mapPlt.value='';
        mapLink.value='';
        mapYr.value='';
        mapSec.value='';
    };
    
    return (
        <div className='container align-items-center'>
            <h2 className='my-4'>Enter RoadMap Details</h2>
            <form className='row g-3'>
            <div className='form-group'>
                    <label className='form-label' htmlFor='mapTitle'>Title</label>
                    <input className='form-control' id='mapTitle' placeholder='Enter RoadMap Title' onChange={(e) => setData({ ...Data, title: e.target.value })}/>
                </div>

                <div className='form-group col-6'>
                    <label className='form-label' htmlFor='mapAuth'>Author</label>
                    <input className='form-control' id='mapAuth' placeholder='Enter RoadMap Author' onChange={(e) => setData({ ...Data, auth: e.target.value })}/>
                </div>

                <div className='form-group col-6'>
                    <label className='form-label' htmlFor='mapPlt'>Platform</label>
                    <input type='text' className='form-control' id='mapPlt' placeholder='Enter Platform course is on' onChange={(e) => setData({ ...Data, platform: e.target.value })}/>
                </div>

                <div className='form-group col-6'>
                    <label className='form-label' htmlFor='mapYr'>Creation Year</label>
                    <input type='text' className='form-control' id='mapYr' placeholder='Ex. 2020' onChange={(e) => setData({ ...Data, year: e.target.value })}/>
                </div>

                <div className='form-group col-6'>
                    <label className='form-label' htmlFor='mapSec'>Select Section</label>
                    <input type='text' className='form-control' id='mapSec'onChange={(e) => setData({ ...Data, section: e.target.value })}/>
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor='mapLink'>Redirect Link</label>
                    <input className='form-control' id='mapLink' placeholder='Enter Redirect Link for Roadmap'onChange={(e) => setData({ ...Data, link: e.target.value })}/>
                </div>

                <div className='form-group'>
                    <label className='form-label'>Select Thubnail:</label><br/>
                    <FileBase type='file' multiple={false} onDone={({base64}) => {setData({...Data, img: base64})}} />
                </div>
                <button onClick={handleSubmit} className='btn btn-large btn-info'>Submit</button>
            </form>
        </div>
    )
}

export default Form;