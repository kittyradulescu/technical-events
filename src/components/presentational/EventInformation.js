import React, {useEffect} from "react";
import "./AllEvents.scss";
import Avatar from "react-avatar";

const EventInformation = (props) => {

    useEffect(() => {
        props.fetchEvent()
    }, [props.fetchEvent]);


    const renderHeader = () => {
        return <div className="header">
            <div className="left">
                <div className="home-container">
                    <button className="home-button">Home</button>
                </div>
                <div className="button-container">
                    <button className="button">Create Event</button>
                </div>
            </div>
            <div className="title-container">
                <div className="title">Technical Events</div>
            </div>
        </div>
    };

    const renderParticipants = () => {
        const event = props.event;
        return event.participants.map(item =>
            <div className="participant"><Avatar name={item.firstName + " " + item.lastName}
                                                 size="20"/> {item.firstName + " " + item.lastName} </div>);
    };

    const renderComments = () => {
        const event = props.event;
        return event.comments.map(item =>
            <div className="comment">{item.description}</div>
        );
    }

    const renderBody = () => {
        const event = props.event;
        const date = props.event && new Date(props.event.location.date);

        return event && <div className="event-flex-container">
            <div className="title">{event.title}</div>
            <div className="information-container">
                <div className="image-container">
                </div>
                <div className="location-container">
                    <div className="location">
                        <div>{date.toDateString()}</div>
                        <div>{date.toTimeString()}</div>
                        <div>Add to calendar</div>
                        <div>{event.location && event.location.online ? "Online event" : ""}</div>
                        <div>{event.location && event.location.eventLink}</div>
                    </div>
                </div>
            </div>
            <div className="summary-container">
                <div className="summary">
                    <div className="about">
                        {event.summary.about}
                    </div>
                    <div className="description">
                        {event.summary.description}
                    </div>
                    <div className="cost">
                        {event.summary.cost}
                    </div>

                    <div className="online-details">
                        {event.onlineDetails.meetingType}
                        <div className="url">
                            {event.onlineDetails.url}
                        </div>
                        <div className="login">
                            Meeting ID: {event.onlineDetails.meetingId}
                            Password: {event.onlineDetails.password}
                        </div>
                    </div>
                    <div className="language">
                        {event.language}
                    </div>
                </div>
            </div>
            <div className="attendees-container">
                <div className="participants">
                    <div>Participants ({event.participants.length})</div>
                    <div className="attendees">
                        {renderParticipants()}
                    </div>
                </div>
            </div>
            <div className="comments-container">
                <div className="comments">
                    Comments
                    {renderComments()}
                </div>
            </div>
        </div>
    };

    return (
        <div>
            {renderHeader()}
            {renderBody()}
        </div>
    );
};

export default EventInformation;


