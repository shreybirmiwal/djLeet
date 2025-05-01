import React from 'react';
import { getTailwindWaveformColor } from '../data/challenges';

// This is a STATIC placeholder for a waveform visualization
function Waveform({ color = 'gray', barCount = 40 }) {
    const bgColorClass = getTailwindWaveformColor(color);
    // Generate some random heights for visual variety
    const bars = React.useMemo(() =>
        Array.from({ length: barCount }, () => Math.random() * 0.8 + 0.2), // Height factor between 0.2 and 1.0
        [barCount]);

    return (
        <div className="h-16 flex items-center justify-between space-x-px bg-gray-100 p-2 rounded">
            {bars.map((height, index) => (
                <div
                    key={index}
                    className={`w-1 ${bgColorClass} rounded-sm`}
                    style={{ height: `${height * 100}%` }}
                />
            ))}
        </div>
    );
}

export default Waveform;