import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

const CheckboxButton = () => {
    return (
        <div className="d-flex justify-content-space-between align-items-center">
            <div className="col-md-4">
                <Checkbox
                icon={<CircleUnchecked />}
                checkedIcon={<CircleCheckedFilled />}
                color={'primary'}
                />
            </div>

            <div className="col-md-4">

            </div>

            <div className="col-md-4">
                <Checkbox
                icon={<CircleUnchecked />}
                checkedIcon={<CircleCheckedFilled />}
                color={'primary'}
                />
            </div>
        </div>
    );
};

export default CheckboxButton;