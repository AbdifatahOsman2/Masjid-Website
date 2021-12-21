import { login } from "../services";
import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      username,
      password,
    };
    const user = await login(userInfo);
    props.setUser(user);
    history.push("/")
  }
  return (
    <section id="login-body">
      <form id="login-form" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div id="login-inputs">
          <label htmlFor="username"></label>
          <input id="log-username" placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <label htmlFor="password"></label>
          <input id="log-password" placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <Button variant="contained" color="secondary" id="login-btn" type="submit">Log in</Button>
        </div>
      </form>
    </section>
  );
};

export default Login;