import React from 'react';
import '../css/defaultpage.css' ;
import icon from '../img/3.jpg'


function Default() {

    function closeForm(){
        let registrationBox = document.querySelector(".registration-box");
        registrationBox.style.visibility = "hidden" ;
    }
    function openForm(){
        let registrationBox = document.querySelector(".registration-box");
        registrationBox.style.visibility = "visible" ;
    }

  return (
    <div className="default">
        <div className="registration-box">
        <div className="registration">

            {/* <!-- Close button --> */}
            <button onClick={closeForm} className="form-close">X</button>
        </div>

    </div>
    
        <nav className="navbar">
            <div className="logo">
                <h2  style={{'font-size' : '1.75rem'}}>MedBlocks</h2>
                <h1>MB</h1>
            </div>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact Us</a>
            <button onClick={openForm}>Enter Vault</button>
        </nav>

        <div className="top-section" id="home">
            <div className="top-content">
                <h2>Control your medical records with more Ease</h2>
                <p>Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease. Medicine encompasses a variety of health care practices evolved to maintain and restore health by the prevention and treatment of illness.</p>
                <button className="btn-1" onClick={openForm}>Login Now</button>
            </div>
        </div>

        <div id="features">
            <h1>Why Do You Need Us?</h1>
                <div className="feature-item tilt">
                    <h2 className="cont-ques">Ever thought of Focusing more on your Health than your health records?</h2>
                    <img src={icon} alt="" />
                    <div className="content">
                        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, voluptate.</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem vitae pariatur similique
                            cupiditate doloremque expedita?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Culpa
                            sint totam quam libero blanditiis ab ipsa ut ipsam asperiores at Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Nemo, cum. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci, soluta voluptate voluptates doloribus fugiat quidem.</p>
                    </div>
                </div>
                <div className="feature-item tilt">
                    <h2 className="cont-ques">Ever thought of Focusing more on your Health than your health records?</h2>
                    <img src={icon} alt="" />
                    <div className="content">
                        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, voluptate.</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem vitae pariatur similique
                            cupiditate doloremque expedita?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Culpa
                            sint totam quam libero blanditiis ab ipsa ut ipsam asperiores at Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Nemo, cum. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci, soluta voluptate voluptates doloribus fugiat quidem.</p>
                    </div>
                </div>
                <div className="feature-item tilt">
                    <h2 className="cont-ques">Ever thought of Focusing more on your Health than your health records?</h2>
                    <img src={icon} alt="" />
                    <div className="content">
                        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, voluptate.</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem vitae pariatur similique
                            cupiditate doloremque expedita?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Culpa
                            sint totam quam libero blanditiis ab ipsa ut ipsam asperiores at Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Nemo, cum. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci, soluta voluptate voluptates doloribus fugiat quidem.</p>
                    </div>
                </div>
        </div>

        <div id="contact">

        </div>
    </div>
  );
}

export default Default;
