import React, {useState} from 'react'
import "./editPopup.css"
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
const EditPopup = ({name, urlImage, setPopup, githubUrl, instaUrl, twitterUrl}) => {
  const [popupData, setPopupData] = useState({name, urlImage, githubUrl, instaUrl, twitterUrl})
  return (
    <>
      <div className="edit-popup-content">
        <div onClick={() => setPopup(false)} className="popup-cross">
          <CancelTwoToneIcon sx={{ fontSize: "50px" }} />
        </div>

        <div className="edit-container">
          <div className="edit-addPoster">
            <AddAPhotoIcon sx={{ fontSize: "50px" }} />
          </div>
          <div className="edit-link">
            <input type="text" value={popupData.name} onChange={(e)=>{
              setPopupData({
                ...popupData,
                name: e.target.value,
              })
            }} placeholder="Edit Name" />
            <input type="text" placeholder="Edit Github Link" value={popupData.githubUrl} onChange={(e)=>{
              setPopupData({
                ...popupData,
                githubUrl: e.target.value,
            })}} />
            <input type="text" placeholder="Edit Instagram Link" value={popupData.instaUrl}
            onChange={(e)=>{
              setPopupData({
                ...popupData,
                instaUrl: e.target.value,
              })
            }}/>
            <input type="text" placeholder="Edit Twitter Link" value={popupData.twitterUrl}
            onChange={(e)=>{
              setPopupData({
                ...popupData,
                twitterUrl: e.target.value,
              })
            }}/>
          </div>

          <div className="edit-save">Save</div>
        </div>
      </div>
    </>
  );
}

export default EditPopup