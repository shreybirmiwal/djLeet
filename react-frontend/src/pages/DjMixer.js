import React, { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../assets/data.json";

export default function DjMixer() {

    const { name } = useParams();
    const challenge = data.find((c) => c.name === name);
    const navigate = useNavigate();

    const track1Ref = useRef(null);
    const track2Ref = useRef(null);
    const [volume1, setVolume1] = useState(1);
    const [volume2, setVolume2] = useState(1);
    const [crossfader, setCrossfader] = useState(0.5); // 0 = full left, 1 = full right

    if (!challenge) return <div>Challenge not found.</div>;


    const handlePlayPause = (ref) => {
        if (!ref.current) return;
        if (ref.current.paused) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    };

    // Volume control
    const handleVolumeChange = (ref, setVolume) => (e) => {
        const vol = parseFloat(e.target.value);
        if (ref.current) ref.current.volume = vol;
        setVolume(vol);
    };

    // Crossfader logic
    const handleCrossfade = (e) => {
        const value = parseFloat(e.target.value);
        setCrossfader(value);

        const leftVol = Math.cos(value * 0.5 * Math.PI); // smoother fade
        const rightVol = Math.cos((1 - value) * 0.5 * Math.PI);

        if (track1Ref.current) track1Ref.current.volume = leftVol * volume1;
        if (track2Ref.current) track2Ref.current.volume = rightVol * volume2;
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-500 to-cyan-400 font-opensauce text-white p-6">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-black">
                <h1 className="text-3xl font-bold text-center mb-8 text-purple-700">DJ Mixer</h1>

                {/* Decks */}
                <div className="grid md:grid-cols-2 gap-10 mb-12">
                    {/* Left Deck */}
                    <div className="bg-gray-100 p-6 rounded-xl shadow">
                        <h2 className="text-xl font-semibold mb-4">Track 1</h2>
                        <p className="text-sm text-gray-600 mb-2">BPM: 120</p>
                        <audio ref={track1Ref} src={challenge.track1.audio} />
                        <div className="space-x-4 mt-4">
                            <button
                                onClick={() => handlePlayPause(track1Ref)}
                                className="bg-purple-600 text-white px-4 py-2 rounded"
                            >
                                Play / Pause
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume1}
                                onChange={handleVolumeChange(track1Ref, setVolume1)}
                                className="w-full mt-2"
                            />
                        </div>
                    </div>

                    {/* Right Deck */}
                    <div className="bg-gray-100 p-6 rounded-xl shadow">
                        <h2 className="text-xl font-semibold mb-4">Track 2</h2>
                        <p className="text-sm text-gray-600 mb-2">BPM: 122</p>
                        <audio ref={track2Ref} src={challenge.track2.audio} />
                        <div className="space-x-4 mt-4">
                            <button
                                onClick={() => handlePlayPause(track2Ref)}
                                className="bg-purple-600 text-white px-4 py-2 rounded"
                            >
                                Play / Pause
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume2}
                                onChange={handleVolumeChange(track2Ref, setVolume2)}
                                className="w-full mt-2"
                            />
                        </div>
                    </div>
                </div>

                {/* Crossfader */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2 text-purple-700">Crossfader</h3>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={crossfader}
                        onChange={handleCrossfade}
                        className="w-full"
                    />
                    <div className="flex justify-between text-sm mt-1 px-1 text-gray-600">
                        <span>Left</span>
                        <span>Right</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
