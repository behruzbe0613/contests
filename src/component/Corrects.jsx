import React from "react";
import CorrectItems from "./CorrectItems";

export default function Corrects() {
  return (
    <div className="corrects-wrapper">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>DIfficulity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <CorrectItems />
          </tbody>
        </table>
      </div>
  );
}
