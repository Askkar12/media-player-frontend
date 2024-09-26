import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { Col, Row } from 'react-bootstrap'
import { getCategoryAPI, getuploadedvideosAPI, updatecategoryAPI } from '../../service/allAPI'


function View({uploadvideoresponse,setdropvideoresponse}) {

  const[allvideos,setallvideos]=useState([])

  const[deletevideoresponse,setdeletevideoresponse]=useState(false)

useEffect(()=>{
  getalluploadedvideos()
  setdeletevideoresponse(false)
},[uploadvideoresponse,deletevideoresponse])


  const getalluploadedvideos=async()=>{
    const result=await getuploadedvideosAPI()
    console.log(result);

    if(result.status==200){
      setallvideos(result.data)
    }else{
      setallvideos([])
      console.log("API Failed");
      
    }
    

  }

  const videodragOver=(e)=>{
    e.preventDefault()
  }

  const videodrop=async (e)=>{
    const {videoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
    console.log(videoId,categoryId);
    const {data}=await getCategoryAPI()
    console.log(data);
    const selectedcategory=data.find(item=>item.id==categoryId)
    let result=selectedcategory.allvideos.filter(video=>video.id!==videoId)
    console.log(result);
    let{id,categoryname}=selectedcategory
    let newcategory={id,categoryname,allvideos:result}
    console.log(newcategory);
    const res=await updatecategoryAPI(categoryId,newcategory)
    setdropvideoresponse(res)
    

     
    
  }
  // console.log(allvideos);
  

  return (
    <>
      <div>
      <Row droppable="true" onDragOver={(e)=>videodragOver(e)} onDrop={e=>videodrop(e)}>
        {
          allvideos?.length>0?allvideos.map(video=>(
            <Col sm={12} md={6} lg={4} xl={3}>
            <Videocard video={video}setdeletevideoresponse={setdeletevideoresponse}/>
            </Col>
          )):<p>Nothing To Display</p>
       
        }
      </Row>
      </div>
    </>
  )
}

export default View
