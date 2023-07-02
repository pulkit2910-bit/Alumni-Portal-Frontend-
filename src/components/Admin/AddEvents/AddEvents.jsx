import React, { useContext, useEffect, useState } from 'react'
import "./AddEvents.css"
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import { EventsContext } from '../../../Context/EventsContext/EventsContext';
import { addEvent, deleteEvent } from '../../../apiCalls/event';
import axios from 'axios';

const AddEvents= () => {
    const [events, setEvents] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // const { events : currEvents, dispatch } = useContext(EventsContext);

    useEffect(() => {
      async function fetchEvents() {
        const res = await axios.get('/events');
        setEvents(res.data);
      }
      fetchEvents();
    }, []);
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleContentChange = (e) => {
      setContent(e.target.value);
    };
  
    const handleAddEvent = () => {
      const newEvent = {
        title,
        content,
        date: new Date().toLocaleDateString(),
      };

      const newAddEvent = {
        title : title,
        desc : content
      }

      // events.push(newAddEvent);
      addEvent(newAddEvent);

      setEvents([...events, newEvent]);
      setTitle('');
      setContent('');
    };
  
    const handleDeleteEvent = (event, index) => {
      const updatedEvents = [...events];
      updatedEvents.splice(index, 1);
      setEvents(updatedEvents);
      const eventID = event._id;
      deleteEvent(eventID);
    };
  
    return (<>
      <AdminNavbar/> 
       <div className='event-container'>
      <div className="event-board">
        <h2>Add Events</h2>
        <div className="event-form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={handleContentChange}
          ></textarea>
          <button onClick={handleAddEvent}>Add Event</button>
        </div>
        <hr />
        <h2>Event Board</h2>
        <ul className="event-list">
          {events.map((event, index) => (
            <li className="event" key={index}>
              <h3 className="event-title">{event.title}</h3>
              <h4 className="event-date">{event.date}</h4>
              <h4 className="event-content">{event.desc}</h4>
              <span
                className="delete-button"
                onClick={() => handleDeleteEvent(event, index)}
              >
                Delete
              </span>
            </li>
          ))}
        </ul>
      </div>
      </div>
      </>
    );
  };

export default AddEvents