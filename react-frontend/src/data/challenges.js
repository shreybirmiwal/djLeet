export const challenges = [
    {
        id: 'polog-house',
        name: 'polog x house',
        difficulty: 'easy',
        track1: { title: 'polog', audioSrc: null, waveformColor: 'cyan' },
        track2: { title: 'house', audioSrc: null, waveformColor: 'pink' },
        mixedTrack: { title: 'polog x house', audioSrc: null, waveformColor: 'lime' },
    },
    {
        id: 'drake-lebron',
        name: 'drake x lebron',
        difficulty: 'medium',
        track1: { title: 'drake', audioSrc: null, waveformColor: 'cyan' },
        track2: { title: 'lebron', audioSrc: null, waveformColor: 'pink' },
        mixedTrack: { title: 'drake x lebron', audioSrc: null, waveformColor: 'lime' },
    },
    {
        id: 'drake-nav',
        name: 'drake x nav',
        difficulty: 'hard',
        track1: { title: 'drake', audioSrc: null, waveformColor: 'cyan' },
        track2: { title: 'nav', audioSrc: null, waveformColor: 'pink' },
        mixedTrack: { title: 'drake x nav', audioSrc: null, waveformColor: 'lime' },
    },
];

// Helper to get Tailwind color class - adjust colors as needed
export const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
        case 'easy': return 'bg-lime-300';
        case 'medium': return 'bg-orange-300';
        case 'hard': return 'bg-red-400';
        default: return 'bg-gray-300';
    }
};

export const getDifficultyTextColor = (difficulty) => {
    switch (difficulty) {
        case 'easy': return 'text-green-700'; // Adjusted for better contrast potentially
        case 'medium': return 'text-orange-700';
        case 'hard': return 'text-red-700';
        default: return 'text-gray-700';
    }
};

// Map simple color names to Tailwind classes for waveforms/records
export const getTailwindColor = (colorName) => {
    switch (colorName) {
        case 'cyan': return 'bg-cyan-400';
        case 'pink': return 'bg-pink-400';
        case 'lime': return 'bg-lime-400';
        default: return 'bg-gray-400';
    }
};

export const getTailwindWaveformColor = (colorName) => {
    switch (colorName) {
        case 'cyan': return 'bg-cyan-500'; // Slightly different for waveform maybe
        case 'pink': return 'bg-purple-500'; // Using purple for track 2 wave as in example
        case 'lime': return 'bg-lime-500'; // Using lime for mixed wave as in example
        default: return 'bg-gray-500';
    }
};