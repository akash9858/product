import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footerimg from '../../Images/Footer/footerbd.png';
import './Footer.css';
const Footer = () => {
    const getCurrentDate = () => {
        const year = new Date().getFullYear();
        return year;
    }

    return (
        <div style={{ backgroundImage: `url(${Footerimg})` }} className="p-3">
            <footer className=" container py-2">
                <div className="container">
                    <div className="row footer-top py-3">
                        <div className="col-md-3 mb-5 text-white">
                            <h1>Semicl<span style={{ color: "#FF4500" }}>o</span>ne</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum neque quam id quis officia illum,  eaque qui?</p>
                            <div className="icon d-flex">
                                <a className="fa-colour mr-2" target="_blank" href="https://web.facebook.com/semicloneinc/" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a className="fa-colour mx-2" target="_blank" href="https://web.facebook.com/semicloneinc/" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a className="fa-colour mx-2" target="_blank" href="https://twitter.com/simiclone" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <ul className="list-unstyled">
                                <h5 className="text-white" >Quick Link</h5>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Services</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul className="list-unstyled">
                                <h5 className="text-white" >Basic Info</h5>
                                <li className="fa-colour my-3" href="#home"> <FontAwesomeIcon icon={faPhoneAlt} /> +88 01911 202646</li>
                                <li className="fa-colour my-3" href="#link"> <FontAwesomeIcon icon={faEnvelopeOpen} /> <span className="header-to-text">support@semiclone.com</span></li>
                                <li className="fa-colour my-3" href="#link"> <FontAwesomeIcon icon={faMapMarkerAlt} /> <span className="header-to-text">NewTown, WestBangle Kolkata</span></li>

                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul className="list-unstyled">
                                <h5 className="text-white" >News Info</h5>
                                <li><a href="/">Careers</a></li>
                                <li><a href="/">Read FAQ</a></li>
                                <li><a href="/">View All Cities</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="text-white mt-3 text-center"> &copy; 2021 . Semiclone All Rights Reserved.{getCurrentDate()} </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;