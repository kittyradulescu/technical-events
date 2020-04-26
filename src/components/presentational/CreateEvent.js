import React, {useState} from "react";
import "./AllEvents.scss";
import Header from "./Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import chess from '../../images/chess1.jpeg';
import TextareaAutosize from 'react-textarea-autosize';

const CreateEvent = (props) => {

    const [date, setDate] = useState(new Date());
    const [title, setTitle] = useState("");
    const [type, setType] = useState("Online");
    const options = [
        'Online', 'Onsite'
    ];
    const defaultOption = options[0];

    const handleChange = date => {
        setDate(date);
    };


    const save = () => {
        console.log(title);
        console.log(date);
        console.log(type);
    };

    return (
        <div>
            <Header {...props}/>

            <div className="event-create-container">
                <div className="past-events">
                    Number of created events: (3)
                </div>
                <div className="event-creation">
                    <div className="name">Title:</div>
                    <input id="name" className="input" placeholder={title} onChange={e => setTitle(e.target.value)}></input>
                    <div className="type">Type:</div>
                    <Dropdown className="type-dropdown"
                              options={options} value={defaultOption}
                              placeholder="Select an option" onChange={e => setType(e.value)}/>
                    <div className="date-time">Date and time:</div>
                    <DatePicker
                        className="date"
                        selected={date}
                        onChange={handleChange}
                        showTimeSelect
                        dateFormat="Pp"
                    />
                    <div className="description">About:</div>
                    <input className="input"></input>
                    <div className="description">Full description:</div>
                    <TextareaAutosize className="full-description"/>
                    <div className="cost">Cost:</div>
                    <input className="input" type="number"></input>
                    <button className="create-event" onClick={() => save()}>Save</button>
                </div>
                <div className="image-container">
                    <img className="event-image" src={chess}/>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;


