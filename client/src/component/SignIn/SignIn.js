import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "../SignIn/SignIn.css";
import axios from "axios";

const SignIn = () => {
  const [input, setInput] = useState({ username: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    postData();
  };
  const postData = async () => {
    axios
      .post(
        "http://localhost:4000/api/login",
        {
          username: input.username,
          password: input.password,
        },
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="Container">
      {/* showing the success message after Successful sign in */}
      <form onSubmit={handleSubmit}>
        <div className="container">
          <Paper elevation={20} className="paperStyle">
            <Grid align="center">
              <Avatar className="avatarStyle">H</Avatar>
              <h2>Sign in</h2>
              <TextField
                className="textFiled"
                value={input.username}
                fullWidth
                autoComplete="off"
                name="email"
                label="Email*"
                variant="outlined"
                onChange={(e) =>
                  setInput({ ...input, username: e.target.value })
                }
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
            <Link to="/signin" className="frLink">
              Forgot password ?
            </Link>
            <div style={{ margin: "25px" }}>
              Don't have an account ?
              <Link className="sgnLink" to="/signup">
                Sign up
              </Link>
            </div>
          </Paper>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
