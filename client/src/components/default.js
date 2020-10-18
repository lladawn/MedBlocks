import React from 'react';
import '../css/defaultpage.css';
import homebanner from '../img/home-banner.png';
import f1main from '../img/f1-main.png';
import fig1 from '../img/fig1.png';
import fig2 from '../img/fig2.png';
import useremail from '../img/user-email.png';
import userlogo from '../img/user-logo.png';
import f1ques from '../img/f1-ques.jpg';
import Modal from './Modal';


function Default() {

    function showcon() {
        let qbox = document.querySelector(".box-que1");
        let mbox = document.querySelector(".box-main1");

        qbox.style.opacity = "0";
        mbox.style.opacity = "1";
        qbox.style.zIndex = "1";
        mbox.style.zIndex = "2";

    }

    return (
            <div className="default">
            <div className="container">

                {/* <!-- ##################### NAVBAR ################################## --> */}
                <nav className="navbar">
                    <div className="logo">
                        <h2>MedBlocks</h2>
                        <h1>MB</h1>
                    </div>
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#contact">Contact Us</a>
               
                    <Modal value="Sign In" />
                </nav>
                {/* <!-- ##################### NAVBAR END ################################## --> */}


                {/* <!-- ##################### HOME SECTION ################################## --> */}
                <div className="section-first" id="home">
                    <div className="content">
                        <h1>Control Your Health Records</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda unde ad rerum doloribus nisi quam
                        quos esse, fugit tempore nemo facilis nobis? Qui illum, deserunt assumenda saepe rerum reiciendis
                        explicabo ducimus modi, ea quidem libero hic dolorem magni repudiandae. Impedit.</p>
                        
                        <Modal value="Get Started" />
                    </div>
                    <img src={homebanner} alt="Home banner" />

                </div>
                {/* <!-- ##################### HOME SECTION END ################################## --> */}


                {/* <!-- ##################### FEATURES ################################## --> */}
                <div className="feature-section" id="features">

                    <div className="feature-item1">
                        <img id="fimg1" src={fig1} alt="" />
                        <img id="fimg2" src={fig2} alt="" />
                        <div className="box-que1">
                            <img src={f1ques} alt="" />
                            <button onClick={showcon}>Hack their health records</button>
                        </div>
                        <div className="box-main1">
                            <div className="content1">
                                <h2>NOT IN MEDBLOCKS!</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quam asperiores, a, veniam
                                eligendi explicabo sequi laboriosam impedit dicta obcaecati tenetur animi reiciendis dolor
                                quae saepe inventore, consequatur repellendus ut?Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Quod magnam, molestias animi, sed adipisci ratione culpa rerum odit a quia
                    illo vero recusandae praesentium explicabo! Harum, autem quam! Nesciunt.</p>
                            </div>
                            <img src={f1main} alt="" />
                        </div>
                    </div>


                    <div className="feature-item2">
                        <h2>FEATURE 2</h2>
                    </div>

                    <div className="feature-item3">
                        <h2>FEATURE 3</h2>
                    </div>


                </div>
                {/* <!-- ##################### FEATURE END ################################## --> */}


                <div id="contact">
                    <h2>Contact Us</h2>
                    <form>
                        <div className="contact-input">
                            <img src={userlogo} alt="" />
                            <input type="text" name="cname" id="" placeholder="Full Name" />
                        </div>
                        <div className="contact-input">
                            <img src={useremail} alt="" />
                            <input type="email" name="cemail" id="" placeholder="Your Email" />
                        </div>
                        <textarea name="ctext" id="" cols="30" rows="10"
                            placeholder="Enter your Query or Reason to Contact. We will Contact you as soon as possible."></textarea>
                        <div>
                            <button type="submit" >Submit</button>
                            <button type="reset">Reset</button>
                        </div>
                    </form>
                </div>

                <footer className="def-footer">
                    &copy; 2020-2040 by MedBlocks Coorporation. All rights reserved
                </footer>

            </div>
        </div>
    );
}

export default Default;
