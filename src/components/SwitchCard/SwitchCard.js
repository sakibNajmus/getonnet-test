import React from 'react';
import './SwitchCard.css'
import ToggleSwitch from './ToggleSwitch';
import RadioButton from './RadioButton';
import CheckboxButton from './CheckboxButton';
import ClickButton from './ClickButton';
import ProgressButton from './ProgressButton';

const SwitchCard = () => {
    return (
        <section className="switch mt-5 mb-3">
            <div className="row">
                <div className="col-md-6">
                    <CheckboxButton></CheckboxButton>
                </div>

                <div className="col-md-6">
                    <RadioButton></RadioButton>
                </div>

                <div className="col-md-6">
                    <ToggleSwitch></ToggleSwitch>
                </div>

                <div className="col-md-6">
                    <ClickButton></ClickButton>
                </div>

                <div className="col-md-12">
                    <ProgressButton></ProgressButton>
                </div>
            </div>
        </section>
    );
};

export default SwitchCard;