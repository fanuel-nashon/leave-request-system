import React from "react";
import CalendarIconBadge from "../Common/CalendarIcon";
import Button from "../Common/Button";
import Icons from "../Common/CalendarIcon";

const LandingPage = ()=>{
    const grayText = {
        color: "rgba(255,255,255,0.7)"
    };
    const textCenter = 'text-center';
    const h6Style = 'dark:text-whitefont-semibold mt-3 mb-1';

    return (
        <>
            <div className="bg-black dark:bg-black min-h-screen">
                <div className="flex justify-between items-center w-full px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex justify-between items-center gap-2 py-2 px-2">
                        <Icons type="calendar" />
                        <p className="text-lg font-bold text-white">Leave Request System</p>
                    </div>
                    <div className="flex gap-x-2">
                        <Button className="dark:bg-black dark:text-white">Sign In</Button>
                        <Button className="dark:bg-dark dark:text-white border border-white px-3">Create Account</Button>
                    </div>
                    
                </div>
                <div id="main">
                    <div className="px-16 py-6">
                        <h2 className={`dark:text-white font-bold ${textCenter}`}>Request time off in seconds, not emails</h2>
                        <p className={`${textCenter}`} style={grayText}>
                            One place to submit, track, and approve vacation, sick, and unpaid leave —
                            <br />
                            built for your whole team.
                        </p>
                        <div className="flex justify-center gap-x-2 py-4">
                            <Button className="dark:bg-white dark:text-black px-3">Get Started
                            </Button>
                            <Button
                                className="dark:bg-dark dark:text-white border border-white px-3"
                            >
                                Sign In
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-8 px-16 mt-12 text-center">
                        <div className="flex flex-col items-center">
                            <Icons type="send" />
                            <h6 className={`${h6Style}`}>Submit in Seconds</h6>
                            <p className="text-sm" style={grayText}>
                                Pick your dates and leave type, and your manager is notified instantly.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Icons type="track" />
                            <h6 className={`${h6Style}`}>Track every status</h6>
                            <p className="text-sm" style={grayText}>
                                See pending, approved, and declined requests without chasing anyone.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Icons type="team" />
                            <h6 className={`${h6Style}`}>See your team's calendar</h6>
                            <p className="text-sm" style={grayText}>
                                Know who's out before you plan a meeting or a deadline..
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;