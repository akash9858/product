import React from 'react';
import { Card } from 'react-bootstrap';
import icon1 from '../../Images/icon1.png';
import icon2 from '../../Images/icon2.png';
import icon3 from '../../Images/icon3.png';
import './Works.css';
const Works = () => {
    return (
        <div>
            <section className="work container " >
                <div className="row d-flex justify-content-evenly m-auto">
                    <div className="col-md-6 my-5 d-flex flex-column justify-content-center ">
                        <div>
                            <h5>How it works</h5>
                            <h1 className="my-3" >Easy To Begin</h1>
                            <p className="my-3"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum metus ligula, id eleifend quam feugiat . Suspendisse finibus aliquam tortor, sed porttitor tortor vehicula in. Vestibulum turpis ipsum, tempor vel nunc non, </small> </p>
                            <button className=" btn danger">Shop Now</button>
                        </div>
                    </div>
                    <div className="col-md-6 my-5 row">
                        <div className="col-md-6" >
                            <Card className="shadow-sm w-5" >
                                <Card.Img className="img" variant="top" src={icon1} />
                                <Card.Body>
                                    <Card.Title className="text-primary" >Connect Device</Card.Title>
                                    <Card.Text>
                                        <small>This is a wider card with supporting text below as a natural lead-in to
                                            additional content.</small>
                                    </Card.Text>
                                    <Card.Text className="text">
                                        Learn More
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                            <Card className="shadow-sm mt-4 ">
                                <Card.Img className="img" variant="top" src={icon2} />
                                <Card.Body>
                                    <Card.Title className="text-primary" >Configure It</Card.Title>
                                    <Card.Text>
                                        <small>This card has supporting text below as a natural lead-in to additional
                                            content.</small> {' '}
                                    </Card.Text>
                                    <Card.Text className="text">
                                        Learn More
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>

                        <div className="col-md-6 d-flex align-items-center">
                            <Card className="shadow-sm">
                                <Card.Img className="img" variant="top" src={icon3} />
                                <Card.Body>
                                    <Card.Title className="text-primary" >Yay! Done</Card.Title>
                                    <Card.Text>
                                        <small>This is a wider card with supporting text below as a natural lead-in to
                                            additional content.</small>
                                    </Card.Text>
                                    <Card.Text className="text">
                                        Learn More
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Works;