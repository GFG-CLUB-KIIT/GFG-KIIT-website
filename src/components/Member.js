import React, { Component } from 'react';
import krishMurarka from '../profile/KrishMurarka.png';
import abhinavPrakash from '../profile/AbhinavPrakash.png';
import adityaDas from '../profile/AdityaDas.png';
import AnkitRaj from '../profile/AnkitRaj.png';
import HarshDwivedi from '../profile/HarshDwivedi.png';
import Taran from '../profile/Taran.png';
import SouravDash from '../profile/SouravDash.png';
import AshwaniSingh from '../profile/AshwaniSingh.png';
import VeerSharma from '../profile/VeerSharma.png';
import ArnabChatterjee from '../profile/ArnabChatterjee.png';
import AkashChouhan from '../profile/AkashChouhan.png';
import AshishKumarMishra from '../profile/AshishKumarMishra.png';
import DevanshShaw from '../profile/DevanshShaw.png';
import RiteshKumar from '../profile/RiteshKumar.png';
import SouvikKar from '../profile/SouvikKar.png';
import AbhisekSamantaray from '../profile/AbhisekSamantaray.png';
import AlokKumar from '../profile/AlokKumar.png';
import Anshu from '../profile/Anshu.png';
import DivyanshuShekhar from '../profile/DivyanshuShekhar.png';
import KumarAnkit from '../profile/KumarAnkit.png';
import nitishSonthalia from '../profile/NitishSonthalia.png';
import YashAnand from '../profile/YashAnand.png';
import RupanshiChawda from '../profile/RupanshiChawda.png';
import ShashiKiran from '../profile/ShashiKiran.png';
import NamanGupta from '../profile/NamanGupta.png';
import LalitKumar from '../profile/LalitKumar.png';
import Nittishna from '../profile/Nittishna.png';
import AsmitaHobisyashi from '../profile/AsmitaHobisyashi.png';
import AdyashaSatpathy from '../profile/AdyashaSatpathy.png';
import ShivamKumar from '../profile/ShivamKumar.png';
import RohitPradhan from '../profile/RohitPradhan.png';
import SatyajeetRamnit from '../profile/SatyajeetRamnit.jpg';
import SuryavardhanThangirala from '../profile/SuryavardhanThangirala.png';
import SayakRoyChowdhury from '../profile/SayakRoyChowdhury.png';
import SnehilSinhna from '../profile/SnehilSinhna.png';
import SaswataGhosh from '../profile/SaswataGhosh.png';
import linkedin from '../img/linkedinColor.png';
import instagram from '../img/instagramColor.png';
import twitter from '../img/twitterColor.png';
import github from '../img/githubWhite.png';
import gfglogo from '../img/gfglogo.png';
import '../css/swiper.min.css';
import '../css/Members.css';
import Background from './Background';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import '../css/Members.css';
import '../css/swiper.min.css';
// import Background from './Background';
// import FooterLanding from './FooterLanding.js';

