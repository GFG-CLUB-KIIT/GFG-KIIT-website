import React, { Component } from 'react';
import krishMurarka from '../profile/KrishMurarka.png';
import abhinavPrakash from '../profile/AbhinavPrakash.png';
import adityaDas from '../profile/AdityaDas.png';
import AnkitRaj from '../profile/AnkitRaj.png';
import HarshDwivedi from '../profile/HarshDwivedi.png';
import AbhinavDeep from '../profile/AbhinavDeep.jpg';
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
import ShwetaThakur from '../profile/ShwetaThakur.jpg';
import SatyajitMishra from '../profile/SatyajitMishra.jpg';
import MadhavParikh from '../profile/MadhavParikh.jpg';
import AkashKumarGautam from '../profile/AkashKumarGautam.jpg';
import Background from './Background';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import '../css/Members.css';

class AboutUs extends Component {
   render() {
      return (
         <div className="parent-element">
            {/* <!-- Dynamic Title --> */}
            <Helmet>
               <title>Geeksforgeeks | KIIT - Members</title>
            </Helmet>
            <Background clipType="clipping-aboutUs" overlayColor="bgcolor-aboutUs"></Background>
            <div className="aboutus_header_slogan">
                <div style={{fontWeight: "600", fontSize: "35px"}}>Members</div><br></br>
                Individual commitment along with overflowing team spirit--that is what makes a Team work.
                <lable className="aboutus_header_slogan_hide">Here is our powerhouse working behind the scenes to make every bit of learning a fun and enjoyable experience.</lable>
            </div>
            <div className="aboutUsBody">
                <div className="our_Team_Title">Our Team</div>
                <div className="aboutUs_slogan">Small team with millions <br/> of creativity</div>
                <div className="head_members">
                    <div className="head_member_card">
                        <div className="head_member_photo" style={{backgroundImage:`url(${krishMurarka})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/krish-murarka-9865a3122/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/krishmurarka" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/krish_murarka/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/MurarkaKrish" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                           </div>
                        </div>
                        <div className="head_member_about">
                            <div className="head_member_name">Krish Murarka</div>
                            <div className="head_member_desg">President</div>
                            <div className="head_member_words">   
                            Krish Murarka is the Founder and Campus President of GeeksforGeeks - KIIT. He is an undergrad in Computer Science Engineering. He is also the Campus Geek of November - 2020. Krish also loves to code and has mastered C++ and Java. Krish is also a 4* coder on CodeChef. We at GeeksforGeeks - KIIT call him insomniac as he is available almost round the clock!
                            </div>
                        </div>
                    </div>
                    <div className="head_member_card">
                        <div className="head_member_photo photo_abhinav" style={{backgroundImage:`url(${abhinavPrakash})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/itsmeabhinavprakash/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/abhinavprkash" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/_abhinavprkash_/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/abhinaprkash" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                           </div>
                        </div>
                        <div className="inverse_aboutus_abhinav">
                            <div className="head_member_name">Abhinav Prakash</div>
                            <div className="head_member_desg">Secretary</div>
                            <div className="head_member_words">   
                            Abhinav Prakash is the co-leader at GeeksforGeeks - KIIT. He can be found coding or developing most of his time. Abhinav also organizes the events for GeeksforGeeks - KIIT. His passion for coding dates back to when he was in 8th class when he started coding. He has also done a decent amount of projects and contributions. He is also a 4 star coder at CodeChef.
                            </div>
                        </div>
                    </div>
                    <div className="head_member_card">
                        <div className="head_member_photo" style={{backgroundImage:`url(${adityaDas})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/aditya-das-619a5019b/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/ThatOneTallKid" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://twitter.com/AdityaD14206128?s=08" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                           </div>
                        </div>
                        <div className="head_member_about">
                            <div className="head_member_name">Aditya Das</div>
                            <div className="head_member_desg">Head of Development</div>
                            <div className="head_member_words">   
                            Aditya is one of the multi-talented persons in our club. Facing difficulty and in any field, he is always eager to solve. His passion for coding is reflected by the number of skills he acquired. Aditya has done a handful of projects including one of the famous KIIT Archives. He is also behind the Geek Bot which is being used in our Discord Server. Aditya is also the flutter lead at GeeksforGeeks - KIIT.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="member-box">
                <div className="member_title">Competitive Programmers</div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${HarshDwivedi})`}}>
                           <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/harsh-dwivedi-18224b196/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/HarshCodes-07" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/_heisenberg.___/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>

                                </div>
                           </div>
                        </div>
                        <div className="member_name">Harsh Dwivedi</div>
                        <div className="member-position">Lead</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${AbhinavDeep})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://github.com/abhinav-deep" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/abhinav_deep/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/abhinavdeep0209" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                           </div>
                        </div>
                        <div className="member_name">Abhinav Deep</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${AkashKumarGautam})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/akashkgautam" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/instinctblaze" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/i.n.s.t.i.n.c.t_16/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                </div>
                           </div>
                        </div>
                        <div className="member_name">Akash Kumar Gautam</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${KumarAnkit})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/kumar-ankit-830512195/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/Masters-Akt" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/masters_akt/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/KumarAn80390085" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                           </div>
                        </div>
                        <div className="member_name">Kumar Ankit</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${LalitKumar})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/a-lalit-2214031b0/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/lalitkumar-123" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/lalitkumar_123_/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/ALALIT12" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Lalit Kumar</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${NamanGupta})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="linkedin.com/in/naman-gupta-1025a8197/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/namancoder" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/namanitis/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/HunterAsIAm" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Naman Gupta</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${Nittishna})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="www.linkedin.com/in/nittishna-dhar-9952831b9" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/Xyandraa9" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/nit_tflix/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/NitTflix" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Nittishna</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${RohitPradhan})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/rohit-pradhan-a085a3185/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/Rohit-786" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/rohit.p768/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/RohitPr08263383" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Rohit Pradhan</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${SaswataGhosh})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/saswata-ghosh-05bb83170/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/Shaswat-2203" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/shaswat_2203/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/Saswata88950495" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Saswata Ghosh</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${ShashiKiran})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/shashi-kiran-8802601b7/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/GeekGrave" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/_darthgrave_/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/ShashiK45454010" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Shashi Kiran</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${ShivamKumar})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/shivam-kumar-6391281b4/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/shivam-kumar123" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/shivam_9137/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/shivamk03033294" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Shivam Kumar</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${SnehilSinhna})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/snehil-sinha" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/Lord-Lava" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Snehil Sinhna</div>
                    </div>
                </div>
                <div className="member-box">
                    <div className="member_title">Web Developers</div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${AnkitRaj})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/ankit-raj-a3405b1b0" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/AnkitRajCode" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://instagram.com/ankit_r.a.j?igshid=895xw0qgqmx2" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://ankitraj.netlify.app" target="_blank" rel="noopener noreferrer"><i class="fas fa-globe"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Ankit Raj</div>
                        <div>Lead</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${AkashChouhan})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://in.linkedin.com/in/akashchouhan16" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/akashchouhan16" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/akashchouhan16/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/Akash_Chouhan_" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Akash Chouhan</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${ArnabChatterjee})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/arnab-chatterjee-3944341a0/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/arn4b" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/_arn4b_/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/cyanide_arnab" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Arnab Chatterjee</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${DevanshShaw})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/devansh-shaw-b26a56194" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/Devansh2000Shaw" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://instagram.com/shaw_devansh/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/shaw_devansh/" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Devansh Shaw</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${SouvikKar})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/souvik-kar-mahapatra-b7652b1b7/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/DarthCucumber" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/souvikinator/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/DarthCucumber" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Souvik Mahapatra</div>
                    </div>
                </div>
                <div className="member-box">
                <div className="member_title">UX-UI</div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${SouravDash})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/srv-uxd/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/kingsrv18" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/srv_18/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/theSRV18" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Sourav Dash</div>
                        <div>Lead</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${Anshu})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="www.linkedin.com/in/bitraylee" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/bitraylee" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/anshu.draw/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/bit_raylee" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Anshu Mohanta</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${AshishKumarMishra})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/ashish-kumar-mishra-91366b193" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/ashishmishra-bit" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/a_s_h_i_s_h_mishra" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Ashish Mishra</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${RiteshKumar})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="www.linkedin.com/in/ritesh-kumar0" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/wordssaysalot" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/wordssaysalot/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/dewdropxD" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Ritesh Kumar</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${SatyajeetRamnit})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/satyajeet-ramnit-2708" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/satyajeetramnit" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/satyajeet_ramnit" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/RamnitSatyajeet?s=08" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Satyajeet Ramnit</div>
                    </div>
                </div>
                <div className="member-box">
                <div className="member_title">Android Developers</div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${Taran})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/taranpreet-singh-chabbra-27517918a/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/singhtaran1005" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/taran_3010/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/Taran17809555" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Taranpreet Singh</div>
                        <div>Lead</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${AbhisekSamantaray})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/abhisek-samantaray-989555195/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/abhisekCodes" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/_programmerhub_/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/Abhisek33295513" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Abhisek Samantaray</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${AlokKumar})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://in.linkedin.com/in/1--alok" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/1-alok" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/4_alok/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/4__alok" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Alok Kumar</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${DivyanshuShekhar})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://in.linkedin.com/in/divyanshu-shekhar-a8a04a162" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/divshekhar/" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://instagram.com/dshekhar17" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/dshekhar17" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Divyanshu Shekhar</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${nitishSonthalia})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/nitish-kumar-sonthalia-4713a8193/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/nks102000" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/nitish_rider_1110/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/NitishK68693721" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Nitish Sonthalia</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${RupanshiChawda})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/rupanshi-chawda-a17372193/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/rupanshi-chawda/" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Rupanshi Chawda</div>
                    </div>
                </div>
                <div className="member-box">
                <div className="member_title">Content Writers</div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${AshwaniSingh})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/ashwani-singh-542b421b4" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/darthAlgo" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/_ashwani__singh/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/___Ashwani__" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Ashwani Singh</div>
                        <div>Lead</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${AdyashaSatpathy})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/adyasha-satpathy-040b571a7" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/Adyasha600" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/_.e._n_i_g_m_a._/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/AdyashaSatpath4" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Adyasha Satpathy</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${AsmitaHobisyashi})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/asmita-hobisyashi-8564071a3" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/crayonpillars" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/crayon_pillars/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Asmita Hobisyashi</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${SayakRoyChowdhury})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/sayak-roy-chowdhury-197bb819b/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/Sayak11" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/its_me_sayakroychowdhury/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/itsSRC3" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Sayak Roy Chowdhury</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${SuryavardhanThangirala})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/suryavardhan-thangirala-9800a81a5" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/DoomsMirtz" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/tsu.070/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/SuryavardhanT" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Suryavardhan Thangirala</div>
                    </div>
                </div>
                <div className="member-box">
                <div className="member_title">Marketing</div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${VeerSharma})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/veer-sharma-0403631b9" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/galahadveer" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/galahadveer/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/VeerSha76890926" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Veer Sharma</div>
                        <div>Lead</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${MadhavParikh})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/madhav-parikh-4a37831a5" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/Maddy-Parikh" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/_.maddy_parikh._/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/ParikhMadhav" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Madhav Parikh</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${SatyajitMishra})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="www.linkedin.com/in/smish01" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/smish-hash" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/smish_/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/smish__" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Satyajit Mishra</div>
                    </div>
                    <div className="member">
                        <div className="member_photo" style={{backgroundImage:`url(${ShwetaThakur})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/shweta-thakur-131489207" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/shwets3004" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://www.instagram.com/shwets._/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/shwetat40286034" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Shweta thakur</div>
                    </div>
                </div>
            </div>
            <Footer bgColor="footer-aboutUs"></Footer>
        </div>
       )
    }
}
export default AboutUs;