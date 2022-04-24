import Card from './Card';
import styles from "../AllCourses/AllCourses.module.css"
import { useSelector } from 'react-redux';

const MyCart = () => {
    const {course} = useSelector(state=>state.cart)
    // const [userData, setUserData] = useState([]);
   
    console.log(course.length, "user data");
    // if (course.length <= 0 ){
    //     return(
    //         <h1>No course added into the cart</h1>
    //     )
    // }
    return (
      <div className={styles.cards}>
        <h2>Buy your Course here!</h2>
        <div className={styles.cardView} style={{marginLeft:"52px"}}>
        {course.map((data, i) =>(
            <Card data={data} id={i}/>))}
            </div>
      </div>
    );
  };

export default MyCart