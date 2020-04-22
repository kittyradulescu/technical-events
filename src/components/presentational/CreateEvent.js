import React, {useEffect} from "react";
import "./AllEvents.scss";
import Header from "./Header";

const CreateEvent = (props) => {

    return (
        <div>
            <Header {...props}/>
            Create Event
        </div>
    );
};

export default CreateEvent;


