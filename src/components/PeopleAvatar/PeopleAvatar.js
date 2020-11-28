import React from 'react';
import './PeopleAvatar.css'
import people4 from '../../resources/People.png'
import people3 from '../../resources/People(1).png'
import people2 from '../../resources/People(2).png'
import people1 from '../../resources/People(3).png'

const PeopleAvatar = () => {
    return (
        <section className="people-avatar mt-4 mb-3">
            <div className="row">
                <div className="col-md-12">
                    <img className="img-fluid" style={{borderRadius: '50%', width: '40px', height: '40px'}} src={people1} alt=""/>
                    <img className="img-fluid mx-3" style={{borderRadius: '30%', width: '50px', height: '50px'}} src={people2} alt=""/>
                    <img className="img-fluid" style={{borderRadius: '20%', width: '60px', height: '60px'}} src={people3} alt=""/>
                    <img className="img-fluid ml-3" style={{borderRadius: '10%', width: '70px', height: '70px'}} src={people4} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default PeopleAvatar;