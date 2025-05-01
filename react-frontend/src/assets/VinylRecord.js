import React from 'react';
import './VinylRecord.css';

const VinylRecord = ({ centerColor = "#ff0000", isSpinning = true }) => {
    return (
        <div className={`vinyl-container ${isSpinning ? 'spinning' : ''}`}>
            <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                {/* Outer vinyl disc with grooves */}
                <circle cx="150" cy="150" r="150" fill="black" />

                {/* Vinyl grooves */}
                <circle cx="150" cy="150" r="145" fill="none" stroke="#111" strokeWidth="0.5" />
                <circle cx="150" cy="150" r="135" fill="none" stroke="#111" strokeWidth="0.5" />
                <circle cx="150" cy="150" r="125" fill="none" stroke="#111" strokeWidth="0.5" />
                <circle cx="150" cy="150" r="115" fill="none" stroke="#111" strokeWidth="0.5" />
                <circle cx="150" cy="150" r="105" fill="none" stroke="#111" strokeWidth="0.5" />
                <circle cx="150" cy="150" r="95" fill="none" stroke="#111" strokeWidth="0.5" />
                <circle cx="150" cy="150" r="85" fill="none" stroke="#111" strokeWidth="0.5" />
                <circle cx="150" cy="150" r="75" fill="none" stroke="#111" strokeWidth="0.5" />

                {/* Label (customizable color) */}
                <circle cx="150" cy="150" r="65" fill={centerColor} />

                {/* Inner circle and hole */}
                <circle cx="150" cy="150" r="15" fill="#222" />
                <circle cx="150" cy="150" r="7" fill="#fff" />

                {/* Shine effects */}
                <ellipse cx="100" cy="100" rx="70" ry="25" fill="url(#shineGradient)" opacity="0.15" />
                <ellipse cx="200" cy="220" rx="50" ry="15" fill="url(#shineGradient)" opacity="0.1" />

                {/* Gradients for shine effect */}
                <defs>
                    <radialGradient id="shineGradient">
                        <stop offset="0%" stopColor="white" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
};

export default VinylRecord;