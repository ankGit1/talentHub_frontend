import React, { useEffect, useState } from "react";
import "./account.css";
import UserForm from "./sub/UserForm";
import { CiMail } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { RiSendPlaneLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
const uploadKey = import.meta.env.VITE_upload_key;
const imagecloudKey = import.meta.env.VITE_imageCloud;
const imageService = import.meta.env.VITE_imageService;

function Account() {
  const user = JSON.parse(localStorage.getItem("user"))?.id;
  const [iFile, setiFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [disBtn, setDisBtn] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const editImg = () => {
    setDisBtn(!disBtn);
    if (!disBtn) {
      setiFile(null);
    }
  };

  const handleUpload = async (e) => {
    setiFile(e.target.files[0]);
    const selectedImg = e.target.files[0];
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", selectedImg);
      formData.append("upload_preset", uploadKey);

      const response = await axios.post(
        `${imageService}/${imagecloudKey}/image/upload`,
        formData
      );

      setUploadedUrl(response.data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  const submitImage = async () => {
    if (uploadedUrl) {
      await axios
        .put(`${import.meta.env.VITE_backend}/path/user/update/image/${user}`, {
          uploadedUrl,
        })
        .then((res) => {
          setErr("");
          setDisBtn(!disBtn);
        })
        .catch((err) => {
          setErr("getting difficulty while uploading image");
        });
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      await axios
        .get(`${import.meta.env.VITE_backend}/path/user/get/user-info/${user}`)
        .then((res) => {
          setErr("");
          setUserInfo(res.data);
        })
        .catch((err) => {
          setErr("getting difficulty while fetching data");
        });
    };
    fetchUserData();
  }, []);

  return (
    <div className="p-4 account_topDiv">
      <div className="account_imgDiv p-4">
        <div className="accountImgContainer">
          <img
            src={
              iFile
                ? URL.createObjectURL(iFile)
                : userInfo?.profilePic
                ? userInfo.profilePic
                : "/images/boy11.png"
            }
            alt="profile-pic"
          />
          {loading && <p className="small-p">loading...</p>}
          <p className="my-2 smallw-p">
            <label htmlFor="profileImg">
              <CiEdit /> edit
            </label>
            <input
              id="profileImg"
              type="file"
              disabled={disBtn}
              onChange={(e) => handleUpload(e)}
            />
          </p>
          {err && <p className="red">{err}</p>}
        </div>
        <div className="account_imgInfo">
          <div className="proTag">
            <h5 className="fw-bold m-0">{userInfo?.name}</h5>
            <span className="small-p ">({userInfo?.category})</span>
          </div>
          <p className="smallMargin">
            <CiMail />
            <span className="px-2">{userInfo?.email}</span>
          </p>
          <label htmlFor="resume" className="smallw-p">
            Upload Resume <MdOutlineFileUpload />
          </label>
          <input id="resume" type="file" disabled={disBtn} />
        </div>
        <button className="account_imageDivEdit" onClick={() => editImg()}>
          {disBtn ? <CiEdit /> : <RxCross2 />}
          {disBtn ? "edit" : "cancel"}
        </button>
        {!disBtn && (
          <button className="account_imageDivEdit" onClick={submitImage}>
            <RiSendPlaneLine />
            submit
          </button>
        )}
      </div>
      <div className="my-4 form_container">
        {userInfo && <UserForm info={userInfo} userId={user} />}
      </div>
    </div>
  );
}

export default Account;
