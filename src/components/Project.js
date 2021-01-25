import React, { Component } from 'react';
import Background from './Background';
import Footer from './Footer';
import AdityaDas from '../profile/AdityaDas.png'
import AnkitRaj from '../profile/AnkitRaj.png';
import SouravDash from '../profile/SouravDash.png';
import ArnabChatterjee from '../profile/ArnabChatterjee.png';
import AkashChouhan from '../profile/AkashChouhan.png';
import AshishKumarMishra from '../profile/AshishKumarMishra.png';
import DevanshShaw from '../profile/DevanshShaw.png';
import SouvikKar from '../profile/SouvikKar.png';
import Anshu from '../profile/Anshu.png';
import DivyanshuShekhar from '../profile/DivyanshuShekhar.png';
import ShivamKumar from '../profile/ShivamKumar.png';
import geekbot from '../img/geekbot.png';
import Phython from '../img/phython.png'
import github from '../img/github.png';
import react from '../img/react.png';
import html from '../img/html.png';
import css from '../img/css.png';
import JavaScript from '../img/javaScript.png';
import gfgwebsite from '../img/GFGKIITWebsitePoster.png';
import cross from '../img/cross.png';
import '../css/Project.css';
import {Helmet} from 'react-helmet';

//Vanilla JavaScript for Pop-up
function displayFlex1(){
    document.querySelector('.bg-modal1').style.display = 'flex';
}
function displayFlex3(){
    document.querySelector('.bg-modal3').style.display = 'flex';
}
function displayNone1(){
    document.querySelector('.bg-modal1').style.display = 'none';
}
function displayNone3(){
    document.querySelector('.bg-modal3').style.display = 'none';
}
class Project extends Component {
    render() {
        return (
            <div>
                {/* <!-- Dynamic Title --> */}
                <Helmet>
                    <title>Geeksforgeeks | KIIT - Projects</title>
                </Helmet>
                <Background clipType="clipping-projects" overlayColor="bgcolor-projects"></Background>
                <div id="project_title">Projects</div>
                {/* <!-- CONTENT --> */}
                <p className = "project">Projects</p>
                <div className="slogan_project" >
                    <h2>Work we have</h2>
                    <h2>done in the past</h2>
                </div>
                <div className="image1"  id = "click1">
                    <img alt="images" src={geekbot} onClick={displayFlex1} className="image1" />
                </div>
                <div className="image3">
                    <img alt="images" src={gfgwebsite} onClick={displayFlex3} className="image3" />
                </div>

                {/* <!-- POPUP --> */}
                <div className="bg-modal1">
                    <div class="modal-content1">
                        <div id="popup_top_image1">
                            <div className="cross">
                                <a href="#" className="list-item" onClick={displayNone1} ><img alt="images" src={cross} className="fa-times"/></a>
                            </div>
                        </div>
                        <div class="popup_card">
                            <div>
                                <a href="https://github.com/GFG-CLUB-KIIT/" target="_blank" rel="noopener noreferrer"><img alt="images" src={github} id="popup_card_github" /></a>
                                <a href="https://github.com/GFG-CLUB-KIIT/thegeekbot" target="_blank" rel="noopener noreferrer" id="popup_card_project_link">Go to Website</a>
                            </div>
                            <div id="popup_card_project_title">The Geek Bot</div>
                            <div id="popup_card_project_contributor">
                                <div id="popup_card_project_contributor_title">Contributors</div>
                                <div id="popup_card_project_contributor_img">
                                    <a href="https://github.com/ThatOneTallKid" target="_blank" rel="noopener noreferrer" title="Aditya Das"><img alt="images" src={AdityaDas} class="project_contri_img1" /></a>
                                    <a href="https://github.com/DarthCucumber" target="_blank" rel="noopener noreferrer" title="Souvik Kar Mahapatra"><img alt="images" src={SouvikKar} class="project_contri_img2" /></a>
                                </div>
                            </div>
                            <div class="popup_card_bottom">
                                <lable class="popup_card_bottom_lang">Language Used:</lable> 
                                <img alt="images" src={Phython} class="popup_card_bottom_lang_logo" title="Phython" />
                            </div>
                        </div>
                        <div class="popup-context">
                            Our App-Dev Team started working on their 1st project, the Geek Bot. It possesses a programmer’s search feature that enables the users to search various programming concepts. It also gives the list of top articles from the GeeksforGeeks website along with their respective links. Besides, it even returns the list of all ongoing coding events all around the world when called. It also has been administered with a profanity filter that identifies unparliamentary language by any user and purges them.
                        </div>
                    </div>
                </div>
                <div className="bg-modal3">
                    <div class="modal-content3">
                        <div id="popup_top_image2">
                            <div className="cross">
                                <a href="#" className="list-item" onClick={displayNone3} ><img alt="images" src={cross} className="fa-times"/></a>
                            </div>
                        </div>
                        <div class="popup_card">
                            <div>
                                <a href="https://github.com/GFG-CLUB-KIIT/" target="_blank" rel="noopener noreferrer"><img alt="images" src={github} id="popup_card_github" /></a>
                                <a href="https://github.com/GFG-CLUB-KIIT/GFG-KIIT-website" target="_blank" rel="noopener noreferrer" id="popup_card_project_link">Go to Website</a>
                            </div>
                            <div id="popup_card_project_title">GFG Website</div>
                            <div id="popup_card_project_contributor">
                                <div id="popup_card_project_contributor_title">Contributors</div>
                                <div id="popup_card_project_contributor_img">
                                    <a href="https://github.com/bitraylee" target="_blank" rel="noopener noreferrer" title="Anshu Mohanta"><img alt="images" src={Anshu} class="project_contri_img1" /></a>
                                    <a href="https://github.com/AnkitRajCode" target="_blank" rel="noopener noreferrer" title="Ankit Raj"><img alt="images" src={AnkitRaj} class="project_contri_img2" /></a>
                                    <a href="https://github.com/DarthCucumber" target="_blank" rel="noopener noreferrer" title="Souvik Kar Mahapatra"><img alt="images" src={SouvikKar} class="project_contri_img2" /></a>
                                    <a href="https://github.com/Devansh2000Shaw" target="_blank" rel="noopener noreferrer" title="Devansh Shaw"><img alt="images" src={DevanshShaw} class="project_contri_img2" /></a>
                                    <a href="https://github.com/kingsrv18" target="_blank" rel="noopener noreferrer" title="Sourav Dash"><img alt="images" src={SouravDash} class="project_contri_img2" /></a>
                                    <a href="https://github.com/akashchouhan16" target="_blank" rel="noopener noreferrer" title="Akash Chouhan"><img alt="images" src={AkashChouhan} class="project_contri_img1" /></a>
                                    <a href="https://github.com/divshekhar/" target="_blank" rel="noopener noreferrer" title="Divyanshu Shekhar"><img alt="images" src={DivyanshuShekhar} class="project_contri_img2" /></a>
                                    <a href="https://github.com/arn4b" target="_blank" rel="noopener noreferrer" title="Arnab Chatterjee"><img alt="images" src={ArnabChatterjee} class="project_contri_img2" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="popup-context">
                            Our Web-Dev Team started working on their 1st project, Geeksforgeeks KIIT Student Club Website. It possesses a programmer’s search feature that enables the users to search various programming concepts. Besides, it even returns the list of all ongoing coding events all around the world when called. It also has been administered with a profanity filter that identifies unparliamentary language by any user and purges them.
                        </div>
                        <div class="popup_bottom">
                            <lable class="popup_bottom_lang">Language Used:</lable> 
                                <img alt="images" src={html} class="popup_bottom_lang_logo" title="HTML" />
                                <img alt="images" src={css} class="popup_bottom_lang_logo" title="CSS" />
                                <img alt="images" src={JavaScript} class="popup_bottom_lang_logo" title="JavaScript" />
                            <lable class="popup_bottom_frame">Framework Used:</lable>
                                <img alt="images" src={react} class="popup_bottom_lang_logo" title="React" />
                        </div>
                    </div>
                </div>
                <Footer bgColor="footer-projects"></Footer>
            </div>
        )
    }
}

export default Project;