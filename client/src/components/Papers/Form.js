import React, {useState} from 'react';
import axios from 'axios';
import FileBase from 'react-file-base64';

const Form = () => {
    const [newData,setData]=useState({subj:'', fac:'', exam:'', sem: '', year: '', file:''});
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:5000/papers/add', newData);
        alert('submitted successfully!');
    }

    const clear = () => {
        setData({ ...newData, subj:'', fac:'', exam:'', sem: '', year: ''});
        sub.value='';
        fac.value='';
        exam.value='';
        sem.value='';
        year.value='';
    };
    
    return (
        <div className='container align-items-center'>
            <h2 className='my-4'>Enter Details of Question Paper</h2>
            <form className='row g-3'>
                <div className='form-group'>
                    <label className='form-label' htmlFor='sub'>Subject</label>
                    <input className='form-control' id='sub' placeholder='Enter Subject' onChange={(e) => setData({ ...newData, subj: e.target.value })}/>
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor='fac'>Faculty</label>
                    <input className='form-control' id='fac' placeholder='Enter Faculty' onChange={(e) => setData({ ...newData, fac: e.target.value })}/>
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor='exam'>Exam Details</label>
                    <input className='form-control' id='exam' placeholder='Enter Exam Name, Slot (ex: "Mid Term, A-Slot")' onChange={(e) => setData({ ...newData, exam: e.target.value })}/>
                </div>

                <div className='col-6'>
                    <label className='form-label' htmlFor='sem'>Semester</label>
                    <input className='form-control' id='sem' placeholder='Enter Semester' onChange={(e) => setData({ ...newData, sem: e.target.value })}/>
                </div>

                <div className='col-6'>
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