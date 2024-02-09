import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./study.css";

// modules
import { Navigation } from "swiper/modules";
import TabInfo from "./subs/TabInfo";
import StudyMaterial from "./subs/StudyMaterial";
import { useParams } from "react-router-dom";
import axios from "axios";

const Tabs = () => {
  const paramCId = useParams().id;

  const [tabsData, setTabsData] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [iMaterial, setiMaterial] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMaterial = async (tab, userID) => {
    await axios
      .get(
        `${
          import.meta.env.VITE_backend
        }/path/tabs/get/tabs-material/${tab}/${userID}`
      )
      .then((res) => {
        setErr("");
        setiMaterial(res.data);
      })
      .catch((err) => {
        setErr("getting difficulty while fetching data");
      });
  };

  useEffect(() => {
    setLoading(true);
    const fetchDataFromServer = async () => {
      await axios
        .get(
          `${
            import.meta.env.VITE_backend
          }/path/course/send/course-tabs/${paramCId}`
        )
        .then((res) => {
          setErr("");
          setTabsData(res.data);
          setActiveTab(res.data[0]._id);
          setLoading(false);
        })
        .catch((err) => {
          setErr("getting difficulty while fetching data");
          setLoading(false);
        });
    };

    fetchDataFromServer();
  }, []);

  useEffect(() => {
    const callFetchMaterial = async () => {
      if (activeTab) {
        const getUserID = await JSON.parse(localStorage.getItem("user"))?.id;
        fetchMaterial(activeTab, getUserID);
      }
    };
    callFetchMaterial();
  }, [activeTab]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      {loading && <h3>loading...</h3>}
      <div className="tab-buttons">
        <Swiper
          navigation={true}
          slidesPerView={1}
          spaceBetween={8}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {tabsData.length > 0 &&
            tabsData.map((tab) => (
              <SwiperSlide
                key={tab._id}
                onClick={() => handleTabClick(tab._id)}
                className={activeTab === tab._id ? "active" : ""}
              >
                <div className="small-p">
                  <p className="my-2 study_tabTitle fw-semibold">{tab.label}</p>
                  <span className="completeSign">✔</span>
                  <p className="my-2 fw-semibold">{tab.tabName}</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {err && <p className="red">{err}</p>}

      <div className="tab-content">
        {tabsData.length > 0 &&
          tabsData.map((tab) => (
            <div
              key={tab._id}
              style={{ display: activeTab === tab._id ? "block" : "none" }}
            >
              <TabInfo idata={tab} />
              {iMaterial.length > 0 && <StudyMaterial items={iMaterial} />}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tabs;
