import { useState } from 'react';
import logo from '../../images/3.png';
import {useSpring, animated, config } from 'react-spring';
import Type from 'react-typical';

const head = () => {
    const [flip,setFlip]=useState(false);
    const rotate=useSpring({
        to:{transform:'rotate(0deg)'},
        from:{transform:'rotate(360deg)'},
        reset: true,
        reverse: flip,
        delay: 1000,
        config: config.molasses,
        onRest: () => setFlip(!flip),
    });

    return (
    <div className='component row bg-dark rounded'>
        <animated.div className='col-6' style={rotate}>
            <img src={logo} className='m-5' alt='logo' />
        </animated.div>
        <div className='col-6'>
            <div className=' position-absolute' style={{top:'40%'}}>
                <h1 className='text-light'>Welcome to VITal, </h1>
                <h1 className='text-white-50'>
                    One Source Destination to: <br/>
                    <Type
                        loop={Infinity} wrapper="b" steps={[
                            'Study Material', 3000, 'Explore VIT', 4000,
                        ]}
                    />
                </h1>
            </div>
        </div>
    </div>)
}

export default head;