import React from 'react'
import Split from 'split.js'
import CodeMirror from "@uiw/react-codemirror"

export default function CodeEditor({rightPaneRef}) {
  return (
    <div ref={rightPaneRef}>
      Lorem
      {/* <Split className="code-mirror-split" direction="vertical" sizes={[60,40]} minSize={60}>
      <div className="code-mirror-wrapper">
        <CodeMirror 
          value='const a = 1;'
          theme={vscodeDar}
        />
      </div>
      </Split> */}
    </div>
  )
}
