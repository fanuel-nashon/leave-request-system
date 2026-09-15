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
                <div className="flex justify-between items-center w-full border-b border-gray-200 dark:border-gray-800">
                    <div className="flex justify-between items-center w-full max-w-[1280px] mx-auto px-6 py-4">
                        <div className="flex justify-start items-center gap-x-2">
                            <Icons type="calendar" />
                            <p className="text-lg font-bold text-white">Leave Request System</p>
                        </div>
                        <div className="flex gap-x-2">
                            <Button className="dark:bg-black dark:text-white">Sign In</Button>
                            <Button className="dark:bg-dark dark:text-white border border-white px-3">Create Account</Button>
                        </div>
                    </div>
                </div>
                <div id="main">
                    <div className="max-w-[1040px] mx-auto px-8 py-16 md:py-24">
                        <h2 className={`dark:text-white font-bold text-3xl md:text-5xl ${textCenter}`}>Request time off in seconds, not emails</h2>
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-[1040px] mx-auto px-8 mt-12 text-center">
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
            </div>
        </>
    );
}

export default LandingPage;