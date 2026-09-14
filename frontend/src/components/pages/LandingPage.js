import React from "react";
import CalendarIconBadge from "../Common/CalendarIcon";
import Button from "../Common/Button";
import Icons from "../Common/CalendarIcon";

const LandingPage = ()=>{
    const grayText = {
        color: "rgba(255,255,255,0.7)"
    };

    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="flex justify-between items-center w-full">
                    <div>
                        <Icons type="calendar" />
                        <p>Leave Request System</p>
                    </div>
                    <div>
                        <Button className="bg-black text-black">Sign In</Button>
                        <Button>Create Account</Button>
                    </div>
                </div>
                <div id="main">
                    <h4 className="dark:text-white">Request time off in seconds, not emails</h4>
                    <p className="" style={grayText}>
                        One place to submit, track. and approve vacation, sick, and unapid leave - built for your whole team
                    </p>

                    <Button className="dark:bg-white dark:text-black">Get Started
                    </Button>
                    <Button
                        className="dark:bg-dark dark:text-white"
                    >
                        Sign In
                    </Button>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="">
                            <Icons type="send" />
                            <h6 className="dark:text-white">Submit in Seconds</h6>
                            <p style={grayText}>
                                Pick your dates and leave type, and your manager is notified instantly.
                            </p>
                            <h6 className="dark:text-white">Track every status</h6>
                            <p style={grayText}>
                                See pending, approved, and declined requests without chasing anyone.
                            </p>
                            <h6 className="dark:text-white">See your team's calendar</h6>
                            <p style={grayText}>
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