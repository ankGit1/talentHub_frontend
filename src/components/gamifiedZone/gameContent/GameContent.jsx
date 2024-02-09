import React from "react";
import "./gameContent.css";

function GameContent() {
  return (
    <div className="p-4 gameContent_mainDiv">
      <div className="gameContent_imgDiv">
        <img src="/images/gamifiedImg.png" alt="medals-img" />
      </div>
      <div className="my-4 gameContent_infoDiv">
        <h4 className="fw-semibold">
          Engage, Learn, Conquer - Introducing Gamified Learning on Our
          Platform!
        </h4>
        <p>
          Embark on an educational journey like never before with our innovative
          gamified learning experience. Dive into a realm where learning meets
          excitement, and every achievement brings you closer to mastery.
        </p>
        <h6 className="fw-bold mt-5">How It Works:</h6>
        <p className="fw-semibold mb-1">1. Earn Points as You Learn:</p>
        <p>
          i. Engage with lessons, quizzes, and challenges to earn points. <br />{" "}
          ii. Points are awarded based on completion, accuracy, and speed of
          learning activities.
        </p>
        <p className="fw-semibold mb-1">2. Climb the Leaderboard:</p>
        <p>
          i. Compete with fellow learners and climb the leaderboard. <br /> ii.
          The more points you accumulate, the higher your rank.
        </p>
        <p className="fw-semibold mb-1">3. Unlock Achievements:</p>
        <p>
          i. Hit milestones and unlock special achievements. <br /> ii. Showcase
          your expertise and dedication to learning.
        </p>
        <h6 className="fw-bold mt-5">
          Start Your Gamified Learning Journey Today!
        </h6>
        <p>
          Experience the thrill of learning like never before. Dive into
          gamified learning, earn points, and let the adventure unfold as you
          conquer new heights of knowledge!
        </p>
      </div>
    </div>
  );
}

export default GameContent;
