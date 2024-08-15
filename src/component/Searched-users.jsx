import React from "react";
import { Link } from "react-router-dom";

export default function SearchedUsers() {
  return (
    <>
      <tr>
        <td className="user-img">
          <div className="avatar">
            <img src="./images/expert.png" alt="img" className="avatar-frame" />
            <img src="./images/user.jpg" alt="user" className="avatar-user" />
          </div>
        </td>
        <td className="user-info">
          <Link className="username">User777</Link>
          <br />
          <div className="user-fullname">Akbarov Ali</div>
        </td>
        <td>
          <i class="fa-solid fa-award"></i>
          <span>1</span>
          <p>Starter</p>
        </td>
        <td>1000</td>
      </tr>
      <tr>
        <td className="user-img">
          <div className="avatar">
            <img src="./images/expert.png" alt="img" className="avatar-frame" />
            <img src="./images/user.jpg" alt="user" className="avatar-user" />
          </div>
        </td>
        <td className="user-info">
          <Link className="username">User777</Link>
          <br />
          <div className="user-fullname">Akbarov Ali</div>
        </td>
        <td>
          <i class="fa-solid fa-award"></i>
          <span>1</span>
          <p>Starter</p>
        </td>
        <td>1000</td>
      </tr>
      <tr>
        <td className="user-img">
          <div className="avatar">
            <img src="./images/expert.png" alt="img" className="avatar-frame" />
            <img src="./images/user.jpg" alt="user" className="avatar-user" />
          </div>
        </td>
        <td className="user-info">
          <Link className="username">User777</Link>
          <br />
          <div className="user-fullname">Akbarov Ali</div>
        </td>
        <td>
          <i class="fa-solid fa-award"></i>
          <span>1</span>
          <p>Starter</p>
        </td>
        <td>1000</td>
      </tr>
    </>
  );
}
