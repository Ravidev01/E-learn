import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "../SignIn/SignIn.css";

const SignIn = () => {
  const [input, setInput] = useState({ username: "", password: "" });
  const handleSubmit = () => {
    console.log(input);
  };
  return (
    <div className="Container">
      {/* showing the success message after Successful sign in */}
      <form onSubmit={handleSubmit}>
        <Grid>
          <Paper elevation={10} className="paperStyle">
            <Grid align="center">
              <Avatar className="avatarStyle">H</Avatar>
              <h2>Sign in</h2>
              {/* <p className={classes.errormessage}>{formError.email}</p> */}
              <TextField
                className="textFiled"
                value={input.username}
                fullWidth
                autoComplete="off"
                name="email"
                label="Email*"
                variant="outlined"
                onChange={(e) => setInput({ username: e.target.value })}
              />
              {/* <p className={classes.errormessage}>{formError.password}</p> */}
              <TextField
                className="textFiled"
                value={input.password}
                fullWidth
                autoComplete="off"
                name="password"
                label="Password*"
                type="password"
                variant="outlined"
                onChange={(e) => setInput({ password: e.target.value })}
              />
            </Grid>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className="btnStyle"
              fullWidth
            >
              Sign in
            </Button>
            <Link to="/" className="frLink">
              Forgot password ?
            </Link>
            Don't have an account ?
            <Link className="sgnLink" to="/signup">
              Sign up
            </Link>
          </Paper>
        </Grid>
      </form>
    </div>
  );
};

export default SignIn;
