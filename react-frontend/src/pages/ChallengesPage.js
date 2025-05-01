import React from 'react';
import ChallengeListItem from '../components/ChallengeListItem';
import { challenges } from '../data/challenges';

function ChallengesPage() {
    return (
        <div className="w-full">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 lowercase">
                challenges
            </h1>
            <div className="space-y-3 sm:space-y-4">
                {challenges.map((challenge) => (
                    <ChallengeListItem key={challenge.id} challenge={challenge} />
                ))}
            </div>
            {/* Add more content or footer if needed */}
        </div>
    );
}

export default ChallengesPage;