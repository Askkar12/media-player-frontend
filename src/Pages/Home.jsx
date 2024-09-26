import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import {Link} from 'react-router-dom'
import Category from '../Components/Category'

function Home() {

  const[uploadvideoresponse,setuploadvideoresponse]=useState({})
  const[dropvideoresponse,setdropvideoresponse]=useState({})
  return (
    <>
     <div className=" container mt-5 mb-5 d-flex justify-content-between ">
     <div className="add-videos">
      <Add setuploadvideoresponse={setuploadvideoresponse}/>
     </div>
      <Link to={'/watch-history'} style={{TextDecoration:"none",color:'blueviolet',fontsize:'30px'}}
      >watch-History <i class="fa-solid fa-arrow-right-to-bracket fa-beat-fade"></i> </Link>
     </div>
     <div className='container-fluid w-100 mt-5 mb-5 row'>
      <div className="all-videos col-lg-9">
        <h1>All Videos</h1>
        <View uploadvideoresponse={uploadvideoresponse} setdropvideoresponse={setdropvideoresponse}/>
      </div>
      <div className="all-videos col-lg-3 ">
        <Category dropvideoresponse={dropvideoresponse}/>
      </div>
     </div>
     
    </>
  )
}

export default Home
