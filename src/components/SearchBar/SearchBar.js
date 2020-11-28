import React from 'react';
import './SearchBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSlidersH} from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    return (
        <section className="search-bar mt-5 mb-3">
            <div className="row">
                <div className="col-md-10">
                    <input style={{backgroundColor: '#EFF0F6', borderRadius: '10px', color: '#111'}} class="search-box form-control"   type="text" placeholder="Ca" name="" id=""/>
                    <p className="d-flex search-icon justify-content-start"><span className="mr-3"><FontAwesomeIcon icon={faSearch} /></span></p>
                </div>
                <div className="col-md-2">
                    <button type="button" style={{backgroundColor: '#EFF0F6', borderRadius: '10px'}} class="btn form-control" >
                        <p><FontAwesomeIcon icon={faSlidersH} /></p>                     
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SearchBar;