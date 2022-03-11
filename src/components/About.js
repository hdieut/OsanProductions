import React from 'react';
import './About.css';

function About() {
    return(
        <div className='container'>
            <div className='headerContainer'>
                <h1>Our Team Members</h1>
            </div>
            <div className='aboutContainer'>
                <div className='person'>
                    <div className='columns'>
                        <img className='pic1' src={require('../images/IMG_2216.jpg')} alt='OSAN' />
                        <div className='texts'>
                            <h2>OSAN</h2>
                            <p>this is osan. i make music. i am cool. i have a cat. i have a gf.</p>
                        </div>
                    </div>
                </div>
                <div className='person'>
                    <div className='columns'>
                        <img className='pic1' src={require('../images/IMG_2216.jpg')} alt='OSAN' />
                        <div className='texts'>
                            <h2>VNO Marley</h2>
                            <p>this is vno</p>
                        </div>
                    </div>
                </div>
                <div className='person'>
                    <div className='columns'>
                        <img className='pic1' src={require('../images/IMG_2216.jpg')} alt='OSAN' />
                        <div className='texts'>
                            <h2>AC2COOL</h2>
                            <p>this is ac2cool</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default About;

