import axios from "axios";

const getEvent = async (eventID) => {
    const res = await axios.get(`/events/${eventID}`);
    return res.data;
}

const addEvent = async (newEvent, dispatch) => {
    const res = await axios.post('/events', newEvent);
    console.log(res)
}

const deleteEvent = async (eventID, dispatch) => {
    const res = await axios.delete(`/events/${eventID}`);
    console.log(res);
}

export { getEvent, addEvent, deleteEvent };