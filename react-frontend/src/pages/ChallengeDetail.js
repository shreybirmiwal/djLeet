import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../assets/data.json";

export default function ChallengeDetail() {
    const { name } = useParams();
    const challenge = data.find((c) => c.name === name);
    const navigate = useNavigate();

    if (!challenge) return <div>Challenge not found.</div>;

    return (
        <div className="p-8 max-w-xl mx-auto bg-white rounded-lg shadow-lg mt-10 text-black">
            <h2 className="text-2xl font-bold mb-4">{challenge.name}</h2>
            <p className="mb-4">You will have to mix these tracks into the provided solution</p>
            <div className="space-y-8">
                <div>
                    <p className="font-semibold">{challenge.track1.title}</p>
                    <audio controls src={challenge.track1.audio} className="w-full" />
                </div>
                <div>
                    <p className="font-semibold">{challenge.track2.title}</p>
                    <audio controls src={challenge.track2.audio} className="w-full" />
                </div>
                <div>
                    <p className="font-semibold">{challenge.mixed.title}</p>
                    <audio controls src={challenge.mixed.audio} className="w-full" />
                </div>
            </div>
            <button
                className="mt-6 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                onClick={() => navigate("/")}
            >
                Let's Mix!
            </button>
        </div>
    );
}
