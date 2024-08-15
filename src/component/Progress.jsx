import React from 'react';

const Progress = ({ percentage }) => {
    const radius = 50; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Circumference of the full circle
    const offset = circumference - (percentage / 200) * circumference; // Calculate offset for the percentage


    const getColor = (percentage) => {
        if (percentage <= 30) {
            return 'red';
        } else if (percentage <= 60) {
            return 'orange';
        } else {
            return 'lime';
        }
    };
    return (
        <div className="half-circle-progress">
            <svg width="180" height="90" viewBox="0 0 120 60">
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="lightgray"
                    strokeWidth="10"
                    fill="none"
                    className="background-circle"
                />
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke={getColor(percentage)}
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    className="progress-circle"
                />
            </svg>
            <div className="percentage">
                {percentage}%
            </div>
        </div>
    );
};

export default Progress;
