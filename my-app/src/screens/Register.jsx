import { register } from "../services";
import { useState } from "react";
import {  useHistory } from "react-router-dom"

const Register = (props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password,
    };
    const user = await register(newUser);
    props.setUser(user);
    history.push("/")
  }
  return (
    <section id="reg-body">
      <form id="reg-form" onSubmit={handleSubmit}>
        <div className="welcome">
          <h3 id="reg-h3">Welcome to the website</h3>
          <p>This is for staff only </p>
        </div>
        <div className="inputs">
          <label htmlFor="username"></label>
          <input placeholder="username" id="reg-username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <label htmlFor="email"></label>
          <input placeholder="email" id="reg-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label htmlFor="password"></label>
          <input placeholder="password" id="reg-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button id="reg-btn" type="submit">Sign up!</button>
        </div>
      </form>
    </section>
  )
}
export default Register