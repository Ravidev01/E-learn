import React, { useEffect } from "react";
import { useState } from "react";
// import Button from "@mui/material/Button";

import axios from "axios";
import  {useParams}  from "react-router-dom"
import styles from  "../CourseDetails/CourseDetails.module.css"

const CourseDetails = () => {
  const [userData, setUserData] = useState([]);
  const [videoUrl, setVideoUrl] = useState("")
  const params = useParams()
  const id = (params.id).split("=")
  console.log(id,id);
  console.log(params);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/courses/getOneCourse/${id[1]}`)
      .then((res) => {
        console.table(res.data.videos[0]);
        setVideoUrl(res.data.videos[0]);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(userData);
  return (
    <div className= {styles.cards} >
       <section className={styles.destinations}>
     
     <div className={styles.grid}>
       <div>
         <img src={userData.imageUrl} alt="destination-1" />
         <h3> {userData.title}</h3>
         <p>{userData.description}</p>
         <iframe width="560" height="315" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
         <p>{userData.description}</p>
         {/* <Button className={styles.btn} variant="contained" > Buy Now</Button> */}

       </div>
     </div>
   </section>
     
    </div>
  );
};

export default CourseDetails;
