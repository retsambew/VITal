import React, {useState} from 'react';
import axios from 'axios';
import FileBase from 'react-file-base64';

const Form = () => {
    const [newData,setData]=useState({subj:'', fac:'', sem: '', year: '', file:''});
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:5000/notes/add', newData);
        alert('submitted successfully!');
        clear();
    }

    const clear = () => {
        setData({ ...newData, subj:'', fac:'', sem: '', year: ''});
        noteSub.value='';
        noteFac.value='';
        sem.value='';
        year.value='';
    };
    
    return (
        <div className='container align-items-center'>
            <h2 className='my-4'>Enter Details of Notes</h2>
            <form className='row g-3'>
                <div className='form-group'>
                    <label className='form-label' htmlFor='noteSub'>Subject</label>
                    <input className='form-control' id='noteSub' placeholder='Enter Subject' onChange={(e) => setData({ ...newData, subj: e.target.value })}/>
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor='noteFac'>Faculty</label>
                    <input className='form-control' id='noteFac' placeholder='Enter Faculty' onChange={(e) => setData({ ...newData, fac: e.target.value })}/>
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor='sem'>Semester</label>
                    <input className='form-control' id='sem' placeholder='Enter Semester' onChange={(e) => setData({ ...newData, sem: e.target.value })}/>
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor='year'>Year</label>
                    <input className='form-control' id='year' placeholder='Enter Year'onChange={(e) => setData({ ...newData, year: e.target.value })}/>
                </div>

                <div className='form-group'>
                    <label className='form-label'>Select PDF File:</label><br/>
                    <FileBase type='file' multiple={false} id='facImg' onDone={({base64}) => {setData({...newData, file: base64})}} />
                </div>
                <button onClick={handleSubmit} className='btn btn-large btn-info'>Submit</button>
            </form>
        </div>
    )
}

export default Form;