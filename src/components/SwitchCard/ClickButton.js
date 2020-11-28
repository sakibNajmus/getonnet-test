import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const ClickButton = () => {

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
        <div className="row mt-2 pl-3">
            <div className="com-md-12 d-flex justify-content-center align-items-center">
                <button onClick={() =>handleDecrease()} style={{borderRadius: '50%', color: '#5F2EEA', border: '2px solid #5F2EEA'}}><FontAwesomeIcon icon={faMinus} size='sm' /></button>
                <h6 className="px-2 ml-1">{count}</h6>
                <button className="ml-1" onClick={() =>handleIncrease()} style={{borderRadius: '50%', color: '#5F2EEA', border: '2px solid #5F2EEA'}}><FontAwesomeIcon icon={faPlus} size='sm' /></button>
            </div> 
        </div>
    );
};

export default ClickButton;