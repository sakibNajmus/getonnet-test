import React from 'react';
import './Home.css'
import Login from '../Login/Login';
import Header from '../Header/Header';
import SummerSale from '../SummerSale/SummerSale';
import Mail from '../Mail/Mail';
import SwitchCard from '../SwitchCard/SwitchCard';

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
            </div>
        </section>
    );
};

export default Home;