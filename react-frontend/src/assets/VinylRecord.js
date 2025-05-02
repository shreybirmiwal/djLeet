import React from 'react';
import './VinylRecord.css';

const VinylRecord = ({ centerColor = "#ff0000", isSpinning = true }) => {
    return (
        <div className={`vinyl-container ${isSpinning ? 'spinning' : ''}`}>
            <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                {/* Base vinyl disc */}
                <circle cx="150" cy="150" r="150" fill="#121212" />

                {/* More visible vinyl grooves */}
                <circle cx="150" cy="150" r="145" fill="none" stroke="#333" strokeWidth="1" />
                <circle cx="150" cy="150" r="135" fill="none" stroke="#333" strokeWidth="1" />
                <circle cx="150" cy="150" r="125" fill="none" stroke="#333" strokeWidth="1" />
                <circle cx="150" cy="150" r="115" fill="none" stroke="#333" strokeWidth="1" />
                <circle cx="150" cy="150" r="105" fill="none" stroke="#333" strokeWidth="1" />
                <circle cx="150" cy="150" r="95" fill="none" stroke="#333" strokeWidth="1" />
                <circle cx="150" cy="150" r="85" fill="none" stroke="#333" strokeWidth="1" />
                <circle cx="150" cy="150" r="75" fill="none" stroke="#333" strokeWidth="1" />

                {/* Label (customizable color) */}
                <circle cx="150" cy="150" r="65" fill={centerColor} />

                {/* Inner circle and hole */}
                <circle cx="150" cy="150" r="15" fill="#222" />
                <circle cx="150" cy="150" r="7" fill="#fff" />

                {/* Enhanced shine effects */}
                <ellipse cx="100" cy="100" rx="70" ry="25" fill="url(#shineGradient)" opacity="0.3" />
                <ellipse cx="200" cy="220" rx="50" ry="15" fill="url(#shineGradient)" opacity="0.2" />

                {/* Additional small highlight spots */}
                <circle cx="80" cy="60" r="5" fill="white" opacity="0.4" />
                <circle cx="220" cy="90" r="3" fill="white" opacity="0.3" />
                <circle cx="175" cy="235" r="4" fill="white" opacity="0.25" />

                {/* Enhanced light reflection */}
                <path d="M 40,150 C 70,100 120,70 150,70 C 180,70 230,100 260,150"
                    fill="none" stroke="white" strokeWidth="2" opacity="0.15" />

                {/* Improved gradients for shine effect */}
                <defs>
                    <radialGradient id="shineGradient">
                        <stop offset="0%" stopColor="white" stopOpacity="1" />
                        <stop offset="70%" stopColor="white" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
};

export default VinylRecord;