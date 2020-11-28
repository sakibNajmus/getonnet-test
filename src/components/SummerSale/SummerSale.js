import React from 'react';
import './SummerSale.css'
import olive from '../../resources/Olive-Leaves.png'

const SummerSale = () => {
    return (
        <div className="summer-sale">
            <div className="row d-flex justify-content-between">
                <div className="col-md-4">
                    <h3>Summer Sale</h3>
                    <p className="my-4">25% Off Now through sunday for all in-store purchases.</p>
                    <button style={{borderRadius: '30px'}} className="btn-second mb-3">Shop Now</button>
                </div>
                <div className="col-md-6 offset-md-1">
                    <img style={{width: "97%"}} className="img-fluid" src={olive} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default SummerSale;