import react from "react";
import React, {useState} from "react";

const Greeting=props=>{
const[name,setName]=useState('Osama');
const handleClick=()=>{
    setName('Ziad')
}

    return(
        <div>
            <h1>Hello, {name}.</h1>
            <button onClick={handleClick}>Click Me To Change Name</button>
        </div>
        
    )
}

export default Greeting;