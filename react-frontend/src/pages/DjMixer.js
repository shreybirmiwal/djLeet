import React, { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import WaveSurfer from "wavesurfer.js";
import data from "../assets/data.json";
import VinylRecord from "../assets/VinylRecord";

export default function DjMixer() {
    const { name } = useParams();
    const challenge = data.find((c) => c.name === name);
    const navigate = useNavigate();


    const waveform1Ref = useRef(null);
    const waveform2Ref = useRef(null);

    const [volume1, setVolume1] = useState(1);
    const [volume2, setVolume2] = useState(1);
    const [crossfader, setCrossfader] = useState(0.5);
    const [wave1, setWave1] = useState(null);
    const [wave2, setWave2] = useState(null);

    const [isPlaying1, setIsPlaying1] = useState(false);
    const [isPlaying2, setIsPlaying2] = useState(false);



    useEffect(() => {
        if (!challenge) return;

        const ws1 = WaveSurfer.create({
            container: waveform1Ref.current,
            waveColor: "#a855f7",
            progressColor: "#9333ea",
            height: 80,
            responsive: true,
            barWidth: 2,
            interact: true, // Enable interactions
        });

        const ws2 = WaveSurfer.create({
            container: waveform2Ref.current,
            waveColor: "#06b6d4",
            progressColor: "#0ea5e9",
            height: 80,
            responsive: true,
            barWidth: 2,
            interact: true,
        });

        // Load tracks and set up events
        const loadTracks = async () => {
            await Promise.all([
                ws1.load(challenge.track1.audio),
                ws2.load(challenge.track2.audio)
            ]);

            // Add click handlers for seeking
            ws1.on('click', () => ws1.seekTo(ws1.getCurrentTime() / ws1.getDuration()));
            ws2.on('click', () => ws2.seekTo(ws2.getCurrentTime() / ws2.getDuration()));
        };

        loadTracks();
        setWave1(ws1);
        setWave2(ws2);

        return () => {
            ws1.destroy();
            ws2.destroy();
        };
    }, [challenge]);


    const handlePlayPause = (wave, setPlaying) => {
        if (!wave) return;

        wave.playPause();
        setPlaying(wave.isPlaying());
    };

    // Update volume handler
    const handleVolumeChange = (wave, setVolume) => (e) => {
        const vol = parseFloat(e.target.value);
        if (wave) wave.setVolume(vol);
        setVolume(vol);
    };

    const handleCrossfade = (e) => {
        const value = parseFloat(e.target.value);
        setCrossfader(value);

        const leftVol = Math.cos(value * 0.5 * Math.PI);
        const rightVol = Math.cos((1 - value) * 0.5 * Math.PI);

        if (wave1) wave1.setVolume(leftVol * volume1);
        if (wave2) wave2.setVolume(rightVol * volume2);
    };
    if (!challenge) return <div className="text-white p-10">Challenge not found.</div>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-700 to-cyan-500 font-opensauce text-white p-6">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8 text-black">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-purple-700">DJ Mixer - {challenge.name}</h1>
                    <button
                        onClick={() => navigate("/challenges")}
                        className="bg-gray-200 text-sm px-4 py-2 rounded hover:bg-gray-300"
                    >
                        ⬅ Return to Challenges
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Deck 1 */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow relative">
                        <h2 className="text-xl font-semibold mb-1">{challenge.track1.title}</h2>
                        <p className="text-sm text-gray-600 mb-2">Deck A</p>
                        <div className="mb-2 flex justify-center">
                            <VinylRecord centerColor="purple" isSpinning={isPlaying1} />
                        </div>
                        <div ref={waveform1Ref} className="mb-4"></div>
                        <div className="space-y-2">
                            <button
                                onClick={() => handlePlayPause(wave1, setIsPlaying1)}
                                className="bg-purple-600 text-white w-full py-2 rounded"
                            >
                                Play / Pause
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume1}
                                onChange={handleVolumeChange(setVolume1)}
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Deck 2 */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow relative">
                        <h2 className="text-xl font-semibold mb-1">{challenge.track2.title}</h2>
                        <p className="text-sm text-gray-600 mb-2">Deck B</p>
                        <div className="mb-2 flex justify-center">
                            <VinylRecord centerColor="cyan" isSpinning={isPlaying2} />
                        </div>
                        <div ref={waveform2Ref} className="mb-4"></div>
                        <div className="space-y-2">
                            <button
                                onClick={() => handlePlayPause(wave2, setIsPlaying2)}
                                className="bg-cyan-600 text-white w-full py-2 rounded"
                            >
                                Play / Pause
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume2}
                                onChange={handleVolumeChange(setVolume2)}
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Crossfader */}
                <div className="text-center mt-10">
                    <h3 className="text-lg font-semibold text-purple-700 mb-2"> Crossfader</h3>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={crossfader}
                        onChange={handleCrossfade}
                        className="w-full"
                    />
                    <div className="flex justify-between text-sm mt-1 px-2 text-gray-500">
                        <span>Deck A</span>
                        <span>Deck B</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
