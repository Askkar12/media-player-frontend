import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addHistoryAPI, deletevideoAPI } from '../../service/allAPI';

function Videocard({video,setdeletevideoresponse,insidecategory}) {

  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = async () => {
  setShow(true)
  const{caption,link}=video

  let today=new Date()
  // console.log(new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today));

  // console.log(today);

  let timestamb=new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today);

  let videoHistory={caption,link,timestamb}

  await addHistoryAPI(videoHistory)

  
}

const removevideo= async (id)=> {
  await deletevideoAPI(id)
  setdeletevideoresponse(true)
}

const dragstarted = (e, id) => {
  console.log(`Drag started... Video ID: ${id}`);
  e.dataTransfer.setData("videoid", id);
}



  return (
    <div>
       <Card style={{ width: '16rem',marginBottom:'30px' }} draggable onDragStart={e=>dragstarted(e,video?.id)}>
      <Card.Img variant="top" src={video.url} onClick={handleShow} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-item-center'>
          <h5>{video.caption}</h5>
          { insidecategory?null:<button onClick={()=>removevideo(video?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>}
        </Card.Title>
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>video Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${video.link}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body> 
      </Modal>
      
    </div>
  )
}

export default Videocard