class AboutUs extends Component {
   render() {
      return (
         <div className="parent-element">
            {/* <!-- Dynamic Title --> */}
            <Helmet>
               <title>Geeksforgeeks | KIIT - About Us</title>
            </Helmet>
            <Background clipType="clipping-aboutUs" overlayColor="bgcolor-aboutUs"></Background>
            <div className="aboutUsBody">
                <div className="our_Team_Title">Our Team</div>
                <div className="aboutUs_slogan">Small team with millions <br/> of creativity</div>
                <div className="head_members">
                    <div className="head_member_card">
                        <div className="head_member_photo">
                            <img src={krishMurarka} alt="HeadImage" />
                        </div>
                        <div className="head_member_about">
                            <div className="head_member_name">Krish Murarka</div>
                            <div className="head_member_desg">President</div>
                            <div className="head_member_words">   
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere alias minus numquam,
                                doloribus a vitae possimus ratione cupiditate deleniti asperiores pariatur, deserunt quae. 
                                Impedit libero vitae consequuntur, dignissimos vel provident.
                                Impedit libero vitae consequuntur, dignissimos vel provident.
                            </div>
                        </div>
                    </div>
                    <div className="head_member_card">
                        <div className="head_member_photo photo_abhinav">
                            <img src={abhinavPrakash} alt="HeadImage" />
                        </div>
                        <div className="inverse_aboutus_abhinav">
                            <div className="head_member_name">Abhinav Prakash</div>
                            <div className="head_member_desg">Secretary</div>
                            <div className="head_member_words">   
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere alias minus numquam,
                                doloribus a vitae possimus ratione cupiditate deleniti asperiores pariatur, deserunt quae. 
                                Impedit libero vitae consequuntur, dignissimos vel provident.
                                Impedit libero vitae consequuntur, dignissimos vel provident.
                            </div>
                        </div>
                    </div>
                    <div className="head_member_card">
                        <div className="head_member_photo">
                            <img src={adityaDas} alt="HeadImage" />
                        </div>
                        <div className="head_member_about">
                            <div className="head_member_name">Aditya Das</div>
                            <div className="head_member_desg">Head of Development</div>
                            <div className="head_member_words">   
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere alias minus numquam,
                                doloribus a vitae possimus ratione cupiditate deleniti asperiores pariatur, deserunt quae. 
                                Impedit libero vitae consequuntur, dignissimos vel provident.
                                Impedit libero vitae consequuntur, dignissimos vel provident.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="member-box">
                <div className="member_title">Competitive Programmers</div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={HarshDwivedi} alt="HeadImage" />
                        </div>
                        <div className="member_name">Harsh Dwivedi</div>
                        <div>Lead</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={KumarAnkit} alt="HeadImage" />
                        </div>
                        <div className="member_name">Kumar Ankit</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={LalitKumar} alt="HeadImage" />
                        </div>
                        <div className="member_name">Lalit Kumar</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={NamanGupta} alt="HeadImage" />
                        </div>
                        <div className="member_name">Naman Gupta</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={Nittishna} alt="HeadImage" />
                        </div>
                        <div className="member_name">Nittishna</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={RohitPradhan} alt="HeadImage" />
                        </div>
                        <div className="member_name">Rohit Pradhan</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={SaswataGhosh} alt="HeadImage" />
                        </div>
                        <div className="member_name">Saswata Ghosh</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={ShashiKiran} alt="HeadImage" />
                        </div>
                        <div className="member_name">Shashi Kiran</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={ShivamKumar} alt="HeadImage" />
                        </div>
                        <div className="member_name">Shivam Kumar</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={SnehilSinhna} alt="HeadImage" />
                        </div>
                        <div className="member_name">Snehil Sinhna</div>
                    </div>
                </div>
                <div className="member-box">
                    <div className="member_title">Web Developers</div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={AnkitRaj} alt="HeadImage" />
                        </div>
                        <div className="member_name">Ankit Raj</div>
                        <div>Lead</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={AkashChouhan} alt="HeadImage" />
                        </div>
                        <div className="member_name">Akash Chouhan</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={ArnabChatterjee} alt="HeadImage" />
                        </div>
                        <div className="member_name">Arnab Chatterjee</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={DevanshShaw} alt="HeadImage" />
                        </div>
                        <div className="member_name">Devansh Shaw</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={SouvikKar} alt="HeadImage" />
                        </div>
                        <div className="member_name">Souvik Mahapatra</div>
                    </div>
                </div>
                <div className="member-box">
                <div className="member_title">UX-UI</div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={SouravDash} alt="HeadImage" />
                            <div className="member_name">Sourav Dash</div>
                            <div>Lead</div>
                        </div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={Anshu} alt="HeadImage" />
                        </div>
                        <div className="member_name">Anshu Mohanta</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={AshishKumarMishra} alt="HeadImage" />
                        </div>
                        <div className="member_name">Ashish Mishra</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={RiteshKumar} alt="HeadImage" />
                        </div>
                        <div className="member_name">Ritesh Kumar</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={SatyajeetRamnit} alt="HeadImage" />
                        </div>
                        <div className="member_name">Satyajeet Ramnit</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={YashAnand} alt="HeadImage" />
                            <div className="member_name">Yash Anand</div>
                        </div>
                    </div>
                </div>
                <div className="member-box">
                <div className="member_title">Android Developers</div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={Taran} alt="HeadImage" />
                        </div>
                        <div className="member_name">Taranpreet Singh</div>
                        <div>Lead</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={AbhisekSamantaray} alt="HeadImage" />
                        </div>
                        <div className="member_name">Abhisek Samantaray</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={AlokKumar} alt="HeadImage" />
                        </div>
                        <div className="member_name">Alok Kumar</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={DivyanshuShekhar} alt="HeadImage" />
                        </div>
                        <div className="member_name">Divyanshu Shekhar</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={nitishSonthalia} alt="HeadImage" />
                        </div>
                        <div className="member_name">Nitish Sonthalia</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={RupanshiChawda} alt="HeadImage" />
                        </div>
                        <div className="member_name">Rupanshi Chawda</div>
                    </div>
                </div>
                <div className="member-box">
                <div className="member_title">Content Writers</div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={AshwaniSingh} alt="HeadImage" />
                        </div>
                        <div className="member_name">Ashwani Singh</div>
                        <div>Lead</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={AdyashaSatpathy} alt="HeadImage" />
                        </div>
                        <div className="member_name">Adyasha Satpathy</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={AsmitaHobisyashi} alt="HeadImage" />
                        </div>
                        <div className="member_name">Asmita Hobisyashi</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={SayakRoyChowdhury} alt="HeadImage" />
                        </div>
                        <div className="member_name">Sayak Roy</div>
                    </div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={SuryavardhanThangirala} alt="HeadImage" />
                        </div>
                        <div className="member_name">Suryavardhan</div>
                    </div>
                </div>
                <div className="member-box">
                <div className="member_title">Marketing</div>
                    <div className="member">
                        <div className="member_photo">
                            <img src={VeerSharma} alt="HeadImage" />
                        </div>
                        <div className="member_name">Veer Sharma</div>
                        <div>Lead</div>
                    </div>
                </div>
            </div>
            <Footer bgColor="footer-aboutUs"></Footer>
        </div>
       )
    }
}
export default AboutUs;