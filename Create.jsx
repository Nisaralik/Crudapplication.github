import React, { useContext, useState } from 'react'
import { Form, useNavigate, useParams } from 'react-router-dom'
import { studentdetails } from './Data';
import { v4 as uuid } from "uuid";
import { context } from './Home';
import { Button } from 'bootstrap';
import { crudcontext } from './App';
import { Card } from 'react-bootstrap';


function Create() {


  // const data=useContext(context)
  // const {userid}=useParams()
  // const userIdx=parseInt(userid)
  // const currentdata = data.find(item => item.id === userIdx)


  const {data,setdata}=useContext(crudcontext)
  
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [course, setcourse] = useState("");
  const [duration, setduration] = useState("");


  let history=useNavigate();


  const handlesubmit=(event)=>{
    event.preventDefault();


    const ids = uuid();
    let uniqueId = ids.slice(0,10);


    let a=id,
    b=name,
    c=age,
    d=course,
    e=duration;

    studentdetails.push({id: uniqueId,id : a, name : b, age : c,course : d,duration : e })

    history('/');

  }


  return (
    <div  >
       <h1 style={{textAlign:"center",color:"blue"}}><b><i>Create a Form</i></b></h1>
       <Card style={{width:"800px",height:"600px",marginLeft:"400px",marginTop:"30px",border:'3px solid blue'}}>
        <form >
            <fieldset >
            <input style={{width:"700px",marginLeft:"50px",marginTop:"30px",height:"60px",border:"1px solid blue",borderRadius:"10px"}} type='text' placeholder='   Enter your id' onChange={(e)=>setid(e.target.value)} alt='' required  /><br></br>
            <input  style={{width:"700px",marginLeft:"50px",marginTop:"30px",height:"60px",border:"1px solid blue",borderRadius:"10px"}} type='text' placeholder='   Enter your name' onChange={(e)=>setname(e.target.value)} alt='' required/><br></br>
            <input style={{width:"700px",marginLeft:"50px",marginTop:"30px",height:"60px", border:"1px solid blue",borderRadius:"10px"}}  type='text' placeholder='   Enter your age'  onChange={(e)=>setage(e.target.value)}alt='' required/><br></br>
            <input  style={{width:"700px",marginLeft:"50px",marginTop:"30px",height:"60px", border:"1px solid blue",borderRadius:"10px"}} type='text' placeholder='   Enter your course' onChange={(e)=>setcourse(e.target.value)} alt='' required/><br></br>
            <input  style={{width:"700px",marginLeft:"50px",marginTop:"30px",height:"60px",  border:"1px solid blue",borderRadius:"10px"}}type='text' placeholder='    Duration' onChange={(e)=>setduration(e.target.value)} alt='' required/><br></br>
            <button style={{marginLeft:"330px",marginTop:"20px",width:"150px",height:"60px",borderRadius:"10px",marginTop:"50px"}} className='btn btn-sm btn-success ' onClick={(e)=>handlesubmit(e)}><b>Sumbit</b></button>
            </fieldset>
        </form>
        </Card>
        {/* <Form>
        <Form.Control size="lg" type="text" placeholder="Large text" />
        </Form> */}

  {/* <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Id</Form.Label>
        <Form.Control type="text" placeholder=" Enter your id"  onChange={(e)=>setid(e.target.value)}/>

        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" onChange={(e)=>setname(e.target.value)} />

        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter your age" onChange={(e)=>setage(e.target.value)} />

        <Form.Label>Course</Form.Label>
        <Form.Control type="text" placeholder="enter your course"onChange={(e)=>setcourse(e.target.value)} />

        <Form.Label>Duration</Form.Label>
        <Form.Control type="text" placeholder="Enter your duration" onChange={(e)=>setduration(e.target.value)} />
      </Form.Group>

      <button style={{marginLeft:"280px",marginTop:"20px",width:"150px",height:"60px",borderRadius:"10px",backgroundColor:"skyblue"}} onClick={(e)=>handlesubmit(e)}>Sumbit</button>
          
              </Form>    */}
        
      
    </div>
  )
}

export default Create