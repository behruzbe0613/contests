import React from 'react'

export default function ProblemsDescription({leftPaneRef}) {
  return (
    <div ref={leftPaneRef} style={{height: "100vh"}} className='example-container'>
      <h2 className="problem-title">1. Add Two Numbers</h2>
      <div className="info-problem">
        <div className="tags-name">
            Medium
        </div>
        <div className="tags-name">
            Java
        </div>
      </div>
      <p>You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.</p>
      <div className="example-wrapper">
        <div className="examples">
            <p className="example-number">Example 1:</p>
            <div className="example-box">
                <div className="input-box">
                    <strong>Input:</strong>
                    <p> l1 = [0], l2 = [0]</p>
                </div>
                <div className="output-box">
                    <strong>Output:</strong>
                    <p> [0]</p>
                </div>
                <div className="because-box">
                    <strong>Because:</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam odit excepturi ipsam repudiandae! Asperiores nobis dolorem aperiam tenetur consectetur?</p>
                </div>
            </div>
        </div>
        <div className="examples">
            <p className="example-number">Example 1:</p>
            <div className="example-box">
                <div className="input-box">
                    <strong>Input:</strong>
                    <p> l1 = [0], l2 = [0]</p>
                </div>
                <div className="output-box">
                    <strong>Output:</strong>
                    <p> [0]</p>
                </div>
                <div className="because-box">
                    <strong>Because:</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam odit excepturi ipsam repudiandae! Asperiores nobis dolorem aperiam tenetur consectetur?</p>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}
