import React from "react";
import "../CourseCard/CourseCard.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Card = ({ data, id }) => {
  const navigate = useNavigate();
  console.log(data, "CardData");

  const handleClick = () => {
   setTimeout(()=>{ navigate(`/course/id=${data._id}`)},3000) 
  
    toast('Course added Successfully! Keep Learning🚀', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  return (

    <section className="destinations">
      <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
      <div className="grid">
        <div>
          <img src={data.imageUrl} alt="destination-1" />
          <h3>
            {" "}
            {`${data.title.slice(0, 50)} ${
              data.title.length > 50 ? "..." : ""
            }`}
          </h3>
          <p>{`${data.description.slice(0, 100)} ${
            data.description.length > 100 ? "..." : ""
          }`}</p>
          <h2>{`$ ${data.price}`}</h2>
          <Button className="btn" variant="contained" onClick={handleClick}>
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Card;
