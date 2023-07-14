import React, { useEffect, useState } from 'react'
import "./AddEvents.css"
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import { addEvent, deleteEvent } from '../../../apiCalls/event';
import axios from 'axios';
import Loading from '../../Loading/Loading';

const AddEvents= () => {
    const [events, setEvents] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    // const { events : currEvents, dispatch } = useContext(EventsContext);

    useEffect(() => {
      async function fetchEvents() {
        const res = await axios.get('/events');
        setEvents(res.data);
        setLoading(false);
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
      const dt = new Date();
      const d = dt.getDate();
      const m = dt.getMonth();
      const y = dt.getFullYear();
      const date = `${d}/${m}/${y}`;

      const newEvent = {
        title,
        content,
        date,
      };

      // events.push(newAddEvent);
      addEvent(newEvent);

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

    if (loading) {
      return <><Loading /></>
    }
  
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
              <h4 className="event-content">{event.content}</h4>
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