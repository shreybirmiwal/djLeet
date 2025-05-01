import React from "react";
import { useNavigate } from "react-router-dom";
import VinylRecord from "../assets/VinylRecord";

export default function Home() {
    const navigate = useNavigate();

    const features = [
        "Online DJ mixer",
        "(coming soon) AI scorer for challenges",
        "(coming soon) More challenges and challenge creator",
        "(coming soon) More tools in the mixer + hardware support",
        "(coming soon) Community battle mode for competitive mixing",
        "(coming soon) Cloud save for mixes and challenge progress"
    ];

    return (
        <div className="font-opensauce">
            {/* Hero Section */}
            <section className="min-h-screen bg-gradient-to-r from-purple-500 to-cyan-400 flex flex-col justify-center items-center px-6 py-20">
                <div className="max-w-6xl w-full flex flex-col md:flex-row items-center">
                    {/* Left Side: Text */}
                    <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                        <h1 className="text-7xl lg:text-8xl font-bold text-white mb-4">djleet.com</h1>
                        <p className="text-xl text-white mb-6">
                            The fastest way to learn to DJ
                        </p>
                        <button
                            onClick={() => navigate("/challenges")}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition"
                        >
                            Start Mixing
                        </button>
                    </div>

                    {/* Right Side: Vinyl */}
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <div className="w-full max-w-md">
                            <VinylRecord centerColor="purple" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Features</h2>
                    <ul className="list-disc pl-6 space-y-4">
                        {features.map((feature, index) => (
                            <li key={index} className="text-xl text-gray-800">
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}