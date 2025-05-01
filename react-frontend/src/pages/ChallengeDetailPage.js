import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { challenges } from '../data/challenges';
import VinylRecord from '../components/VinylRecord';
import Waveform from '../components/Waveform';

function ChallengeDetailPage() {
    const { challengeId } = useParams();
    const navigate = useNavigate();
    const challenge = challenges.find((c) => c.id === challengeId);

    // Basic state for playback simulation (controls spinning)
    const [isPlaying, setIsPlaying] = useState({ track1: false, track2: false, mixed: false });

    // In a real app, this would interact with audio elements
    const togglePlay = (trackKey) => {
        // Simple toggle for demo: only one can "play" (spin) at a time
        setIsPlaying(prev => ({
            track1: trackKey === 'track1' ? !prev.track1 : false,
            track2: trackKey === 'track2' ? !prev.track2 : false,
            mixed: trackKey === 'mixed' ? !prev.mixed : false,
        }));
    };


    if (!challenge) {
        return (
            <div className="text-center flex-grow flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold text-red-500 mb-4">challenge not found!</h1>
                <Link to="/challenges" className="text-blue-600 hover:underline">back to challenges</Link>
            </div>
        );
    }

    const renderTrackRow = (trackKey, trackData, showControls = true) => (
        <div className="flex items-center space-x-4 py-3">
            <div onClick={() => showControls && togglePlay(trackKey)} className="cursor-pointer">
                <VinylRecord
                    color={trackData.waveformColor} // Use waveform color for label simplicity here
                    spinning={isPlaying[trackKey]}
                    size="w-16 h-16"
                />
            </div>
            <div className="flex-grow">
                <p className="text-sm font-medium text-gray-600 lowercase mb-1">
                    {trackKey === 'mixed' ? 'result: ' : `${trackKey}: `}{trackData.title}
                </p>
                <Waveform color={trackData.waveformColor} />
            </div>
            {/* Basic Play/Pause Button Simulation */}
            {/* {showControls && (
             <button
                 onClick={() => togglePlay(trackKey)}
                 className="p-2 bg-gray-200 rounded hover:bg-gray-300"
             >
                 {isPlaying[trackKey] ? 'Pause' : 'Play'}
             </button>
         )} */}
        </div>
    );


    return (
        <div className="w-full flex flex-col">
            <h1 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-800 lowercase">
                challenge: {challenge.name}
            </h1>

            <div className="flex-grow space-y-4">
                {/* Track 1 */}
                {renderTrackRow('track1', challenge.track1)}

                {/* Separator/Mix Visual */}
                <div className="flex items-center justify-center py-2 space-x-8">
                    <span className="text-pink-500 text-4xl font-bold transform -rotate-12">X</span>
                    <span className="text-purple-600 text-4xl transform translate-y-2">↓</span>
                </div>

                {/* Track 2 */}
                {renderTrackRow('track2', challenge.track2)}

                {/* Mixed Track - No explicit play button needed maybe, just show */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                    {renderTrackRow('mixed', challenge.mixedTrack, true)} {/* Allow play/pause on mixed */}
                </div>
            </div>

            {/* Action Button */}
            <div className="mt-8 flex justify-end">
                <button
                    onClick={() => alert('Mixing simulation not implemented!')} // Placeholder action
                    className="bg-black text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-800 transition duration-200"
                >
                    let's mix it!
                </button>
            </div>
            {/* Back button */}
            <button onClick={() => navigate('/challenges')} className="mt-4 text-sm text-blue-600 hover:underline self-start">
                ← back to challenges
            </button>
        </div>
    );
}

export default ChallengeDetailPage;