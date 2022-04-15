import React, { useState } from "react";

const Header = (props) => {
  const [num, setNum] = useState({ name: "ram", age: 20 });
  const handleChange = (e) =>{
    setNum(e.target.value)
  }
  return (
    <div>
        <input value={num.name} onChange= {handleChange}/>
        <input value={num.age}/>
    </div>
  );
};

export default Header;
