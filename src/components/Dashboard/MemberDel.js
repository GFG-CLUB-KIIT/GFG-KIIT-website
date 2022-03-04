import React, { useEffect, useState } from "react";
import "./memberDel.css";
import { motion } from "framer-motion";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Part from "./Part";
import "./editPopup.css";
import ShashiKiran from "../../profile/ShashiKiran.png";
import TamoghnoBakshi from "../../profile/TamoghnoBakshi.jpg";
import AnkitRaj from "../../profile/AnkitRaj.png";
import SouravDash from "../../profile/SouravDash.png";
import HimanshuMishra from "../../profile/HimanshuMishra.jpeg";
import DevanshShaw from "../../profile/DevanshShaw.png";
import AshishKumarMishra from "../../profile/AshishKumarMishra.png";
import AvikRanjan from "../../profile/AvikRanjan.png";
import SumitKumar from "../../profile/SumitKumar.jpg";
import Soumik from "../../profile/Soumik.jpg";
import RupanshiChawda from "../../profile/RupanshiChawda.png";
import Shishir from "../../profile/Shishir.jpg";
import Pranjal from "../../profile/Pranjal.jpg";
import Sanskar from "../../profile/Sanskar.png";
import Yash from "../../profile/Yash.jpeg";
import Anshu from "../../profile/Anshu.png";
import RiteshKumar from "../../profile/RiteshKumar.png";
import AbhinavDeep from "../../profile/AbhinavDeep.jpg";
import AbhinavPrakash from "../../profile/AbhinavPrakash.jpg";
import ShreshthaKochgaway from "../../profile/ShreshthaKochgaway.png";
import Hritesh from "../../profile/Hritesh.jpg";
import NamanGupta from "../../profile/NamanGupta.png";
import RohitPradhan from "../../profile/RohitPradhan.png";
import Shivam from "../../profile/Shivam.jpg";
import SnehilSinha from "../../profile/SnehilSinha.jpg";
import NittishnaDhar from "../../profile/NittishnaDhar.jpeg";
import AbirMishra from "../../profile/AbirMishra.jpg";
import Ashwani from "../../profile/AshwaniSingh.png";
import AsmitaHobisyashi from "../../profile/AsmitaHobisyashi.jpg";
import Sayak from "../../profile/SayakRoyChowdhury.png";
import Surya from "../../profile/SuryavardhanThangirala.png";
import Pratyush from "../../profile/Pratyush.jpg";
import Rupabarna from "../../profile/Rupabarna.jpg";
import SnehaPriyangi from "../../profile/SnehaPriyangi.jpg";
import JyotsnaSingh from "../../profile/JyotsnaSingh.jpg";
import TaranpreetSingh from "../../profile/TaranpreetSinghChabbra.jpg";
import OmPrakash from "../../profile/OmPrakash.jpg";
import ShashwatSrijan from "../../profile/ShashwatSrijan.jpeg";
import AnubhabSwain from "../../profile/AnubhabSwain.jpeg";
import RimshaAiman from "../../profile/RimshaAiman.png";
import AbhishekK from "../../profile/AbhishekK.jpg";
import EshaanAnand from "../../profile/EshaanAnand.jpeg";
import AkashKumarGautam from "../../profile/AkashKumarGautam.jpg";
import AmanSingh from "../../profile/AmanSingh.jpg";
import AnupamKarmarkar from "../../profile/AnupamKarmarkar.jpg";
import MugdhaHazra from "../../profile/MugdhaHazra.jpeg";
import Arpit from "../../profile/Arpit.jpg";
import EditPopup from "./EditPopup";
import DomainAdd from "./DomainAdd";
import fetch from "isomorphic-fetch";

