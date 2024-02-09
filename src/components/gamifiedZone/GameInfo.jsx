import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";
import axios from "axios";

function GameInfo() {
  const localUser = JSON.parse(localStorage.getItem("user"))?.id;
  const [gameInfo, setGameInfo] = useState();
  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchPoints = async () => {
      await axios
        .get(
          `${import.meta.env.VITE_backend}/path/user/get/points/${localUser}`
        )
        .then((res) => {
          setErr("");
          setGameInfo(res.data);
        })
        .catch((err) => {
          console.log(err);
          setErr("Getting difficulty while fetching data");
        });
    };
    if (localUser) fetchPoints();
  }, []);

  return (
    <div className="navCoinDiv showShadow">
      <button className="navBtn2 ">
        <img className="navCoinImg" src="/images/hutCoin.svg" alt="coinImg" />
        {gameInfo?.points || 10000} <IoChevronDownOutline />
      </button>
      {gameInfo && (
        <div className="navCoinShadowDiv p-3">
          <div className="gameFlexDiv pb-2 b_border">
            <div>
              <img src="/images/hutCoin.svg" alt="coinImg" />
            </div>
            <div>
              <h5 className="mb-0 fw-bold">{gameInfo.points}</h5>
              <span className="small-p">Points earned</span>
            </div>
          </div>
          <div className="gameFlexDiv py-2 b_border">
            <div>
              <img src="/images/hutBadge.svg" alt="badgeImg" />
            </div>
            <div>
              <h5 className="mb-0 fw-bold">{gameInfo.badges}</h5>
              <span className="small-p">Badges won</span>
            </div>
          </div>
          <div className="gameFlexDiv py-2 b_border">
            <div>
              <img src="/images/streak.svg" alt="streakImg" />
            </div>
            <div>
              <h5 className="mb-0 fw-bold">1000+</h5>
              <span className="small-p">Gamified Learners</span>
            </div>
          </div>
          <div className="gameFlexDiv py-2">
            <div>
              <img src="/images/hutRank.svg" alt="rankImg" />
            </div>
            <div>
              <h5 className="mb-0 fw-bold">
                {gameInfo.points > 50000
                  ? "Gold"
                  : gameInfo.points > 20000
                  ? "Silver"
                  : "Bronze"}
              </h5>
              <span className="small-p">Your Level</span>
            </div>
          </div>
          <Link to="gamified" className="mx-0 mt-2 btn bg-primary text-white">
            Learn Gamified Learning
          </Link>
        </div>
      )}
      {err && <p className="red small-p">{err}</p>}
    </div>
  );
}

export default GameInfo;
