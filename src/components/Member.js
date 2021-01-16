import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
import '../css/Member.css';
import '../css/swiper.min.css';
import Background from './Background';
import Footer from './Footer';
import {Helmet} from 'react-helmet';

class AboutUs extends Component {
render() {
    return (
        <div className="parent-element">
            {/* <!-- Dynamic Title --> */}
            <Helmet>
                <title>Geeksforgeeks | KIIT - About Us</title>
            </Helmet>
            <Background clipType="clipping-aboutUs" overlayColor="bgcolor-aboutUs"></Background>
            <div id="aboutUs_title">
                <lable id="aboutUs_title_right">Members</lable> 
            </div>
            <div id="aboutUs_body">
                <div id="cm_title">
                    <div class="cm_title_display">Core Member</div>
                    <div class="cm_title_line"></div>
                </div>
                    <div class="aboutUs_row">
                        <div class="coreMemberCard">
                            <img src={krishMurarka} class="dpcm" />
                            <div class="namecm">Krish Murarka</div>
                            <div class="desgcm">
                                <img src={gfglogo} class="cm_gfglogo" />President
                            </div>
                            <div class="cm_social">
                                <a href="https://www.linkedin.com/in/krish-murarka-9865a3122/" title="Linkedin"><img src={linkedin} class="cm_logo" /></a>
                                <a href="https://github.com/krishmurarka" title="Github"><img src={github} class="cm_logo" /></a>
                                <a href="https://www.instagram.com/krish_murarka/" title="Instagram"><img src={instagram} class="cm_logo" /></a>
                                <a href="https://twitter.com/MurarkaKrish" title="Twitter"><img src={twitter} class="cm_logo" /></a>
                            </div>
                        </div>
                        <div class="coreMemberCard">
                            <img src={abhinavPrakash} class="dpcm" />
                            <div class="namecm">Abhinav Prakash</div>
                            <div class="desgcm">
                                <img src={gfglogo} class="cm_gfglogo" />Secretary
                            </div>
                            <div class="cm_social">
                                <a href="https://www.linkedin.com/in/itsmeabhinavprakash/" title="Linkedin"><img src={linkedin} class="cm_logo" /></a>
                                <a href="https://github.com/abhinavprkash" title="Github"><img src={github} class="cm_logo" /></a>
                                <a href="https://www.instagram.com/_abhinavprkash_/" title="Instagram"><img src={instagram} class="cm_logo" /></a>
                                <a href="https://twitter.com/abhinaprkash" title="Twitter"><img src={twitter} class="cm_logo" /></a>
                            </div>
                        </div>
                        <div class="coreMemberCard">
                            <img src={adityaDas} class="dpcm" />
                            <div class="namecm">Aditya Das</div>
                            <div class="desgcm">
                                <img src={gfglogo} class="cm_gfglogo" />Head of Department
                            </div>
                            <div class="cm_social">
                                <a href="https://www.linkedin.com/in/aditya-das-619a5019b/" title="Linkedin"><img src={linkedin} class="cm_logo" /></a>
                                <a href="https://github.com/ThatOneTallKid" title="Github"><img src={github} class="cm_logo" /></a>
                                <a href="https://twitter.com/AdityaD14206128?s=08" title="Twitter"><img src={twitter} class="cm_logo" /></a>
                            </div>
                        </div>
                    </div>
                <div id="lead_title">
                    <div class="lead_title_display">Core Member : Leads </div>
                    <div class="lead_title_line"></div>
                </div>
                    <div class="aboutUs_row">
                        <div class="coreMemberCard">
                            <img src={AnkitRaj} class="dpcm" />
                            <div class="namecm">Ankit Raj</div>
                            <div class="desgcm">
                                <img src={gfglogo} class="cm_gfglogo" />Web Dev. Lead
                            </div>
                            <div class="cm_social">
                                <a href="https://www.linkedin.com/in/ankit-raj-a3405b1b0" title="Linkedin"><img src={linkedin} class="cm_logo" /></a>
                                <a href="https://github.com/AnkitRajCode" title="Github"><img src={github} class="cm_logo" /></a>
                                <a href="https://www.instagram.com/ankit.___.raj/" title="Instagram"><img src={instagram} class="cm_logo" /></a>
                                <a href="https://twitter.com/ankit__raj__?s=08" title="Twitter"><img src={twitter} class="cm_logo" /></a>
                            </div>
                        </div>
                        <div class="coreMemberCard">
                            <img src={HarshDwivedi} class="dpcm" />
                            <div class="namecm">Harsh Dwivedi</div>
                            <div class="desgcm">
                                <img src={gfglogo} class="cm_gfglogo" />Competitive Programming Lead
                            </div>
                            <div class="cm_social">
                                <a href="https://www.linkedin.com/in/harsh-dwivedi-18224b196/" title="Linkedin"><img src={linkedin} class="cm_logo" /></a>
                                <a href="https://github.com/HarshCodes-07" title="Github"><img src={github} class="cm_logo" /></a>
                                <a href="https://www.instagram.com/_heisenberg.___/" title="Instagram"><img src={instagram} class="cm_logo" /></a>
                            </div>
                        </div>
                        <div class="coreMemberCard">
                            <img src={Taran} class="dpcm" />
                            <div class="namecm">Taranpreet Singh Chabbra</div>
                            <div class="desgcm">
                                <img src={gfglogo} class="cm_gfglogo" />Android Dev. Lead
                            </div>
                            <div class="cm_social">
                                <a href="https://www.linkedin.com/in/taranpreet-singh-chabbra-27517918a/" title="Linkedin"><img src={linkedin} class="cm_logo" /></a>
                                <a href="https://github.com/singhtaran1005" title="Github"><img src={github} class="cm_logo" /></a>
                                <a href="https://www.instagram.com/taran_3010/" title="Instagram"><img src={instagram} class="cm_logo" /></a>
                                <a href="https://twitter.com/Taran17809555" title="Twitter"><img src={twitter} class="cm_logo" /></a>
                            </div>
                        </div>
                        <div class="coreMemberCard">
                            <img src={SouravDash} class="dpcm" />
                            <div class="namecm">Sourav Dash</div>
                            <div class="desgcm">
                                <img src={gfglogo} class="cm_gfglogo" />Ux-UI Lead
                            </div>
                            <div class="cm_social">
                                <a href="https://www.linkedin.com/in/srv-uxd/" title="Linkedin"><img src={linkedin} class="cm_logo" /></a>
                                <a href="https://github.com/kingsrv18" title="Github"><img src={github} class="cm_logo" /></a>
                                <a href="https://www.instagram.com/srv_18/" title="Instagram"><img src={instagram} class="cm_logo" /></a>
                                <a href="https://twitter.com/theSRV18" title="Twitter"><img src={twitter} class="cm_logo" /></a>
                            </div>
                        </div>
                        <div class="coreMemberCard">
                            <img src={AshwaniSingh} class="dpcm" />
                            <div class="namecm">Ashwani Singh</div>
                            <div class="desgcm">
                                <img src={gfglogo} class="cm_gfglogo" />Content Writing Lead
                            </div>
                            <div class="cm_social">
                                <a href="https://www.linkedin.com/in/ashwani-singh-542b421b4" title="Linkedin"><img src={linkedin} class="cm_logo" /></a>
                                <a href="https://github.com/darthAlgo" title="Github"><img src={github} class="cm_logo" /></a>
                                <a href="https://www.instagram.com/_ashwani__singh/" title="Instagram"><img src={instagram} class="cm_logo" /></a>
                                <a href="https://twitter.com/___Ashwani__" title="Twitter"><img src={twitter} class="cm_logo" /></a>
                            </div>
                        </div>
                        <div class="coreMemberCard">
                            <img src={VeerSharma} class="dpcm" />
                            <div class="namecm">Veer Sharma</div>
                            <div class="desgcm">
                                <img src={gfglogo} class="cm_gfglogo" />Marketing Lead
                            </div>
                            <div class="cm_social">
                                <a href="https://www.linkedin.com/in/veer-sharma-0403631b9" title="Linkedin"><img src={linkedin} class="cm_logo" /></a>
                                <a href="https://github.com/galahadveer" title="Github"><img src={github} class="cm_logo" /></a>
                                <a href="https://www.instagram.com/galahadveer/" title="Instagram"><img src={instagram} class="cm_logo" /></a>
                                <a href="https://mobile.twitter.com/VeerSha76890926" title="Twitter"><img src={twitter} class="cm_logo" /></a>
                            </div>
                        </div>
                    </div>
                <div class="member_title_display">Members : Web Developers & Ux-UI </div>
                    <Swiper slidesPerView={4} className="swiper-container">
                        <SwiperSlide className="swiper-slide">
                            <img src={AkashChouhan} className="dp_cm_member"/>
                                <div className="name_member">Akash Chouhan</div>
                                <div className="desg_member">Web Developer</div><br/>
                                <div className="cm_social">
                                    <a href="https://in.linkedin.com/in/akashchouhan16" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/akashchouhan16" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/akashchouhan16/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/Akash_Chouhan_" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={Anshu} className="dp_cm_member"/>
                                <div className="name_member">Anshu Mohanta</div>
                                <div className="desg_member">Web Developer & Ux-Ui</div><br/>
                                <div className="cm_social">
                                    <a href="www.linkedin.com/in/bitraylee" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/bitraylee" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/anshu.draw/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/bit_raylee" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={ArnabChatterjee} className="dp_cm_member"/>
                                <div className="name_member">Arnab Chatterjee</div>
                                <div className="desg_member">Web Developer</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/arnab-chatterjee-3944341a0/" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/arn4b" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/_arn4b_/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/cyanide_arnab" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={AshishKumarMishra} className="dp_cm_member"/>
                                <div className="name_member">Ashish kumar Mishra</div>
                                <div className="desg_member">Ux-Ui</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/ashish-kumar-mishra-91366b193" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/ashishmishra-bit" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/a_s_h_i_s_h_mishra" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={DevanshShaw} className="dp_cm_member"/>
                                <div className="name_member">Devansh Shaw</div>
                                <div className="desg_member">Web Developer</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/devansh-shaw-b26a56194" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/Devansh2000Shaw" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://instagram.com/shaw_devansh/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/shaw_devansh/" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={RiteshKumar} className="dp_cm_member"/>
                                <div className="name_member">Ritesh Kumar</div>
                                <div className="desg_member">Ux-Ui</div><br/>
                                <div className="cm_social">
                                    <a href="www.linkedin.com/in/ritesh-kumar0" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/wordssaysalot" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/wordssaysalot/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/dewdropxD" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={SatyajeetRamnit} className="dp_cm_member"/>
                                <div className="name_member">Satyajeet Ramnit</div>
                                <div className="desg_member">Ux-Ui</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/satyajeet-ramnit-2708" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/satyajeetramnit" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/satyajeet_ramnit" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/RamnitSatyajeet?s=08" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={SouvikKar} className="dp_cm_member"/>
                                <div className="name_member">Souvik Kar Mahapatra</div>
                                <div className="desg_member">Web Developer</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/souvik-kar-mahapatra-b7652b1b7/" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/DarthCucumber" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/souvikinator/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/DarthCucumber" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={YashAnand} className="dp_cm_member"/>
                                <div className="name_member">Yash Anand</div>
                                <div className="desg_member">Ux-Ui</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/yash-anand-6719a81ba" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/yashan0202" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/Yashan0202" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                    </Swiper>

                <div class="member_title_display">Members : Competitive Programming </div>
                    <Swiper slidesPerView={4} className="swiper-container">
                        <SwiperSlide className="swiper-slide">
                            <img src={KumarAnkit} className="dp_cm_member"/>
                                <div className="name_member">Kumar Ankit</div>
                                <div className="desg_member">Competitive Programmer</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/kumar-ankit-830512195/" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/Masters-Akt" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/masters_akt/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/KumarAn80390085" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={LalitKumar} className="dp_cm_member"/>
                                <div className="name_member">Lalit Kumar</div>
                                <div className="desg_member">Competitive Programmer</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/kumar-ankit-830512195/" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/lalitkumar-123" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/lalitkumar_123_/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/ALALIT12" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={NamanGupta} className="dp_cm_member"/>
                                <div className="name_member">Naman Gupta</div>
                                <div className="desg_member">Competitive Programmer</div><br/>
                                <div className="cm_social">
                                    <a href="linkedin.com/in/naman-gupta-1025a8197/" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/namancoder" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/namanitis/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/HunterAsIAm" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={Nittishna} className="dp_cm_member"/>
                                <div className="name_member">Nittishna</div>
                                <div className="desg_member">Competitive Programmer</div><br/>
                                <div className="cm_social">
                                    <a href="www.linkedin.com/in/nittishna-dhar-9952831b9" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/Xyandraa9" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/nit_tflix/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/NitTflix" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={RohitPradhan} className="dp_cm_member"/>
                                <div className="name_member">Rohit Pradhan</div>
                                <div className="desg_member">Competitive Programmer</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/rohit-pradhan-a085a3185/" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/Rohit-786" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/rohit.p768/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/RohitPr08263383" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={SaswataGhosh} className="dp_cm_member"/>
                                <div className="name_member">Saswata Ghosh</div>
                                <div className="desg_member">Competitive Programmer</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/shashi-kiran-8802601b7/" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/GeekGrave" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/_darthgrave_/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/ShashiK45454010" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={ShashiKiran} className="dp_cm_member"/>
                                <div className="name_member">Shashi Kiran</div>
                                <div className="desg_member">Competitive Programmer</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/saswata-ghosh-05bb83170/" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/Shaswat-2203" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/shaswat_2203/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/Saswata88950495" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={ShivamKumar} className="dp_cm_member"/>
                                <div className="name_member">Shivam Kumar</div>
                                <div className="desg_member">Competitive Programmer</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/shivam-kumar-6391281b4/" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/shivam-kumar123" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/shivam_9137/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/shivamk03033294" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={SnehilSinhna} className="dp_cm_member"/>
                                <div className="name_member">Snehil Sinhna</div>
                                <div className="desg_member">Competitive Programmer</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/snehil-sinha" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/Lord-Lava" title="Github"><img src={github} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={SuryavardhanThangirala} className="dp_cm_member"/>
                                <div className="name_member">Suryavardhan Thangirala</div>
                                <div className="desg_member">Competitive Programmer</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/suryavardhan-thangirala-9800a81a5" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://twitter.com/SuryavardhanT" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/suryathangirala/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/SuryavardhanT" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                    </Swiper>
                
                    <div class="member_title_display">Members : Android Developers  </div>
                    <Swiper slidesPerView={4} className="swiper-container">
                        <SwiperSlide className="swiper-slide">
                            <img src={AbhisekSamantaray} className="dp_cm_member"/>
                                <div className="name_member">Abhisek Samantaray</div>
                                <div className="desg_member">Android Developer</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/abhisek-samantaray-989555195/" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/abhisekCodes" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/_programmerhub_/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/Abhisek33295513" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={AlokKumar} className="dp_cm_member"/>
                                <div className="name_member">Alok Kumar Patel</div>
                                <div className="desg_member">Android Developer</div><br/>
                                <div className="cm_social">
                                    <a href="https://in.linkedin.com/in/1--alok" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/1-alok" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/4_alok/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/4__alok" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={DivyanshuShekhar} className="dp_cm_member"/>
                                <div className="name_member">Divyanshu Shekhar</div>
                                <div className="desg_member">Android Developer</div><br/>
                                <div className="cm_social">
                                    <a href="https://in.linkedin.com/in/divyanshu-shekhar-a8a04a162" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/divshekhar/" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://instagram.com/dshekhar17" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/dshekhar17" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={nitishSonthalia} className="dp_cm_member"/>
                                <div className="name_member">Nitish Kumar Sonthalia</div>
                                <div className="desg_member">Android Developer</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/nitish-kumar-sonthalia-4713a8193/" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/nks102000" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/nitish_rider_1110/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/NitishK68693721" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={RupanshiChawda} className="dp_cm_member"/>
                                <div className="name_member">Rupanshi Chawda</div>
                                <div className="desg_member">Android Developer</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/rupanshi-chawda-a17372193/" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/rupanshi-chawda/" title="Github"><img src={github} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                    </Swiper>
                
                <div class="member_title_display">Members : Content Writing & Marketing </div>
                    <Swiper slidesPerView={4} className="swiper-container">
                        
                        <SwiperSlide className="swiper-slide">
                            <img src={AdyashaSatpathy} className="dp_cm_member"/>
                                <div className="name_member">Adyasha Satpathy</div>
                                <div className="desg_member">Content Writer</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/adyasha-satpathy-040b571a7" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/Adyasha600" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/_.e._n_i_g_m_a._/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/AdyashaSatpath4" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={AsmitaHobisyashi} className="dp_cm_member"/>
                                <div className="name_member">Asmita Hobisyashi</div>
                                <div className="desg_member">Content Writer</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/asmita-hobisyashi-8564071a3" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/crayonpillars" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/crayon_pillars/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={SayakRoyChowdhury} className="dp_cm_member"/>
                                <div className="name_member">Sayak Roy Chowdhury</div>
                                <div className="desg_member">Content Writer</div><br/>
                                <div className="cm_social">
                                    <a href="https://www.linkedin.com/in/sayak-roy-chowdhury-197bb819b/" title="Linkedin"><img src={linkedin} className="cm_logo1" /></a>
                                    <a href="https://github.com/Sayak11" title="Github"><img src={github} className="cm_logo" /></a>
                                    <a href="https://www.instagram.com/its_me_sayakroychowdhury/" title="Instagram"><img src={instagram} className="cm_logo" /></a>
                                    <a href="https://twitter.com/itsSRC3" title="Twitter"><img src={twitter} className="cm_logo" /></a>
                                </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            <Footer bgColor="footer-aboutUs"></Footer>
        </div>
       )
    }
}
export default AboutUs;