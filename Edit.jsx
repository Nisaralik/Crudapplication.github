import React, { useContext, useEffect, useState } from 'react'
import { Form, Link, useNavigate, useParams,  } from 'react-router-dom';
import { studentdetails } from './Data';
import { crudcontext } from './App';
import { Button } from 'bootstrap';
import { Card } from 'react-bootstrap';



function Edit() {

const { data, setdata } = useContext(crudcontext);
const { index } = useParams();
const indexNo = parseInt(index);
const dataId = data[indexNo].id;

const curreData = data.find((item) => item.id === dataId);

let [firstedit, setfirstedit] = useState({
  id: dataId,
  name: curreData.name,
  age: curreData.age,
  course: curreData.course,
  duration: curreData.duration,
  
});

let handleEdit = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setfirstedit({ ...firstedit, [name]: value });
};
const handleSubmitEdit = (e) => {
  const updateData = [...data];
  updateData[indexNo] = { ...updateData[indexNo], ...firstedit };
  setdata(updateData);
};
return (
  <div>
    {
      <div >
  

    
      
        
        
           {/* <form  action=""  onSubmit={(e) => { e.preventDefault()  }} > */}
        
          <h1 style={{textAlign:"center",color:"blue"}}><b><i>Update a Form</i></b></h1>
       <Card style={{width:"850px",height:"600px",marginLeft:"350px",marginTop:"30px",border:'3px solid blue'}}>
        <form >
            <fieldset >
              <label><b>Name     :</b></label>
            <input style={{width:"700px",marginLeft:"30px",marginTop:"60px",height:"60px",border:"1px solid blue",borderRadius:"10px"}}  type='text'  name='name' value={firstedit.name} onChange={handleEdit} alt='' required  /><br></br>
              <label><b>Age      :</b></label>
            <input  style={{width:"700px",marginLeft:"43px",marginTop:"30px",height:"60px",border:"1px solid blue",borderRadius:"10px"}} type='text'  name='age' value={firstedit.age} onChange={handleEdit} alt='' required/><br></br>
              <label><b>Course   :</b></label>
            <input style={{width:"700px",marginLeft:"20px",marginTop:"30px",height:"60px", border:"1px solid blue",borderRadius:"10px"}}  type='text' name='course' value={firstedit.course}  onChange={handleEdit}alt='' required/><br></br>
              <label><b>Duration :</b></label>
            <input  style={{width:"700px",marginLeft:"7px",marginTop:"30px",height:"60px", border:"1px solid blue",borderRadius:"10px"}} type='text' name='duration' value={firstedit.duration} onChange={handleEdit} alt='' required/><br></br>
            <Link  to="/"> 
            <button style={{marginLeft:"330px",marginTop:"20px",width:"150px",height:"60px",borderRadius:"10px",marginTop:"50px"}} className='btn btn-sm btn-success ' onClick={handleSubmitEdit}><b>Update</b></button>
            </Link>
            </fieldset>
        </form>
        </Card>
        {/* </form> */}
    
      </div>
      
    }
  </div>
  
);
}

export default Edit