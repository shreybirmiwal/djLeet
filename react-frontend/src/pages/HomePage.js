import React from 'react';
import { useNavigate } from 'react-router-dom';
import VinylRecord from '../components/VinylRecord';

function HomePage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/challenges');
    };

    return (
        <div
            className="flex flex-col items-center justify-center text-center flex-grow cursor-pointer h-full"
            onClick={handleClick}
        >
            <h2 className="text-lg sm:text-xl font-semibold mb-8 animate-fade-colors">
                click anywhere to get started!
            </h2>
            <div className="flex items-center justify-center space-x-8 sm:space-x-12 md:space-x-16 my-8">
                <VinylRecord color="cyan" spinning={true} size="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" />
                {/* DJ Mixer Divider - simple representation */}
                <div className="flex space-x-3 sm:space-x-4">
                    <div className="w-3 sm:w-4 h-32 sm:h-40 md:h-48 bg-black rounded-sm"></div>
                    <div className="w-3 sm:w-4 h-32 sm:h-40 md:h-48 bg-black rounded-sm"></div>
                </div>
                <VinylRecord color="pink" spinning={true} size="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 text-gray-800">
                djleet.com
            </h1>
        </div>
    );
}

export default HomePage;