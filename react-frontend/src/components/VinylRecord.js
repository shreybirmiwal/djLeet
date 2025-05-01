import React from 'react';
import { getTailwindColor } from '../data/challenges';

// Simple SVG or nested divs for the record
// Using nested divs for easier Tailwind styling
function VinylRecord({ color = 'gray', spinning = false, size = 'w-24 h-24' }) {
    const spinClass = spinning ? 'animate-spin-slow' : '';
    const labelColorClass = getTailwindColor(color);

    return (
        <div className={`${size} rounded-full bg-black flex items-center justify-center shadow-lg relative overflow-hidden ${spinClass}`}>
            {/* Grooves simulation (optional, subtle) */}
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className="absolute border border-gray-800 rounded-full"
                    style={{
                        width: `${90 - i * 10}%`,
                        height: `${90 - i * 10}%`,
                    }}
                />
            ))}
            {/* Label */}
            <div className={`w-1/3 h-1/3 rounded-full ${labelColorClass} flex items-center justify-center border-2 border-gray-700`}>
                {/* Spindle Hole */}
                <div className="w-3 h-3 bg-white rounded-full border border-gray-400"></div>
            </div>
        </div>
    );
}

export default VinylRecord;