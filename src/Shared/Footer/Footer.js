import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo1 from '../../Images/logo1.png';
import './Footer.css';
const Footer = () => {
    const getCurrentDate = () => {
        const year = new Date().getFullYear();
        return year;
    }

    return (
        <div className="bg p-3">
            <footer className=" container py-3">
                <div className="container">
                    <div className="row footer-top py-1">
                        <div className="col-md-3 mb-2 text-white">
                            <img className="py-2 mb-2" src={logo1} alt="logo" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum neque quam id quis officia illum,  eaque qui?</p>
                        </div>
                        <div className="col-md-3">
                            <ul className="list-unstyled">
                                <h5 className="text-white" >Company</h5>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Pricing</a></li>
                                <li><a href="/">Gift Cards</a></li>
                                <li><a href="/">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul className="list-unstyled">
                                <h5 className="text-white" >Basic Info</h5>
                                <li className="fa-colour my-3" href="#home"> <FontAwesomeIcon icon={faPhoneAlt} /> +88 01911 xxxxxx</li>
                                <li className="fa-colour my-3" href="#link"> <FontAwesomeIcon icon={faEnvelopeOpen} /> <span className="header-to-text">support@product.com</span></li>
                                <li className="fa-colour my-3" href="#link"> <FontAwesomeIcon icon={faMapMarkerAlt} /> <span className="header-to-text">NewTown, WestBangle Kolkata</span></li>

                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul className="list-unstyled">
                                <h5 className="text-white" >News Info</h5>
                                <div className="icon d-flex">
                                    <a className="fa-colour mr-2" target="_blank" href="https://web.facebook.com/akash382/" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a className="fa-colour mx-2" target="_blank" href="https://www.linkedin.com/in/akash-ahmed-aks/" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a className="fa-colour mx-2" target="_blank" href="https://twitter.com/" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>

                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="text-white mt-3 text-center"> Copyright &copy;{getCurrentDate()} . Product All Rights Reserved. </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;