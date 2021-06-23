import React from 'react';
import product from '../../Images/product.png';
import './ChooseUs.css';
const ChooseUS = () => {
    return (
        <div>
            <section className="ChooseUS container" >
                <div className="row d-flex justify-content-evenly m-auto p-5">
                    <div className="col-md-6 my-3 ">
                        <img className="img-fluid ml-5" src={product} alt="headerBG" />
                    </div>
                    <div className="col-md-6 my-3">
                        <div className="subcho1">
                            <h5>Why Choose Us</h5>
                            <h1 className="my-3" >We Provide Smart &
                                Digital Services.</h1>
                            <p className="my-3"> <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis, egestas quis dolor. Sed pulvinar malesuada nunc, non efficitur magna laoreet non. Proin facilisis luctus dictum.</small> </p>
                        </div>

                        <div className="subCho2" >
                            <h5 className="ml-2 text-primary">
                                Bluetooth Connection
                            </h5>
                            <p className="ml-2"> <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis, egestas quis dolor. </small> </p>
                        </div>
                        <div className="subCho2" >
                            <h5 className="ml-2 text-primary">
                                USB Rechargeable
                            </h5>
                            <p className="ml-2"> <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis, egestas quis dolor. </small> </p>
                        </div>
                        <div className="subCho2" >
                            <h5 className="ml-2 text-primary">
                                Ultra-Long Standby
                            </h5>
                            <p className="ml-2"> <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis, egestas quis dolor. </small> </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChooseUS;