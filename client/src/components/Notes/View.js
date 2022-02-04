import React, {useEffect, useState} from 'react'
import SideBar from './SideBar.js';

const View = () => {
    var i=1;
    const [data, setData] = useState([{
        subj: '',
        fac: '',
        sem: '',
        year: '',
        file: '',
    }]);

    useEffect(() => {
        fetch("/notes").then(res => {
            if(res.ok){
                return res.json();
            }
        }).then(jsonRes => setData(jsonRes));
        
    });

    const download = (file) => {
        var link= document.createElement('a');
        link.download=prompt('Enter file name (without extention)', 'vital');
        link.download+='.pdf';
        link.href=file;
        link.click();
    }
    return (
        <div>
            <div className='text-center my-3'>
               <h2 className='shadow-lg p-2 px-4' style={{display:'inline-block', borderRadius: '15px', background:'#050A30', color: '#F0BC58'}}>Notes</h2><hr/>
            </div>
            <div className='row'>
                <div className='col-2'>
                    <SideBar/>
                </div>
                <div className='col-10'>
                    <table className='table'>
                        <thead className='table-dark'>
                            <tr>
                                <th>#</th>
                                <th>Subject</th>
                                <th>Faculty</th>
                                <th>Semester, Year</th>
                                <th>Download</th>
                            </tr>
                        </thead>
                        {data.map( note =>
                            <tbody>
                                <tr>
                                    <td>{i++}</td>
                                    <td>{note.subj}</td>
                                    <td>{note.fac}</td>
                                    <td>{note.sem}, {note.year}</td>
                                    <td><button onClick={() => download(note.file)}><i class='fas fa-download'/></button></td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default View;