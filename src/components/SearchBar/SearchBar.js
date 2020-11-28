import React from 'react';
import './SearchBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSlidersH} from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    return (
        <section className="search-bar mt-5 mb-3">
            <div className="row">
                <div className="col-md-10 text-center">
                    <button type="button" style={{backgroundColor: '#EFF0F6', borderRadius: '10px'}} class="btn form-control" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <p className="d-flex justify-content-start"><span className="mr-3"><FontAwesomeIcon icon={faSearch} /></span>Ca</p>                     
                    </button>
                </div>
                <div className="col-md-2 offset text-center">
                    <button type="button" style={{backgroundColor: '#EFF0F6', borderRadius: '10px'}} class="btn form-control" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <p><FontAwesomeIcon icon={faSlidersH} /></p>                     
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SearchBar;