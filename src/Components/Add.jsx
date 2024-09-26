import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadvideoAPI } from '../../service/allAPI';




function Add({setuploadvideoresponse}) {

  const[uploadvideo,setuploadvideo]=useState({
    id:"",caption:"",url:"",link:""
  })

  console.log(uploadvideo);

  const getyoutubelink=(e)=>{
    const{value}=e.target
    if(value.includes("v=")){
      let videoID=value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${videoID}`);
      setuploadvideo({...uploadvideo,link:`https://www.youtube.com/embed/${videoID}`})
      
    }else{
      setuploadvideo({...uploadvideo,link:""})
    }
  }

  const handleAdd=async()=>{
    const{id,caption,url,link}=uploadvideo

    if(!id||!caption||!url||!link){
      alert("please fill missing fields")
    }else{
      // store video details for the json server
      const result=await uploadvideoAPI(uploadvideo)
      console.log(result);
      
      if(result.status>=200&&result.status<300){
        // success
        handleClose()
        // alert
        alert("uploaded successfully")
        // after getting the success response field should be empty
        setuploadvideo({
          id:"",caption:"",url:"",link:""
        })

        setuploadvideoresponse(result.data)
        
      }else{
        console.log(result.message);
        
      }
    }
  }

  // console.log(uploadvideo);


  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <div className="d-flex align-item-center me-5">
      <h5>Upload-videos</h5>
      <button className='ms-2 me-5' onClick={handleShow}><i class="fa-solid fa-arrow-up-from-bracket fa-beat mb-2"></i></button>
      </div> 
      {/* modal */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="video Id" onChange={(e)=>setuploadvideo({...uploadvideo,id:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTitle" label="video Title">
        <Form.Control type="text" placeholder="video Title" onChange={(e)=>setuploadvideo({...uploadvideo,caption:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Image Url"
        className="mb-3 mt-3"
      >
        <Form.Control type="text" placeholder="Image Url"  onChange={(e)=>setuploadvideo({...uploadvideo,url:e.target.value})}/>
      </FloatingLabel> 
      <FloatingLabel controlId="floatingPassword" label="video Url">
        <Form.Control type="text" placeholder="video Url"  onChange={getyoutubelink}/>
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>upload</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add
