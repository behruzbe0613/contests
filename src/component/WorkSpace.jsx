import React, { useEffect, useRef } from "react";
import ProblemsDescription from "./ProblemsDescription";
import CodeEditor from "./CodeEditor";
import Split from "split.js";

export default function WorkSpace() {
  const leftPaneRef = useRef(null);
  const rightPaneRef = useRef(null);

  useEffect(() => {
    if (leftPaneRef.current && rightPaneRef.current) {
      Split([leftPaneRef.current, rightPaneRef.current], {
        sizes: [50, 50],
        minSize: 100,
        gutterSize: 10,
        cursor: "col-resize",
      });
    }
  }, []);
  return (
    <div className="split-container">
      <ProblemsDescription leftPaneRef={leftPaneRef}/>
      <CodeEditor rightPaneRef={rightPaneRef}/>
    </div>
  );
}
