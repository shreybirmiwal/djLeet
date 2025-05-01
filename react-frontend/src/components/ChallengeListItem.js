import React from 'react';
import { Link } from 'react-router-dom';
import { getDifficultyColor, getDifficultyTextColor } from '../data/challenges';

function ChallengeListItem({ challenge }) {
    const bgColor = getDifficultyColor(challenge.difficulty);
    // const textColor = getDifficultyTextColor(challenge.difficulty); // Use blue as per image

    return (
        <Link
            to={`/challenges/${challenge.id}`}
            className={`flex justify-between items-center p-3 sm:p-4 rounded-md shadow hover:shadow-lg transition-shadow duration-200 ${bgColor}`}
        >
            <span className="font-medium text-sm sm:text-base text-blue-900 lowercase">{challenge.name}</span>
            <span className={`font-semibold text-xs sm:text-sm px-2 py-1 rounded text-blue-700 lowercase`}>
                {challenge.difficulty}
            </span>
        </Link>
    );
}

export default ChallengeListItem;