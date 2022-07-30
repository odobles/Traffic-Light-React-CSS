import React, { useState } from "react";


//Component
const trafficLight = () => {

	// logic of the app
	const[colorDanger,setColorDanger] = useState("")
	const[colorWarning,setColorWarning] = useState("")
	const[colorSuccess,setColorSuccess] = useState("")


	return (
		<div className="shape d-flex justify-content-center">
			<div className="ground mt-5 d-flex flex-column justify-content-center px-2">
				<div className={`red light ${colorDanger}`} onClick={()=>{setColorDanger("bg-danger"), setColorWarning(""), setColorSuccess("")}}></div>
				<div className={`yellow light ${colorWarning}`} onClick={()=>{setColorWarning("bg-warning"), setColorSuccess("") ,setColorDanger("")}}></div>
				<div className={`green light ${colorSuccess}`} onClick={()=>{setColorSuccess("bg-success"), setColorWarning(""),setColorDanger("")}}></div>
			</div>
		</div>


	);
};

export default trafficLight;
