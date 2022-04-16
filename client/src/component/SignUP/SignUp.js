import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import signUpImage from "../../Assets/signUpImage.svg";
import Select from "@mui/material/Select";
import axios from "axios";

import "../SignIn/SignIn.css";

const SignUP = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [role, setRole] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(input, role);
    postData();
  };

  const postData = () => {
    try {
      axios
        .post(
          "http://localhost:4000/api/signup",
          {
            username: input.username,
            email: input.email,
            password: input.password,
            role: role,
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          console.log(res);
          res.status === 200 && navigate("/signin");
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Container">
      {/* showing the success messrole after Successful sign in */}
      <form onSubmit={handleSubmit}>
        <div className="container">
          <Paper elevation={20} className="paperStyle">
            <Grid align="center">
              <Avatar className="avatarStyle" src={signUpImage} />
              <h2>Sign up</h2>
              <TextField
                required
                className="textFiled"
                value={input.username}
                fullWidth
                autoComplete="off"
                name="username"
                label="Username"
                variant="outlined"
                onChange={(e) =>
                  setInput({ ...input, username: e.target.value })
                }
              />
              <TextField
                required
                className="textFiled"
                value={input.email}
                fullWidth
                autoComplete="off"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                onChange={(e) => setInput({ ...input, email: e.target.value })}
              />
              <TextField
                required
                className="textFiled"
                value={input.password}
                fullWidth
                autoComplete="off"
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                onChange={(e) =>
                  setInput({ ...input, password: e.target.value })
                }
              />
              <FormControl sx={{ minWidth: 350 }} size="medium">
                <InputLabel id="demo-select-small">Role*</InputLabel>
                <Select
                  required
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
