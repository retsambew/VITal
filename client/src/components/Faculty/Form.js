import React, {useState} from 'react';
import axios from 'axios';
import FileBase from 'react-file-base64';

const Form = () => {
    const [facData,setFacData]=useState({name:'', desn:'', subj:'', desc:'', link: '', file:''});
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:5000/faculty/add', facData);
        alert('submitted successfully!');
        clear();
    }

    const clear = () => {
        setFacData({ ...facData, name:'', desn:'', subj:'', desc:'', link: ''});
        facName.value='';
        facDesn.value='';
        facSub.value='';
        facDesc.value='';
        facLink.value='';
    };
    
    return (
        <div className='container align-items-center'>
            <h2 className='my-4'>Enter Faculty Details</h2>
            <form className='row g-3'>
                <div className='col-6'>
                    <label className='form-label' htmlFor='facName'>Name</label>
                    <input className='form-control' id='facName' placeholder='Enter Name' onChange={(e) => setFacData({ ...facData, name: e.target.value })}/>
                </div>

                <div className='col-6'>
                    <label className='form-label' htmlFor='facDesn'>Designation</label>
                    <input className='form-control' id='facDesn' placeholder='Enter Designation' onChange={(e) => setFacData({ ...facData, desn: e.target.value })}/>
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor='facSub'>Courses Taught</label>
                    <input className='form-control' id='facSub' placeholder='Enter Courses Taught'onChange={(e) => setFacData({ ...facData, subj: e.target.value.split(',') })}/>
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor='facDesc'>Description</label>
                    <textarea className='form-control' id='facDesc'onChange={(e) => setFacData({ ...facData, desc: e.target.value })}/>
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor='facLink'>Social Handles</label>
                    <input className='form-control' id='facLink' placeholder='Enter Social Links (seperated by ,)'onChange={(e) => setFacData({ ...facData, link: e.target.value.split(',') })}/>
                </div>

                <div className='form-group'>
                    <label className='form-label'>Select profile image:</label><br/>
                    <FileBase type='file' multiple={false} id='facImg' onDone={({base64}) => {setFacData({...facData, file: base64})}} />
                </div>
                <button onClick={handleSubmit} className='btn btn-large btn-info'>Submit</button>
            </form>
        </div>
    )
}

export default Form;