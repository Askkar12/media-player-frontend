import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function Landingpage() {
  const navigatebyurl=useNavigate()
  return (
    <>
      <Row className="mt-5 align-item-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
        <h1>Welcome to <span className='text-warning'>Media-Player</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque praesentium ea velit, odio quae ducimus aut enim repellat, tempora, vero porro cum sequi obcaecati sit consectetur! Ad soluta itaque praesentium.
        Facilis molestiae ex iure labore veniam, explicabo optio minus obcaecati, voluptates, consectetur tempore earum nemo impedit mollitia laboriosam! Aliquid esse odio quo voluptates sint, cupiditate facilis iure animi doloremque ipsam.
        Voluptatum doloribus perspiciatis alias iure praesentium est harum, maxime blanditiis voluptatem ut dolorum porro quod aspernatur exercitationem magnam debitis ullam! Quos nobis vel reiciendis quidem quis accusamus sapiente, pariatur perspiciatis!</p>
        <button onClick={()=>navigatebyurl('/home')} className='btn-btn-info mt-4'>Get Started</button>
        </Col>
        <Col lg={5}>
        <img src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
        </Col>
        <Col></Col>
      </Row>

      <div className='container mb-5 mt-5 d-flex align-item-center justify-content-center flex-coloumn'>
        <h3 >Features</h3>
        <div className='cards mb-5 mt-5 d-flex align-item-center justify-content-between w-100'>
        <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://media1.tenor.com/images/018d7b37b92de9de39a83b671b2e3564/tenor.gif?itemid=11755946" />
      <Card.Body>
        <Card.Title className='text-primary'>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
        <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://ciphrd.com/wp-content/uploads/2019/08/bad-example-1-1.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Categorized</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
        <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://c.tenor.com/b8o4QL3NxV4AAAAC/sound-wave-waves.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
          
        </div>
      </div>

      <div className='container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100'>
        <div className='col-lg-5'>
          <h4 className='text-warning'>Simple,Powerful & Fast</h4>
          <h6 className='mb-5 mt-3'> <span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius maiores praesentium nulla, sapiente consequatur possimus ratione? Enim, temporibus eligendi porro illo quis consequatur veritatis ad sed, consectetur rem dignissimos aspernatur!
          Magnam odio ut eum, quisquam exercitationem dolor expedita in neque facilis, corrupti itaque optio deleniti molestias doloribus necessitatibus provident eos porro quae distinctio enim architecto nostrum error. Nam, modi est!
          Odit nisi asperiores dolores, a accusamus placeat! Commodi iste molestias ipsa, totam non tenetur cumque architecto recusandae dolores alias adipisci, natus fuga placeat quos beatae? Iure amet in sequi labore? </h6>

          <h6 className='mb-5 mt-3'> <span className='text-warning fw-bolder'>Categorize Videos</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius maiores praesentium nulla, sapiente consequatur possimus ratione? Enim, temporibus eligendi porro illo quis consequatur veritatis ad sed, consectetur rem dignissimos aspernatur!
          Magnam odio ut eum, quisquam exercitationem dolor expedita in neque facilis, corrupti itaque optio deleniti molestias doloribus necessitatibus provident eos porro quae distinctio enim architecto nostrum error. Nam, modi est!
          Odit nisi asperiores dolores, a accusamus placeat! Commodi iste molestias ipsa, totam non tenetur cumque architecto recusandae dolores alias adipisci, natus fuga placeat quos beatae? Iure amet in sequi labore? </h6>

          <h6 className='mb-5 mt-3'> <span className='text-warning fw-bolder'>Managing Videos</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius maiores praesentium nulla, sapiente consequatur possimus ratione? Enim, temporibus eligendi porro illo quis consequatur veritatis ad sed, consectetur rem dignissimos aspernatur!
          Magnam odio ut eum, quisquam exercitationem dolor expedita in neque facilis, corrupti itaque optio deleniti molestias doloribus necessitatibus provident eos porro quae distinctio enim architecto nostrum error. Nam, modi est!
          Odit nisi asperiores dolores, a accusamus placeat! Commodi iste molestias ipsa, totam non tenetur cumque architecto recusandae dolores alias adipisci, natus fuga placeat quos beatae? Iure amet in sequi labore? </h6>

        </div>

        <div className='video col-lg-5'>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/ccpVpcP8m44?si=Yj0E7SWyekiZbflo" title="Best of sushin shyam 2023 |Audio Jukebox |Hits of sushin shyam |ost" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>


      </div>


    </>
    
  )
}

export default Landingpage
