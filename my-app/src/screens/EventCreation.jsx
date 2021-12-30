import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { postEvent } from "../services";
import { FormControl } from "@mui/material";

const EventCreation = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = {
      name,
      time,
      location
    };
    await postEvent(newEvent);
    history.push("/event");
  };
  return (
    <section className="creation">
    <form onSubmit={handleSubmit}>
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "55ch" },
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
        "& > :not(style)": { m: 1, width: "55ch" },
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
        "& > :not(style)": { m: 1, width: "55ch" },
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

export default EventCreation;


