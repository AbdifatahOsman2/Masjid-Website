import { useEffect, useState } from "react"
import { updateEvent, deleteEvent } from "../services";
import { getAllEvents } from "../services";
import { useHistory, useParams } from "react-router"

import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const EditEvent = () => {

    const [selectedEvents, setSelectedEvent] = useState({})
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [time, setTime] = useState()
    const history = useHistory()
    const params = useParams();
    const eventId = params.id;

    useEffect(() => {
        const fetchEvents = async () => {
            const fetchedEvents = await getAllEvents();
            console.log("all",fetchedEvents)
            const event = fetchedEvents.find((event) => event.id == eventId)
            setSelectedEvent(event)
            setName(event.name)
            setLocation(event.location)
            setTime(event.time)
        }
        fetchEvents()
    }, [])

    const handleSubmit = async(e) => {
        try {
            e.prevent.Default()
            const updatedEvent = {
                name,
                location,
                time
            }
            await updateEvent(updatedEvent, eventId)
            history.push("/event")
        } catch (error) {
            console.error(error)
        }
    }

    const handleDelete = async () => {
        await deleteEvent(eventId)
        history.push('/event')
    }

  return (
    <section className="edit-event" >
    <form onSubmit={handleSubmit}>

    <Box
    component="form"
    sx={{
        "& > :not(style)": { m: 1, width: "40ch" },
    }}
    noValidate
    autoComplete="off"
    >
    <TextField
        id="standard-basic"
        label="event name"
        variant="filled"
        value={name}
        onChange={(e) => setName(e.target.value)}
    />
    </Box>
    
    <Box
    component="form"
    sx={{
        "& > :not(style)": { m: 1, width: "40ch" },
    }}
    noValidate
    autoComplete="off"
    >
    <TextField
        id="standard-basic"
        label="event location"
        variant="filled"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
    />
    </Box>
    <Box
    component="form"
    sx={{
        "& > :not(style)": { m: 1, width: "40ch" },
    }}
    noValidate
    autoComplete="off"
    >
    <TextField
        id="standard-basic"
        label="event time"
        variant="filled"
        value={time}
        onChange={(e) => setTime(e.target.value)}
    />
    </Box>

    <Button type="submit" variant="contained" endIcon={<SendIcon />}>
    Post
    </Button>
    </form>
    </section>
  );
};

export default EditEvent;


