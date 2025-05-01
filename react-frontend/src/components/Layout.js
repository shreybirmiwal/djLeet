import React from 'react';

function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-400 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl p-6 sm:p-8 md:p-12 min-h-[70vh] flex flex-col">
                {children}
            </div>
        </div>
    );
}

export default Layout;