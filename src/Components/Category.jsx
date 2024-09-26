import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap'
import { addCategoryAPI, deleteCategoryAPI, getCategoryAPI, getvideoAPI, updatecategoryAPI } from '../../service/allAPI';
import Videocard from './Videocard';



function Category({dropvideoresponse}) {

  const[categoryname,setcategoryname]=useState("")
  const[allcategories,setallcategories]=useState([])


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleadd= async()=> {
    if(categoryname){
      const result=await addCategoryAPI({categoryname,allvideos:[]})
      console.log(result);
      if(result.status>=200 && result.status<300){
        handleClose()
        setcategoryname("")
        getcategories()
      }else{
        alert(result.message)
      }
      
    }else{
      alert("please add a category name")
    }
  }

  const getcategories = async()=>{
    const{data}=await getCategoryAPI()
    setallcategories(data)
  }
useEffect(()=>{
  getcategories()
},[dropvideoresponse])

// console.log(allcategories);

const removecategory=async(id)=>{
  await deleteCategoryAPI(id)
  getcategories()
}

const dragover=(e)=>{
  console.log("video dragging over the category");
  e.preventDefault()
  
}


const videodropped =async(e, categoryId) => {
  const videoId = e.dataTransfer.getData("videoid");
  console.log(`Video ID: ${videoId} | Video dropped in category ID: ${categoryId}`);
  const{data}=await getvideoAPI(videoId)
  // console.log(data);
  const selectedcategory=allcategories.find(item=>item.id===categoryId)
  selectedcategory.allvideos.push(data)
  // console.log(selectedcategory);
  await updatecategoryAPI(categoryId,selectedcategory)
  getcategories()
  
  
}

const videodragstarted=(e,videoId,categoryId)=>{
  let datashare={videoId,categoryId}
  e.dataTransfer.setData("data",JSON.stringify(datashare))
}





  return (
    <div>
      <div className="d-grid">
        <button className='btn btn-info' onClick={handleShow}>Add Category</button>
      </div>


     { 
     allcategories?.length>0?allcategories.map(Category=>(

      <div className='border rounded mt-5  p-3 ' droppable="true" onDragOver={(e)=>dragover(e)} onDrop={e=>videodropped(e,Category.id)}>
      <div className='d-flex justify-content-between align-items-center'>
        <h5>{Category.categoryname}</h5>
        <button className='btn ' onClick={()=>removecategory(Category.id)}><i class="fa-solid fa-trash text-danger"></i></button>
      </div>

      <Row>
       { 
       Category?.allvideos?.length>0?Category?.allvideos.map(card=>(

        <Col sm={12} draggable onDragStart={e=>videodragstarted(e,card.id,Category.id)}>
          <Videocard video={card} insidecategory={true}/>
        </Col>

       )):null
      }
      </Row>


    </div>
     )):<p className='fw-bolder text-danger'>Nothing To Display</p>
     }


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <FloatingLabel controlId="floatingName" label="Category">
          <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setcategoryname(e.target.value)}  />
          </FloatingLabel>
          </Form>
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleadd}>Add</Button>
        </Modal.Footer>
      </Modal>




    </div>
  )
}

export default Category
