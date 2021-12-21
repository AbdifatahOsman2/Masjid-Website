import ClipLoader from "react-spinners/ClipLoader";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./screens/Home";
import Login from './screens/Login'
import Event from "./screens/Event";
import EventCreation from "./screens/EventCreation";
import Classes from "./screens/Classes";
import EditEvent from "./screens/EditEvent";
import './screens/EditEvent.css'
import './screens/Login.css'
import "./components/Nav.css";
import "./screens/Classes.css";
import './screens/EventCreation.css'
import "./screens/Home.css";
import './screens/Event.css'
import "./App.css";

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="load">
          <ClipLoader
            id="loading"
            color={"#000"}
            loading={loading}
            size={150}
          />
        </div>
      ) : (
        <>
          <Nav user={user} setUser={setUser} />
          <Switch>
            <main>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path='/login'>
                <Login setUser={setUser}/>
              </Route>

              <Route path='/event'>
                <Event user={user} setUser={setUser}/>
              </Route>

              <Route path="/madrasah">
                <Classes />
              </Route>

              <Route path="/event-creation">
                <EventCreation user={user} setUser={setUser}/>
              </Route>

              <Route path="/edit-event">
                <EditEvent user={user} setUser={setUser}/>
              </Route>
              
            </main>
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