const MemberDel = () => {
  const [count, setCount] = useState(0);
  const [allAcc, setAllAcc] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
  });
  var normalVal = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
  };
  const setAccVal = (key, value) => {
    setAllAcc({
      ...normalVal,
      [key]: value,
    });
  };
  useEffect(() => {
    if (count == 0) {
      setTimeout(() => {
        setAllAcc({
          one: 1,
          two: 0,
          three: 0,
          four: 0,
        });
        setCount(1);
      }, 1500);
    }
  });
  const [inputVal, setInputVal] = useState({
    name: "",
    github: "",
    instagram: "",
    twitter: "",
    domain: "",
  });

  const showData = ()=>{
    // console.log(inputVal);
    console.log(data[1].lead.name);
  }

  // fetching data 

  const [data, setData] = useState([]);
  useEffect(async () => {
    
    const response = await fetch(
      "https://gfgkiit-backend.herokuapp.com/get-all-members"
    );
    const temp = await response.json();
  

    if(data) setData(temp);

  }, [])
  

  return (
    <div className="myAccord  deleteAccord">
      <h1 style={{ fontSize: "4rem", textAlign: "center" }}>Edit Members</h1>
      <motion.div
        className="accord accord1"
        animate={{
          marginTop: "1rem",
        }}
        initial={{
          marginTop: "-100vh",
        }}
        transition={{
          delay: 0.5,
        }}
      >
        <div
          onClick={() => setAccVal("one", !allAcc.one)}
          style={{ cursor: "pointer" }}
          className="title rounded-2xl"
        >
          <div className="titleName font-bold">Web Development</div>
          <div className="accordIcon cursor-pointer  ">
            {" "}
            {allAcc.one ? (
              <box-icon name="chevron-up"></box-icon>
            ) : (
              <box-icon name="chevron-down"></box-icon>
            )}
          </div>
        </div>

        {allAcc.one ? (
          <motion.div className="details">
            <Part
              lead="Om Prakash"
              leadImageUrl={OmPrakash}
              domain="Web Development Lead"
              member={
                // { name: "Himanshu Mishra", urlImage: HimanshuMishra },
                // { name: "Aman Singh", urlImage: AmanSingh },
                // { name: "Ankit Raj", urlImage: AnkitRaj },
                // { name: "Anupam Karmakar", urlImage: AnupamKarmarkar },
                // { name: "Nilabja Saniyal ", urlImage: "" },
                // { name: "Tamoghno Bakshi", urlImage: TamoghnoBakshi },
                // { name: "Sourav Dash", urlImage: SouravDash },
                // { name: "Devansh", urlImage: DevanshShaw },
                // { name: "Ashish Kumar Mishra", urlImage: AshishKumarMishra },
                data[1].teams
              }
            />
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>
      {/* Accord 2 */}
      <motion.div
        className="accord accord3"
        animate={{
          marginTop: "1rem",
        }}
        initial={{
          marginTop: "-100vh",
        }}
        transition={{
          delay: 0.2,
        }}
      >
        <div
          className="title rounded-2xl"
          onClick={() => setAccVal("four", !allAcc.four)}
          style={{ cursor: "pointer" }}
        >
          <div className="titleName font-bold">Android Development</div>
          <div className="accordIcon cursor-pointer">
            {" "}
            {allAcc.four ? (
              <box-icon name="chevron-up"></box-icon>
            ) : (
              <box-icon name="chevron-down"></box-icon>
            )}
          </div>
        </div>

        {allAcc.four ? (
          <motion.div className="details">
            <Part
              lead="Taranpreet Singh"
              leadImageUrl={TaranpreetSingh}
              domain="Android Development lead"
              member={
                // { name: "Sumit Kumar", urlImage: SumitKumar },
                // { name: "Soumik", urlImage: Soumik },
                // { name: "Rupanshi", urlImage: RupanshiChawda },
                // { name: "Mugdha Hazra", urlImage: MugdhaHazra },
                // { name: "Avik Ranjan Das", urlImage: AvikRanjan },
                // { name: "Abhishek Dutt", urlImage: "" },
                // { name: "Shishir", urlImage: Shishir },
                data[1].teams
              }
            />
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>
      {/* Accord 3 */}
      <motion.div
        className="accord accord3"
        animate={{
          marginTop: "1rem",
        }}
        initial={{
          marginTop: "-100vh",
        }}
        transition={{
          delay: 0.2,
        }}
      >
        <div
          className="title rounded-2xl"
          onClick={() => setAccVal("three", !allAcc.three)}
          style={{ cursor: "pointer" }}
        >
          <div className="titleName font-bold">UI-UX</div>
          <div className="accordIcon cursor-pointer">
            {" "}
            {allAcc.three ? (
              <box-icon name="chevron-up"></box-icon>
            ) : (
              <box-icon name="chevron-down"></box-icon>
            )}
          </div>
        </div>

        {allAcc.three ? (
          <motion.div className="details">
            <Part
              lead="Shashwat Srijan"
              leadImageUrl={ShashwatSrijan}
              domain="UI-UX lead"
              member={
                // { name: "Arpit Sahu", urlImage: Arpit },
                // { name: "Pranjal ", urlImage: Pranjal },
                // { name: "Sanskar", urlImage: Sanskar },
                // { name: "Yash", urlImage: Yash },
                // { name: "Anshu Mohanta", urlImage: Anshu },
                // { name: "Ritesh Kumar", urlImage: RiteshKumar },
                data[1].teams
              }
            />
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>
      {/* Accord 4    */}
      <motion.div
        className="accord accord2"
        animate={{
          marginTop: "1rem",
        }}
        initial={{
          marginTop: "-100vh",
        }}
        transition={{
          delay: 0.4,
        }}
      >
        <div
          className="title rounded-2xl"
          onClick={() => setAccVal("two", !allAcc.two)}
          style={{ cursor: "pointer" }}
        >
          <div className="titleName font-bold">Competitive Programming</div>
          <div className="accordIcon cursor-pointer">
            {" "}
            {allAcc.two ? (
              <box-icon name="chevron-up"></box-icon>
            ) : (
              <box-icon name="chevron-down"></box-icon>
            )}
          </div>
        </div>

        {allAcc.two ? (
          <motion.div className="details">
            <Part
              lead="Anubhab Swain"
              leadImageUrl={AnubhabSwain}
              domain="Competitive Programming Lead"
              member={
                // { name: "Abhinav Deep", urlImage: AbhinavDeep },
                // { name: "Abhinav Prakash", urlImage: AbhinavPrakash },
                // { name: "Akash Kumar", urlImage: AkashKumarGautam },
                // { name: "Shreshtha Kochgaway", urlImage: ShreshthaKochgaway },
                // { name: "Abhishek K.", urlImage: AbhishekK },
                // { name: "Devesh", urlImage: "" },
                // { name: "Eshaan", urlImage: EshaanAnand },
                // { name: "Hritesh", urlImage: Hritesh },
                // { name: "Naman Gupta", urlImage: NamanGupta },
                // { name: "Rohit Pradhan", urlImage: RohitPradhan },
                // { name: "Saksham", urlImage: "" },
                // { name: "Sejal", urlImage: "" },
                // { name: "Shashi", urlImage: ShashiKiran },
                // { name: "Shivam", urlImage: Shivam },
                // { name: "Snehil Sinha", urlImage: SnehilSinha },
                // { name: "Nittishna Dhar", urlImage: NittishnaDhar },
                data[1].teams
              }
            />
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>
      {/* Accord 5 */}
      <motion.div
        className="accord accord3"
        animate={{
          marginTop: "1rem",
        }}
        initial={{
          marginTop: "-100vh",
        }}
        transition={{
          delay: 0.2,
        }}
      >
        <div
          className="title rounded-2xl"
          onClick={() => setAccVal("five", !allAcc.five)}
          style={{ cursor: "pointer" }}
        >
          <div className="titleName font-bold">Content Writer</div>
          <div className="accordIcon cursor-pointer">
            {" "}
            {allAcc.five ? (
              <box-icon name="chevron-up"></box-icon>
            ) : (
              <box-icon name="chevron-down"></box-icon>
            )}
          </div>
        </div>

        {allAcc.five ? (
          <motion.div className="details">
            <Part
              lead={data[1].lead.name}
              leadImageUrl={data[1].lead.imageUrl}
              domain="Content Writer Lead"
              member={
                // { name: "Abir Mishra", urlImage: AbirMishra },
                // { name: "Ashwani", urlImage: Ashwani },
                // { name: "Asmita Hobisyashi", urlImage: AsmitaHobisyashi },
                // { name: "Sayak", urlImage: Sayak },
                // { name: "Surya", urlImage: Surya },

                data[1].teams
              }
            />
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>
      {/* Accord 6    */}
      <motion.div
        className="accord accord3"
        animate={{
          marginTop: "1rem",
        }}
        initial={{
          marginTop: "-100vh",
        }}
        transition={{
          delay: 0.2,
        }}
      >
        <div
          className="title rounded-2xl"
          onClick={() => setAccVal("six", !allAcc.six)}
          style={{ cursor: "pointer" }}
        >
          <div className="titleName font-bold">Marketing</div>
          <div className="accordIcon cursor-pointer">
            {" "}
            {allAcc.six ? (
              <box-icon name="chevron-up"></box-icon>
            ) : (
              <box-icon name="chevron-down"></box-icon>
            )}
          </div>
        </div>

        {allAcc.six ? (
          <motion.div className="details">
            <Part
              lead="Sneha Priyangi"
              leadImageUrl={SnehaPriyangi}
              domain="Marketing Lead"
              member={
                // { name: "Pratyush ", urlImage: Pratyush },
                // { name: "Rupabarna", urlImage: Rupabarna },
                // { name: "Ashutosh", urlImage: "" },
                data[1].teams
              }
            />
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>
      {/* Accord 7    */}
      <motion.div
        className="accord accord3"
        animate={{
          marginTop: "1rem",
        }}
        initial={{
          marginTop: "-100vh",
        }}
        transition={{
          delay: 0.2,
        }}
      >
        <div
          className="title rounded-2xl"
          onClick={() => setAccVal("seven", !allAcc.seven)}
          style={{ cursor: "pointer" }}
        >
          <div className="titleName font-bold">Women-in-tech</div>
          <div className="accordIcon cursor-pointer">
            {" "}
            {allAcc.seven ? (
              <box-icon name="chevron-up"></box-icon>
            ) : (
              <box-icon name="chevron-down"></box-icon>
            )}
          </div>
        </div>

        {allAcc.seven ? (
          <motion.div className="details">
            <Part
              lead="Nittishna"
              leadImageUrl={NittishnaDhar}
              domain="Women-in-tech Lead"
              member={
                // { name: "Asmita Hobisyachi", urlImage: AsmitaHobisyashi },
                // { name: "Ishika ", urlImage: "" },
                // { name: "Jyotsna Singh", urlImage: JyotsnaSingh },
                // { name: "Maddhuja Sen", urlImage: "" },
                // { name: "Mughda Hazra", urlImage: "" },
                // { name: "Rimsha Aiman", urlImage: RimshaAiman },
                // { name: "Rupabarna", urlImage: Rupabarna },
                // { name: "Rupanshi", urlImage: RupanshiChawda },
                // { name: "Sejal", urlImage: "" },
                // { name: "Sneha Priyangi", urlImage: SnehaPriyangi },
                data[1].teams
              }
            />
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>
      <h1
        style={{ fontSize: "4rem", textAlign: "center", marginTop: "1.3rem" }}
      >
        Add a Member
      </h1>
      <div className="memberDel-container">
        <div className="memberDel-addPoster">
          <AddAPhotoIcon sx={{ fontSize: "50px" }} />
        </div>
        <DomainAdd
          title="Domain"
          value={inputVal}
          setInputVal={setInputVal}
          myId="domain"
        />

        <div className="memberDel-link">
          <input
            onChange={(event) => {
              setInputVal({ ...inputVal, name: event.target.value });
            }}
            type="text"
            placeholder="Add a Name"
          />
          <input
            onChange={(event) => {
              setInputVal({ ...inputVal, github: event.target.value });
            }}
            type="text"
            placeholder="Add a Github Link"
          />
          <input
            onChange={(event) => {
              setInputVal({ ...inputVal, instagram: event.target.value });
            }}
            type="text"
            placeholder="Add an Instagram Link"
          />
          <input
            onChange={(event) => {
              setInputVal({ ...inputVal, twitter: event.target.value });
            }}
            type="text"
            placeholder="Add a Twitter Link"
          />
        </div>
        <div onClick={showData} className="memberDel-save">
          Save
        </div>
      </div>
    </div>
  );
};

export default MemberDel;
