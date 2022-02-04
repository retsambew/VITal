import React from 'react'
import { Link } from 'react-router-dom'

export default function UnderDev() {
    return (
        <div style={{textAlign:'center'}}>
            <br/><br/><br/><br/>
            <h1>This Feature is under development!</h1><br/>
            <Link to='/'><h3>Click To Redirect Home</h3></Link>
        </div>
    )
}
