import React, { useEffect } from "react";
import "../CourseCard/CourseCard.css";
import { useState } from "react";
import axios from "axios";
import Card from "./Card";

const CourseCard = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/courses/sampleCourses")
      .then((res) => {
        console.table(res.data);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(userData);

  return (
    <div className="cards">
      <h2>Now available courses!</h2>
      <div className="cardView" style={{marginLeft:"52px"}}>
      {userData.map((data, id) =>(
          <Card data={data} id={id}/>))}
          </div>
    </div>
  );
};

export default CourseCard;
