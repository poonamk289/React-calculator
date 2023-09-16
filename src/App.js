import React,{ useState } from "react";
import "./style.css";

const App=()=>{

const [user,setUser]=useState({num1:null,num2:null});
const [res,setRes]=useState(0);
const [error,setError]=useState("");
const [success,setSuccess]=useState("");
const {num1,num2}=user;

//creating a function for operation to be performe.

function operationPerform(click){

    if(click==="+"){
        setRes(+num1 +(+num2));
    }
    else if(click==="-"){
        setRes(+num1 -(+num2));
    }
    else if(click==="*"){
        setRes(+num1 *(+num2));
    }
    else {
        setRes(+num1 /(+num2));
    }
    setSuccess("success!");
    setError("");

}


//creating a first function for validation of input field.

function arithOperation(e){
    let click= e.target.innerHTML;
    if(!num1||!num2){
        setSuccess("");
        if(!num1){
            setError("error! num1 canot be empty");
        }
        else{
            setError("error! num2 canot be empty");
        }
        
        return;
    }
    else if(isNaN(Number(num1))||isNaN(Number(num2))){
        setError("error! String value cannot be calculated");
        setSuccess("");
        return;
    }
  operationPerform(click);  //calling of function to do the operation.
}

    return(
        <div className="main">
            <div className="content"><h3>React Calculator</h3>
                    <input type="text" placeholder="Num1"
                    onChange={(e)=>{setUser({...user,num1:e.target.value})}}  //using onchange eventListner along with spresd function to put the value of num1.
                    /><p></p>
                    <input type="text" placeholder="Num2"
                    
                    onChange={(e)=>{setUser({...user,num2:e.target.value})}}   //using onchange eventListner along with spresd function to put the value of num2.
                    /><p></p>
                   <div className="button">
                
                   <button onClick={arithOperation}>+</button>  
                   <button onClick={arithOperation}>-</button>
                   <button onClick={arithOperation}>*</button>
                   <button onClick={arithOperation}>/</button>

                   </div>
                   { error &&<h4 style={{color:"red"}}>{error}</h4> }
                   {success && <h4 style={{color:"green"}}>{success}</h4>}
                   {success&&<div className="result">result:{res}</div>}

            </div>


        
        </div>
    )
}
export default App;