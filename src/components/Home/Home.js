import React from 'react';
import './Home.css'
import Login from '../Login/Login';
import Header from '../Header/Header';
import SummerSale from '../SummerSale/SummerSale';
import Mail from '../Mail/Mail';
import SwitchCard from '../SwitchCard/SwitchCard';
import DropdownCard from '../DropdownCard/DropdownCard';
import SearchBar from '../SearchBar/SearchBar';
import Watch from '../Watch/Watch';
import SignUp from '../SignUp/SignUp';
import PeopleAvatar from '../PeopleAvatar/PeopleAvatar';
import ProductCard from '../ProductCard/ProductCard';

const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">                        
                        <Header></Header>
                    </div>
                    <div className="col-md-4">
                        <Login></Login>
                    </div>
                    <div className="col-md-7 offset-md-1">
                        <SummerSale></SummerSale>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <Mail></Mail>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <SwitchCard></SwitchCard>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <DropdownCard></DropdownCard>
                    </div>
                    <div className="col-md-8 offset-md-1">
                        <div className="row">
                            <div className="col-md-12">
                                <SearchBar></SearchBar>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Watch></Watch>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <SignUp></SignUp>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <PeopleAvatar></PeopleAvatar>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <ProductCard></ProductCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;