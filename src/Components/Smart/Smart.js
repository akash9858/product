import React from 'react';
import smart from '../../Images/smart.png';
import './Smart.css';
const Smart = () => {
    return (
        <div className="container py-5" >
            <div className="row pb-5">
                <div className="com-md-12 d-flex  justify-content-center m-auto p-5">
                    <div className="text-center" >
                        <h5>Smart Lock</h5>
                        <h1>Amazing Features</h1>
                        <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum metus ligula, id eleifend quam feugiat</small></p>
                    </div>
                </div>
                <div className="com-md-12">
                    <img className="img-fluid px-5" src={smart} alt="" />
                </div>
            </div>
            {/*             
            <div className="group" style={{
                backgroundImage: `url(${group})`, backgroundRepeat: "no-repeat", height: "950", width: "100",
                backgroundSize: "auto"
            }}>
                <div className="row ">
                    <div className="col-md-8 ">
                        <h1 className="text-white" >One of the best products
                            for smart people.</h1>
                    </div>
                    <div className="col-md-4">
                        <button className="btn shopbtn"> shop now</button>
                    </div>
                </div>
            </div> */}
            <div className="container orangebg d-flex justify-content-between align-items-center">
                <h1 className="text-white">One of the best products for smart people.</h1>
                <button className="btn shopbtn"> Shop now</button>
            </div>

        </div>
    );
};

export default Smart;