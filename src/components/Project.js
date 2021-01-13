import React, { Component } from 'react';
import Background from './Background';
import Footer from './Footer';
import geekbot from '../img/geekbot.png';
import Phython from '../img/phython.png'
import AdityaDas from '../profile/AdityaDas.png'
import github from '../img/github.png'
import demo2 from '../img/demo2.png';
import cross from '../img/cross.png';
import '../css/Project.css';
// sets page title dynamically
document.title = "Geeksforgeeks | KIIT - Projects";

//Vanilla JavaScript for Pop-up
function displayFlex1(){
    document.querySelector('.bg-modal1').style.display = 'flex';
}
function displayFlex2(){
    document.querySelector('.bg-modal2').style.display = 'flex';
}
function displayFlex3(){
    document.querySelector('.bg-modal3').style.display = 'flex';
}
function displayFlex4(){
    document.querySelector('.bg-modal4').style.display = 'flex';
}
function displayNone1(){
    document.querySelector('.bg-modal1').style.display = 'none';
}
function displayNone2(){
    document.querySelector('.bg-modal2').style.display = 'none';
}
function displayNone3(){
    document.querySelector('.bg-modal3').style.display = 'none';
}
function displayNone4(){
    document.querySelector('.bg-modal4').style.display = 'none';
}
class Project extends Component {
    render() {
        return (
            <div>
                <Background clipType="clipping-projects" overlayColor="bgcolor-projects"></Background>
                <div id="project_title">Projects</div>
                {/* <!-- CONTENT --> */}
                <p className = "project">Projects</p>
                <div className="slogan_project" >
                    <h2>Work we have</h2>
                    <h2>done in the past</h2>
                </div>
                <div className="image1"  id = "click1">
                    <img src={geekbot} onClick={displayFlex1} className="image1" />
                </div>
                <div className="image3">
                    <img src={demo2} onClick={displayFlex3} className="image3" />
                </div>
                {/* <div className="image2">
                    <img src={geekbot_dark} onClick = {displayFlex2} className="image2" />
                </div>
                <div className="image4">
                    <img src={demo} onClick = {displayFlex4} className="image4" />
                </div> */}

                {/* <!-- POPUP --> */}
                <div className="bg-modal1">
                <div class="modal-content1">
                    <div id="popup_top_image1">
                        <div className="cross">
                            <a href="#" className="list-item" onClick={displayNone1} ><img src={cross} className="fa-times"/></a>
                        </div>
                    </div>
                    <div class="popup_card">
                        <div>
                            <img src={github} id="popup_card_github" />
                            <a href="https://github.com/GFG-CLUB-KIIT/thegeekbot" id="popup_card_project_link">Go to Website</a>
                        </div>
                        <div id="popup_card_project_title">The Geek Bot</div>
                        <div id="popup_card_project_contributor">
                            <div id="popup_card_project_contributor_title">Contributors</div>
                            <div id="popup_card_project_contributor_img">
                                <a href="#" title="Aditya Das"><img src={AdityaDas} class="project_contri_img1" /></a>
                            </div>
                        </div>
                        <div class="popup_bottom">
                            <lable class="popup_bottom_lang">Language Used:</lable> 
                            <img src={Phython} class="popup_bottom_lang_logo" title="Phython" />
                        </div>
                    </div>
                    <div class="popup-context">
                        Our App-Dev Team started working on their 1st project, the Geek Bot. It possesses a programmer’s search feature that enables the users to search various programming concepts. It also gives the list of top articles from the GeeksforGeeks website along with their respective links. Besides, it even returns the list of all ongoing coding events all around the world when called. It also has been administered with a profanity filter that identifies unparliamentary language by any user and purges them.
                    </div>
                </div>
                </div>
                {/* <div className="bg-modal2">
                    <div className="modal-content2">
                        <img src={demo} className = "popupImage" width = "240" height="200" />
                        <p className = "popup">The Geek Bot</p>
                        <div className="cross">
                            <a href="#" className="list-item" onClick={displayNone2} ><img src={cross} className="fa-times"/></a>
                        </div>
                        <div className="content">
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        </div>
                    </div>
                </div> */}
                <div className="bg-modal3">
                    <div className="modal-content3">
                        <img src={demo2} className = "popupImage" width = "240" height="200" />
                        <p className = "popup">The Geek Bot</p>
                        <div className="cross">
                            <a href="#" className="list-item" onClick={displayNone3} ><img src={cross} className="fa-times"/></a>
                        </div>
                        <div className="content">
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="bg-modal4">
                    <div className="modal-content4">
                        <img src={geekbot_dark} className = "popupImage" width = "240" height="200" />
                        <p className = "popup">The Geek Bot</p>
                        <div className="cross">
                            <a href="#" className="list-item" onClick={displayNone4} ><img src={cross} className="fa-times"/></a>
                        </div>
                        <div className="content">
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        <p>Nunc ultricies porttitor diam,sodales. Nunc ultricies porttitor diam,sodales.</p>
                        </div>
                    </div>
                </div> */}
                <Footer bgColor="footer-projects"></Footer>
            </div>
        )
    }
}

export default Project;