import React from 'react';
import './Watch.css'

const Watch = () => {
    return (
        <section className="watch mt-5 d-flex justify-content-between align-items-center">
            <div className="watch-content">
                <h5 style={{fontSize: '20px', fontWeight: '700'}}>$ 370,345 <span style={{color: '#00BA88', fontSize: '15px', fontWeight: '700'}}>+126</span> </h5>
                <p>This month</p>
            </div>
            <div className="btn btn-watch">Watch</div>
        </section>
    );
};

export default Watch;