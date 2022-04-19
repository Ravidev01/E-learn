import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link , useNavigate } from "react-router-dom";
import "../SignIn/SignIn.css";
import loginImage from "../../Assets/loginImage.svg"
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState({ username: "", password: "" });
  const [errorMessage , setErrorMessage] = useState("")
  const handleSubmit = (e) => {
    localStorage.setItem("Auth",true)
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
      .then((res) =>{ 
        if(res.status !== 200){
          setErrorMessage(()=>"Invalid Username or Password!")
        }
         res.status === 200 && navigate('/home')
      })
      .catch((err) => setErrorMessage(()=>"Invalid Username or Password!"));

  };

  return (
    <div className="Container">
      {/* showing the success message after Successful sign in */}
      <form onSubmit={handleSubmit}>
        <div className="container" > 
         <div className="errorMessage">{ input.username !=="" &&input.password!==""&&errorMessage}</div>
          <Paper elevation={20} className="paperStyle">
            <Grid align="center">
              <Avatar className="avatarStyle"src= {loginImage}/>
              <h2 className="sign">Sign in</h2>
              <TextField required
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
              <TextField required
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
