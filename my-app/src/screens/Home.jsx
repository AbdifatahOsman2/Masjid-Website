import { useState } from 'react';
import axios from 'axios'
import { getAllEvents } from "../services";
import { useEffect } from "react";
import masjid from '../images/pic.jpeg'
import SendIcon from '@mui/icons-material/Send';

import { Box } from '@mui/system';
import { Button, Link } from '@mui/material';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';

import logo from '../images/logo.png'

const Home = () => {


  const d = new Date();
  const currentDay = d.getDate()

  const [fajr, setFajr] = useState()
  const [Dhuhr, setDhuhr] = useState()
  const [Asr, setAsr] = useState()
  const [Maghrib, setMaghrib] = useState()
  const [Isha, setIsha] = useState()

  const [events, setEvents] = useState([]);


  const instance = axios.create({
    baseURL: `https://api.pray.zone/v2/times/today.json?city=phoenix&timeformat=1`
  })

  instance.defaults.withCredentials = false;
  

  useEffect(() => {
    getAllEvents().then((fetchedEvents) => setEvents(fetchedEvents));
  }, []);

  const getSalah = async () => {
      try {
      const response = await instance.get();
      const prayers = response.data.results.datetime[0].times
      setFajr(prayers.Fajr)
      setAsr(prayers.Asr)
      setDhuhr(prayers.Dhuhr)
      setMaghrib(prayers.Maghrib)
      setIsha(prayers.Isha)
          console.log(prayers.Isha)
      } catch (error) {
          console.error(error)
      }
  }
  getSalah()


  return (
    <section className='home'>
    <div className='home-top'>
    <div className='centered'>Join Us every Friday for Jummah Prayer</div>
    <Button href="#about" variant='outlined' endIcon={<SendIcon />} className='home-btn'>Learn More</Button>
    <img id='masjid-img' src={masjid}/>
    </div>

    <div className='announcements-section'>
    <h1>Join Us</h1>
    
    <p>Upcoming Events</p>
    <div>
    {events.map((event) => (
      <p>{event.name} at {event.location} during {event.time}</p>
    ))}  
    </div>
    </div>

    <div className='Location'>
    <p>Location</p>
    <p> We are located at <a href='https://www.google.com/maps?q=Masjid+Al-Rahma&gsas=1&lsig=AB86z5UI_7qKH88NT3jvt6pjHFvv&biw=1920&bih=980&dpr=1&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj9uMLT6Ov0AhV5lWoFHYwLBikQ_AUoAXoECAIQAw'> 2916 E Mcdowell rd Phoenix AZ 85008</a>, with plenty of parking spots available.</p>
    </div>

    <div className='Reach'>
    <h4>Madrasah</h4>
    <p>We have Madrasah available for all ages during the weekend and after school sign up <a href='#'>here</a>.</p>
    </div>

    <div className='Prayer'>
    <h5>Salah Times</h5>
      <div id="prayers-conainer">
      <span><li id="first" >Fajr <br/> {fajr}</li></span>
      <span><li id="first" >Dhuhr <br/> {Dhuhr}</li></span>
      <span><li id="first" >Asr <br/> {Asr}</li></span>
      <span><li id="first" >Maghrib <br/> {Maghrib}</li></span>
      <span><li id="first" >Isha <br/> {Isha}</li></span>
      </div>
      <p>for more information about other prayer times please call us or <a href='#'>click here</a></p>
    </div>

    <div className='about' id='about'>
    <p>Welcome to Masjid Al Rahma! We are thrilled that you have chosen to learn more about us. We hope you will take the time to get to know us better and to allow us the opportunity to know you. We always welcome our neighborhoods and Communities partnering to help together for those who are in need of assistance. If we can be of any service to you or answer any question that you may have, please stop by or call us.</p>
    </div>

    <footer>
    <div className='footer-main'>
    <Container maxWidth>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={4}>
        <img src={logo}/>
        </Grid>

        <Grid borderLeft={2} item xs={12} sm={4}  className="site-map">
        <div className='site-map-container'>
        <h1>SiteMap</h1>
        <Link href='/madrasah'>
          <p>Madrasah</p>
        </Link>
          <Link href='/Login'>
          <p>Members</p>
        </Link>
          <Link href='/donate'>
          <p>Donate</p>
          </Link>
          </div>
        </Grid>


        <Grid borderLeft={2} item xs={12} sm={4} className='social-media'>
        <h1>Social Media</h1>
        
        </Grid>


      </Grid>
    </Container>
    </div>
    </footer>

    </section>
  );
};

export default Home;

// <Divider variant='middle' />
// <Divider variant='middle' id='divider-2' textAlign='center'/>
// <Divider variant='middle' />


// <div className='contact'>
// <h1>(602) 275-5493</h1>
// <p>Email</p>
// </div>
// <img src={logo}/>