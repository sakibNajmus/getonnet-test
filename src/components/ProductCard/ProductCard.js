import React, { useState } from 'react';
import './ProductCard.css'
import icecream from '../../resources/Blue-Cone.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTag } from '@fortawesome/free-solid-svg-icons';

const ProductCard = () => {
    const [count, setCount] = useState(0);
    let initialCount = count;
    console.log(count)

    const handleIncrease =() =>{
        let levelUp = initialCount+1;
        setCount(levelUp);
    }

    const handleDecrease =() =>{
        let levelDown = initialCount-1;
        setCount(levelDown);
    }
    return (
        <section className="product-card mt-5 mb-3">
            <img class="card-img-top" style={{borderRadius: '25px 25px 0 0'}} src={icecream} alt="Card image cap"/>
            <div class="card-body mb-1 pb-5">
                <h3 style={{fontWeight: '700'}} class="card-title">Waffle Cone</h3>
                <p class="card-text">12-Pack Box</p>
            </div>
            <div className="row pb-4 d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="com-md-12 d-flex justify-content-start align-items-center ml-4">
                        <button onClick={() =>handleDecrease()} style={{borderRadius: '50%', color: 'black', border: 'none'}}><FontAwesomeIcon icon={faMinus} size='sm' /></button>
                        <h6 className="mt-2 px-2 ml-1">{count}</h6>
                        <button className="ml-1" onClick={() =>handleIncrease()} style={{borderRadius: '50%', color: 'black', border: 'none'}}><FontAwesomeIcon icon={faPlus} size='sm' /></button>
                    </div>
                </div>

                <div className="col-md-6">
                    <button className="btn-category" style={{color: '#5F2EEA', fontWeight: '700'}}><FontAwesomeIcon className="mr-2" icon={faTag} size='sm' /> Dessert</button>
                </div>
            </div>
        </section>
    );
};

export default ProductCard;