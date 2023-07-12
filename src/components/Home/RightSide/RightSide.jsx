import React, { useEffect, useState } from 'react'
import './RightSide.css'
import axios from 'axios';

const RightSide = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      const res = await axios.get('/events');
      setEvents(res.data);
      setLoading(false);
    }
    fetchEvents();
  }, []);

  if (loading) {
    return (<div>Loading...</div>)
  }

  return (
    <div className="RightSide">
      <div className='events-card'>
        {events.map((event, idx) => (
          <div className='event-card'>
            <div>
              <div><b>{event.title}</b></div>
              <div><b>{event.date}</b></div>
            </div>
            <div>{event.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RightSide
