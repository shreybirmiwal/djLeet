import React from "react";
import { useNavigate } from "react-router-dom";

const colorMap = {
    easy: "bg-lime-300",
    medium: "bg-amber-300",
    hard: "bg-red-400",
};

export default function ChallengeCard({ challenge }) {
    const navigate = useNavigate();
    return (
        <div
            className={`rounded px-4 py-3 mb-2 flex justify-between items-center cursor-pointer text-purple-800 ${colorMap[challenge.difficulty]}`}
            onClick={() => navigate(`/challenge/${challenge.name}`)}
        >
            <span className="font-semibold">{challenge.name}</span>
            <span className="capitalize">{challenge.difficulty}</span>
        </div>
    );
}
