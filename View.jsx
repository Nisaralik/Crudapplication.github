import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { context } from './Home'
import { crudcontext } from './App'
import { Card } from 'react-bootstrap'


function View() {

    const {data,setdata}=useContext(crudcontext)
    const {userid}=useParams()
    const userIdx=parseInt(userid)
    const currentdata = data.find((item) => item.id === userIdx)
    console.log(currentdata);




  return (
    <div>
      <h1 style={{textAlign:"center",color:"blue"}}><b><i>View Details</i></b></h1>
       <Card style={{width:"800px",height:"300px",marginLeft:"400px",marginTop:"30px", borderRadius:"20px"}}>


       <Card.Body className='text-bg-primary'>
      <Card.Text style={{marginLeft:"300px",marginTop:"50px"}} > Id: {currentdata.id}</Card.Text>
        <Card.Title   style={{marginLeft:"300px"}}>Name: {currentdata.name}</Card.Title>
        <Card.Title  style={{marginLeft:"300px",}}>Age: {currentdata.age}</Card.Title>
        <Card.Title  style={{marginLeft:"300px",}}>Course:  {currentdata.course}</Card.Title>
        <Card.Title  style={{marginLeft:"300px",}}>Duration: {currentdata.duration}</Card.Title>

      </Card.Body>
    </Card>
    </div>
  )
}

export default View