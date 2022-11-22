import React from "react";
import "./login.scss";
import { TextField, Button } from "@mui/material";

export default function Login() {
  return (
    <div className="login--container">
      <form onSubmit="">
        <div>
          <TextField
            className="login--field"
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
          <hr />
          <TextField
            className="login--field"
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
          <hr />
          <div className="login__button">
            <Button value="submit" variant="outlined">
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
