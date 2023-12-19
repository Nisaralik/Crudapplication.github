import React, { createContext, useContext } from 'react'
import { studentdetails } from './Data'
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from 'bootstrap';
import {  Link , useNavigate, useParams } from 'react-router-dom';
import { crudcontext } from './App';


function Home() {
    const {data,setdata}=useContext(crudcontext)
    let history =useNavigate()


    const handledelete = (id) =>{
        var index = studentdetails.map(function(e){
            return e.id
        }).indexOf(id);

        studentdetails.splice(index,1);

        history('/')
    }
    
  return (
    <div >
    <>
    <h1 style={{textAlign:"center",color:"blue"}}><b><i>Crud Application</i></b></h1>
    <div style={{padding:"50px"}}>
        

        <Table striped bordered hover variant="white">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Duration</th>
                    <th>Actions</th>
                    <th>Actions</th>
                    
                   
                    
                </tr>
            </thead>
            <tbody>
                 {
                    data.map((data,index)=>(
                        <tr>
                             <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.course}</td>
                            <td>{data.duration}</td>
                           <Link to={ `/view/${data.id}`}>
                            <td><button  className='btn btn-sm btn-primary '  style={{}}><b><i class="fa-solid fa-eye"></i></b></button></td>
                            </Link>
                            <Link to={ `/Edit/${index}`}>
                            <td><button  className='btn btn-sm btn-warning'  ><i class="fa-solid fa-pen-to-square"></i></button></td>
                            </Link> 
                     
                            <td><button className='btn btn-sm btn-danger ' onClick={()=>handledelete(data.id)}><b><i class="fa-solid fa-trash"></i></b></button></td>
                          
                        </tr>
                    ))
                 }
            </tbody>

        </Table>

        
        <Link to={ `/create/${data.id}`}>
         <td><button style={{width:"100px",height:"50px"}} className='btn btn-sm btn-primary' ><b><i class="fa-solid fa-folder-plus"></i></b></button></td>
         
      
        </Link>
          
       

    </div>
    </>
    </div>
  )
}

export default Home