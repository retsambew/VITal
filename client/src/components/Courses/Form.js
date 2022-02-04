import React, {useState} from 'react';
import axios from 'axios';
import FileBase from 'react-file-base64';

const Form = () => {
    const [Data,setData]=useState({ title:'', auth:'', platform:'', link:'', year:'', section:'', img:''});
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:5000/courses/add', Data);
        alert('submitted successfully!');
        clear();
    }

    const clear = () => {
        setData({ ...Data, title:'', auth:'', platform:'', link:'', year:'', section:''});
        courseTitle.value='';
        courseAuth.value='';
        coursePlt.value='';
        courseLink.value='';
        courseYr.value='';
        courseSec.value='';
    };
    
    return (
        <div className='container align-items-center'>
            <h2 className='my-4'>Enter Course Details</h2>
            <form className='row g-3'>
            <div className='form-group'>
                    <label className='form-label' htmlFor='courseTitle'>Title</label>
                    <input className='form-control' id='courseTitle' placeholder='Enter Course Title' onChange={(e) => setData({ ...Data, title: e.target.value })}/>
                </div>

                <div className='form-group col-6'>
                    <label className='form-label' htmlFor='courseAuth'>Author</label>
                    <input className='form-control' id='courseAuth' placeholder='Enter Course Author' onChange={(e) => setData({ ...Data, auth: e.target.value })}/>
                </div>

                <div className='form-group col-6'>
                    <label className='form-label' htmlFor='coursePlt'>Platform</label>
                    <input type='text' className='form-control' id='coursePlt' placeholder='Enter Platform course is on' onChange={(e) => setData({ ...Data, platform: e.target.value })}/>
                </div>

                <div className='form-group col-6'>
                    <label className='form-label' htmlFor='courseYr'>Creation Year</label>
                    <input type='text' className='form-control' id='courseYr' placeholder='Ex. 2020' onChange={(e) => setData({ ...Data, year: e.target.value })}/>
                </div>

                <div className='form-group col-6'>
                    <label className='form-label' htmlFor='courseSec'>Select Section</label>
                    <input type='text' className='form-control' id='courseSec'onChange={(e) => setData({ ...Data, section: e.target.value })}/>
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor='courseLink'>Redirect Link</label>
                    <input className='form-control' id='courseLink' placeholder='Enter Redirect Link for Course'onChange={(e) => setData({ ...Data, link: e.target.value })}/>
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