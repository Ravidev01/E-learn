import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../CourseCard/Card';
import styles from "../AllCourses/AllCourses.module.css"

const AllCourses = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:4000/api/courses/getAllCourses")
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
      <div className={styles.cards}>
        <h2>Now available courses!</h2>
        <div className={styles.cardView} style={{marginLeft:"52px"}}>
        {userData.map((data, id) =>(
            <Card data={data} id={id}/>))}
            </div>
      </div>
    );
  };

export default AllCourses