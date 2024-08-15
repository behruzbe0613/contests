import React, { useState } from "react";
import Progress from "./Progress";
import ProgressProvide from "./ProgressProvide";
import ProblemItems from "./Problem-items";
import Corrects from "./Corrects";

export default function Account() {
  return (
    <section className="account">
      <div className="container">
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="account-img">
              <img src="./images/user.jpg" alt="img" />
            </div>
            <div className="user-info">
              <p className="user-name account-maintitle">user7777</p>
              <p className="user-fullname account-maintitle">Akbarov MuhammadSolih</p>
              <div className="rank-box">
                <span className="rank-title">Rank:</span>
                <span className="rank-number account-maintitle">3 000</span>
              </div>
            </div>
          </div>
          <div className="sidebar-body">
            <div className="community-status">
              <p className="account-maintitle">Community Status</p>
              <ul className="community-status-list">
                <li>
                  <img src="./images/correct.png" alt="img" /> Solutions{" "}
                  <span className="account-maintitle">0</span>
                </li>
                <li>
                  <img src="./images/correct.png" alt="img" /> Solutions{" "}
                  <span className="account-maintitle">0</span>
                </li>
                <li>
                  <img src="./images/correct.png" alt="img" /> Solutions{" "}
                  <span className="account-maintitle">0</span>
                </li>
                <li>
                  <img src="./images/correct.png" alt="img" /> Solutions{" "}
                  <span className="account-maintitle">0</span>
                </li>
              </ul>
            </div>
            <div className="language">
              <p className="account-maintitle">Language</p>
              <p className="known-language">Java</p>
              <p className="known-language">Python</p>
              <p className="known-language">JavaScript</p>
              <p className="known-language">Kotlin</p>
            </div>
          </div>
        </div>
        <div className="user-statistics">
          <div className="progress-box">
            <ProgressProvide />
          </div>
          <Corrects />
        </div>
      </div>
    </section>
  );
}
