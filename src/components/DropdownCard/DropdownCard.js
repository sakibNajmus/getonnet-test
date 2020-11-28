import React from 'react';
import './DropdownCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const DropdownCard = () => {
    return (
        <section className="dropdown-card mt-5 mb-3">
            <div className="row">
                <div className="col-md-6 text-center">
                    <h6>Selected</h6>
                    <input type="radio" name="" id=""/>
                </div>
                <div className="col-md-6 text-center">
                    <h6>Unselected</h6>
                    <input type="radio" name="" id=""/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12 text-center">
                    <textarea style={{borderRadius: '10px', backgroundColor: '#EFF0F6'}} name="" id="" className="form-control" placeholder="Share a reply"></textarea>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-12 text-center">
                    <button type="button" style={{backgroundColor: '#EFF0F6', borderRadius: '10px'}} class="btn form-control" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <p className="d-flex justify-content-between">Vegetables<span><FontAwesomeIcon icon={faAngleDown} /></span></p>                     
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Fish</a>
                        <a class="dropdown-item" href="#">Meat</a>
                        <a class="dropdown-item" href="#">Grocery</a>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-12 text-center">
                    <button type="button" style={{backgroundColor: '#EFF0F6', border: '1px solid black', borderRadius: '10px'}} class="btn form-control" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <p className="d-flex justify-content-between">Vegetables<span><FontAwesomeIcon icon={faAngleRight} /></span></p>                     
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Turnips</a>
                        <a class="dropdown-item" href="#">Squash</a>
                        <a class="dropdown-item" href="#">Broccoli</a>
                        <a class="dropdown-item" href="#">Spinach</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DropdownCard;