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
          <h1>
          <span className="event-text">{event.name} </span>
          at <span className="event-text">{event.location} </span>
          during <span className="event-text">{event.time}</span>
          </h1>
          <Link to='/edit-event'>
          <Button style={{margin:"10px"}}  variant="contained" color="primary">Edit</Button>
          </Link>
          </div>
          ))}
          </>
      </section>
    </div>
  );
};

export default Event;



