import { getAllEvents } from "../services";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";



const Event = (props) => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getAllEvents().then((fetchedEvents) => setEvents(fetchedEvents));
  }, []);

  return (
    <div>
      <section className="events-section">
      <>
        {events.map((event) => (
          <div className="event-container">
          <h1>{event.name} at {event.location} during {event.time}</h1>

          <Button style={{margin:"10px"}} href='/edit-event' variant="contained" color="primary">Edit</Button>
      
          </div>
          ))}
          </>
      </section>
    </div>
  );
};

export default Event;



