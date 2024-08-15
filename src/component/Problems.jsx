import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProblemItems from "./Problem-items";

export default function Problems() {
  const [inputValue, setInputValue] = useState("");
  return (
    <section className="problems-section">
      <div className="container">
        <div className="problems-wrapper">
          <div className="main-problems">
            <div className="problems-header">
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
                <select>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </form>
            </div>
            <div className="problems-body">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>DIfficulity</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <ProblemItems />
                </tbody>
              </table>
            </div>
          </div>
          <div className="tags">
            <div className="tags-name">Microsoft</div>
            <div className="tags-name">Amazon</div>
            <div className="tags-name">Arr</div>
            <div className="tags-name">For</div>
            <div className="tags-name">Oracle</div>
            <div className="tags-name">Google</div>
            <div className="tags-name">Case</div>
          </div>
        </div>
      </div>
    </section>
  );
}
