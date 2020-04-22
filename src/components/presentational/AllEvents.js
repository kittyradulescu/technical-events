import React, {useEffect} from "react";
import "./AllEvents.scss";

const AllEvents = (props) => {

    useEffect(() => {
        props.fetchAllEvents()
    }, [props.fetchAllEvents]);


    const viewEventDetails = () => {
        props.history.push('/event-info');
    };

    const renderHeader = () => {
        return <div className="header">
            <div className="title">Technical Events</div>
        </div>
    };

    const renderEvents = () => {
        return props.events && props.events.map(event =>
            <div className="event-details" key={event.id}>

                <div className="event-name">
                    {event.name}
                </div>

                <div className="event-description">
                    {event.description}
                </div>

                <button className="event-info" onClick={() => viewEventDetails()}>
                    View Details
                </button>

                <button className="event-join">
                    Join
                </button>
            </div>);
    };


    return <div className="main-events">
        <div>{renderHeader()}</div>
        <div className="events-container">{renderEvents()}</div>
    </div>;


};

export default AllEvents;
