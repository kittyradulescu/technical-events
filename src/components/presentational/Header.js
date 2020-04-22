import React from "react";
import "./AllEvents.scss";

const Header = (props) => {

    const createEvent = () => {
        props.history.push('/create-event');
    };

    const returnToHome = () => {
        props.history.push('/');
    };

    return <div className="header">
        <div className="left">
            <div className="home-container">
                <button className="home-button" onClick={() => returnToHome()}>Home</button>
            </div>
            <div className="button-container">
                <button className="button" onClick={() => createEvent()}>Create Event</button>
            </div>
        </div>
        <div className="title-container">
            <div className="title">Technical Events</div>
        </div>
    </div>
};

export default Header;
