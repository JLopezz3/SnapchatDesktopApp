import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import Preview from "./Preview";
import Chats from "./Chats";
import ChatView from "./ChatView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <Switch>
            <Route path="/chats/view">
              <ChatView />
            </Route>
            <Route path="/chats">
              <Chats />
            </Route>
            <Route path="/preview">
              <Preview />
            </Route>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
