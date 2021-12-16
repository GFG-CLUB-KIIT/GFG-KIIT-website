import React, { Component } from 'react';
import NittishnaDhar from '../profile/NittishnaDhar.jpeg';
import RimshaAiman from '../profile/RimshaAiman.png';
import adityaDas from '../profile/AdityaDas.png';

import Background from './Background';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import '../css/Members.css';
import SelfAcc from './Accordation/SelfAcc';

class AboutUs extends Component {
    render() {
        return (
            <>
                <div className="parent-element flex flex-col justify-center items-center">
                    {/* <!-- Dynamic Title --> */}
                    <Helmet>
                        <title>Geeksforgeeks | KIIT - Members</title>
                    </Helmet>
                    <Background clipType="clipping-aboutUs" overlayColor="bgcolor-aboutUs"></Background>
                    <div className="aboutus_header_slogan">
                        <div style={{ fontWeight: "600", fontSize: "36px" }}>Members</div><br></br>
                        Individual commitment along with overflowing team spirit--that is what makes a Team work.
                        <lable className="aboutus_header_slogan_hide">Here is our powerhouse working behind the scenes to make every bit of learning a fun and enjoyable experience.</lable>
                    </div>
                    <div className="aboutUsBody" style={{ width: "100vw" }} >
                        <div className="our_Team_Title">Our Team</div>
                        <div className="aboutUs_slogan">Small team with millions <br /> of creativity</div>
                        <div className="head_members">
                            <div className="head_member_card">
                                <div className="head_member_photo" style={{ backgroundImage: `url(${NittishnaDhar})` }}>
                                    <div className="overlay">
                                        <div className="flex-container">
                                            <a href="https://www.linkedin.com/in/nittishna-dhar-9952831b9/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                            <a href="https://github.com/krishmurarka" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                            <a href="https://www.instagram.com/krish_murarka/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                            <a href="https://twitter.com/MurarkaKrish" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="head_member_about">
                                    <div className="head_member_name">Nittishna Dhar</div>
                                    <div className="head_member_desg">President</div>
                                    <div className="head_member_words">
                                        Nittishna Dhar is the Campus President of GeeksforGeeks - KIIT. She is a Computer Science Engineering undergrad. She is also a Google WE'21 scholar and a runner-up in the MLSA Greenhack competition. She spends her free time singing and playing the guitar. She is continually seeking ways to improve herself and advocates for gender equality in the tech business.
                                    </div>
                                </div>
                            </div>
                            <div className="head_member_card">
                                <div className="head_member_photo photo_abhinav" style={{ backgroundImage: `url(${RimshaAiman})` }}>
                                    <div className="overlay">
                                        <div className="flex-container">
                                            <a href="https://www.linkedin.com/in/rimsha-aiman-926b481b5/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                            <a href="https://github.com/abhinavprkash" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                            <a href="https://www.instagram.com/_abhinavprkash_/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                            <a href="https://twitter.com/abhinaprkash" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="inverse_aboutus_abhinav">
                                    <div className="head_member_name">Rimsha Aiman</div>
                                    <div className="head_member_desg">Secretary</div>
                                    <div className="head_member_words">
                                        Rimsha Aiman is the secretory of GeeksforGeeks-KIIT.  She is currently pursuing her bachelor's in Computer Science.  Machine learning is something she is passionate about and would choose ML models over Victoria's secrets anyday.
                                    </div>
                                </div>
                            </div>
                            {/* <div className="head_member_card">
                                <div className="head_member_photo" style={{ backgroundImage: `url(${adityaDas})` }}>
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
                            </div> */}
                        </div>
                        {/* <div className="member-box">
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
                        <div className="member_name">Snehil Sinha</div>
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
                        <div className="member-position">Lead</div>
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
                        <div className="member_photo" style={{backgroundImage:`url(${DevanshShaw})`}}>
                            <div className="overlay">
                                <div className="flex-container">
                                    <a href="https://www.linkedin.com/in/devansh-shaw-b26a56194" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/Devansh2000Shaw" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://instagram.com/shaw_devansh/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    <a href="https://final-project-2d4ae.web.app" target="_blank" rel="noopener noreferrer"><i class="fas fa-globe"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Devansh Shaw</div>
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
                        <div className="member-position">Lead</div>
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
                        <div className="member_name">Ashish Kumar Mishra</div>
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
                        <div className="member-position">Lead</div>
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
                        <div className="member-position">Lead</div>
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
                                    <a href="https://twitter.com/VeerSha76890926" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member_name">Veer Sharma</div>
                        <div className="member-position">Lead</div>
                    </div> 


                {/* </div> */}

                    </div>



                    <SelfAcc />
                </div>

                <Footer bgColor="footer-aboutUs"></Footer>
            </>
        )
    }
}
export default AboutUs;