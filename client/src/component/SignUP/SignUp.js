import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import signUpImage from "../../Assets/signUpImage.svg";
import Select from "@mui/material/Select";

import "../SignIn/SignIn.css";

const SignUP = () => {
  const [input, setInput] = useState({ username: "", email: "", password: "" });
  const [role, setRole] = React.useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = () => {
    console.log(input);
  };

  return (
    <div className="Container">
      {/* showing the success messrole after Successful sign in */}
      <form onSubmit={handleSubmit}>
        <div className="container">
          <Paper elevation={20} className="paperStyle">
            <Grid align="center">
              <Avatar className="avatarStyle" src={ signUpImage } />
              <h2>Sign up</h2>
              <TextField
                className="textFiled"
                value={input.username}
                fullWidth
                autoComplete="off"
                name="username"
                label="Username*"
                variant="outlined"
                onChange={(e) => setInput({ username: e.target.value })}
              />
              <TextField
                className="textFiled"
                value={input.email}
                fullWidth
                autoComplete="off"
                name="email"
                label="Email*"
                type="email"
                variant="outlined"
                onChange={(e) => setInput({ ...input, email: e.target.value })}
              />
              <TextField
                className="textFiled"
                value={input.password}
                fullWidth
                autoComplete="off"
                name="password"
                label="Password*"
                type="password"
                variant="outlined"
                onChange={(e) =>
                  setInput({ ...input, password: e.target.value })
                }
              />
              <FormControl sx={{ m: 0, minWidth: 300 }} size="medium">
                <InputLabel id="demo-select-small">Role*</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={role}
                  label="role"
                  onChange={handleChange}
                >
                  <MenuItem value="Student">Student</MenuItem>
                  <MenuItem value="Teacher">Teacher</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className="btnStyle"
              fullWidth
            >
              Sign Up
            </Button>
            <div style={{ margin: "25px" }}>
              Do you have an account ?
              <Link className="sgnLink" to="/signin">
                Sign In
              </Link>
            </div>
          </Paper>
        </div>
      </form>
    </div>
  );
};

export default SignUP;
