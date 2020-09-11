import React, {Component} from 'react';

function Footer(props){
    return(
        <div className="">
            <div className="footer">
                <div className="row justify-content-center">
                        <div className="offset-1 col-4 col-md-3">
                        <h3>Links</h3>
                        <ul className="list-unstyled">
                            <li><a href="#" ></a>Home</li>
                            <li><a href="#" ></a>About</li>
                            <li><a href="#" ></a>Contact</li>
                        </ul>
                        </div>
                        <div className="col-7 col-md-3">
                                <h5>Our Address</h5>
                                <address>
                            Kharida West <br />
                            Near Appayan Hall<br />
                            Ward No. 17, Kharagpur<br />
                            +852 1234 5678<br />
                            +852 8765 4321<br />
                             <a href="mailto:confusion@food.net">
                                nikhilsharma12@gmail.com</a>
                            </address>
                        </div>
                        <div className="col-12 col-md align-self-center">
                                 <a className="btn btn-social-icon btn-facebook" href="#"><i className="fab fa-facebook"></i></a> 
                                 <a className="btn btn-social-icon btn-google" href="#"><i className="fab fa-youtube"></i></a> 
                                 <a href="#"><i className="fas fa-envelope"></i></a> 
                                 <a href="#"><i className="fab fa-instagram"></i></a> 
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;