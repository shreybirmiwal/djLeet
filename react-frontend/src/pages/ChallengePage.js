import React from "react";
import data from "../assets/data.json";
import ChallengeCard from "../components/ChallengeCard";

export default function ChallengePage() {
    return (
        <div className="p-8 max-w-xl mx-auto bg-white rounded-lg shadow-lg mt-10">
            <h1 className="text-3xl font-bold mb-6 text-black">challenges</h1>
            {data.map((challenge) => (
                <ChallengeCard key={challenge.name} challenge={challenge} />
            ))}
        </div>
    );
}
