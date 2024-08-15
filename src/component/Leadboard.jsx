import React, { useState } from "react";
import SearchedUsers from "./Searched-users";

export default function Leadboard() {
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="leadboard">
      <div className="container">
        <form action="#">
          <div className="search-box">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search..."
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            {inputValue.length >= 1 ? (
              <i
                class="fa-solid fa-x"
                id="clear"
                onClick={() => {
                  setInputValue("");
                }}
              ></i>
            ) : (
              ""
            )}
          </div>
        </form>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Level</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <SearchedUsers />
          </tbody>
        </table>
      </div>
    </section>
  );
}
