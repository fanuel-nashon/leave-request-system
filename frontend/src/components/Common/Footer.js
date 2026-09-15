import React from "react";

const currentYear = new Date().getFullYear();
function Footer(){
    return(
        <footer className="border-t dark:bg-black dark:text-white dark:border-gray-800 border-gray-200 py-4 text-center">
            <div className="flex justify-between items-center w-full max-w-[1280px] mx-auto px-6">
                <div className="flex justify-start items-center">
                    <p>&copy; {currentYear} Leave Request System</p>
                </div>
                <div className="flex justify-center items-center">
                    <p>Developed by <a href="https://github.com/fanuel-nashon" className="text-blue-500 hover:underline">Fanuel Nashon</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer