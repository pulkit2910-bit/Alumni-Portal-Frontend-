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
    <div>
      {events.map((event, idx) => (
        <div>
          <div>{event.title}</div>
          <div>{event.date}</div>
          <div>{event.content}</div>
        </div>
      ))}
    </div>
  )
}

export default RightSide
