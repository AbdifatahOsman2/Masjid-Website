import { getAllEvents } from "../services";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";



const DonationPage = (props) => {
  return (
    <div>
      <section className="donation-section">
        <h1>Donation Form</h1>
        <p>Incididunt esse quis est sit laboris sit aliqua ipsum ipsum eiusmod consequat ad aliqua.Incididunt esse quis est sit laboris sit aliqua ipsum ipsum eiusmod consequat ad aliqua.</p>

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
    <lable >event time
      <TextField
        id="standard-basic"
        label="event location"
        variant="filled"
      />
      </lable>
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
    
        
        
      />
    </Box>
    
    <Button type="submit" variant="contained">
      Donate
    </Button>


      </section>
    </div>
  );
};

export default DonationPage;



