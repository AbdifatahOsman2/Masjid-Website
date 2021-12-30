import axios from "axios";

const apiURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : process.env.REACT_APP_API_URL;

axios.defaults.withCredentials = true;


export const defaultRoute = async () => {
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
} 

export const login = async (userInfo) => {
  try{
    const response = await  axios.post(`${apiURL}/user/login`, userInfo)
    return response.data;
  }catch(error){
    console.error(error.message)
  }
}

export const register = async (newUser) => {
  try {
    const response = await axios.post(`${apiURL}/user/register`, newUser);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

export const logout = async () => {
  try {
    await axios.get(`${apiURL}/auth/logout`)
  } catch (error) {
    console.error(error.message)
  }
}

export const getAllEvents = async() => {
  try {
    const response = await axios.get(`${apiURL}/events/`)
    return response.data
  } catch (error) {
    console.error(error.message)
  }
}

export const postEvent = async (newEvent) => {
  try {
    await axios.post(`${apiURL}/events/`, newEvent)
  } catch (error) {
    console.error(error.message)
  }
}

export const updateEvent = async (updatedEvent, eventId) => {
  try {
    await axios.put(`${apiURL}/events/${eventId}`,updatedEvent)
  } catch (error) {
    console.error(error.message)
  }
}

export const deleteEvent = async (eventId) => {
  try {
    await axios.delete(`${apiURL}/events/${eventId}`)
  } catch (error) {
    console.error(error.message)
  }
}


export const getAllMadrasahs = async() => {
  try {
    const response = await axios.get(`${apiURL}/madrasahs/`)
    return response.data
  } catch (error) {
    console.error(error.message)
  }
}

export const postMadrasahs = async (newMadrasahs) => {
  try {
    await axios.post(`${apiURL}/madrasahs/`, newMadrasahs)
  } catch (error) {
    console.error(error.message)
  }
}