import React from 'react';
import headerBG from '../../Images/headerBG.png';
import HeroImg from '../../Images/HeroImg.png';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import './Home.css';


const Home = () => {
    return (
        <div style={{
            backgroundImage: `url(${headerBG})`, height: "950", width: "100", backgroundRepeat: "no-repeat",
            backgroundSize: "auto"
        }}>
            <NavigationBar />
            <section className="Hero container " >
                <div className="row d-flex justify-content-evenly m-auto p-2">
                    <div className="col-md-6 my-5">
                        <h1 >Smart <br />  Bicycle Lock</h1>
                        <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra diam non blandit volutpat</p>
                        <button className=" btn danger">Shop Now</button>
                    </div>
                    <div className="col-md-6 my-5 end">
                        <img className="heroImg " src={HeroImg} alt="headerBG" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;