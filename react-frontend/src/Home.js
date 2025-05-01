import React from 'react';


function Home() {


    return (
        // Added font-sans here to apply Open Sans globally if configured
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-purple-600 to-cyan-400 p-4 font-sans">

            <div className="bg-white rounded-lg w-full max-w-4xl shadow-xl p-8 md:p-12 lg:p-16 flex flex-col items-center">

                <p className="font-semibold italic text-lg md:text-xl mb-10 md:mb-14 animate-fade-colors">
                    click anywhere to get started!
                </p>

                <div className="flex items-center justify-center w-full space-x-4 md:space-x-20 lg:space-x-30 mb-10 md:mb-14">

                    <img
                        src='disk.png'
                        alt="Blue Vinyl Record"
                        className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain flex-shrink-0 animate-spin-slow"
                    />

                    {/* <div className="flex space-x-2 md:space-x-3 h-32 md:h-48 lg:h-56 items-center flex-shrink-0 mx-2 md:mx-4">
                        <div className="w-4 md:w-5 h-full bg-black rounded-sm"></div>
                        <div className="w-4 md:w-5 h-full bg-black rounded-sm"></div>
                    </div> */}

                    <img
                        src='disk.png'
                        alt="Pink Vinyl Record"
                        className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain flex-shrink-0 animate-spin-slow"
                    />

                </div>

                <p className="text-black font-bold text-3xl md:text-3xl lg:text-4xl">
                    DJLEET.com
                </p>

            </div>
        </div>
    );
}

export default Home;