import React from 'react';
import './App.css';
import LoginForm from "./components/RegistrationForm/Form";
import UserCards from "./components/userCards/UserCards";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
        <Typography variant="h4" component="h2">Form</Typography>
      <LoginForm />
      <UserCards />
    </div>
  );
}

export default App;
