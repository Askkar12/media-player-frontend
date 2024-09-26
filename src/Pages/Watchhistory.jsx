
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../../service/allAPI'





function Watchhistory() {

  const[history,sethistory]=useState([])

  useEffect(()=>{
    gethistory()
  },[])

  const gethistory=async ()=> {
      const result= await getHistoryAPI()
      console.log(result);
      if(result.status==200){
        sethistory(result.data)
      }else{
        console.log("api failed");
        console.log(result.message);
        
        
      }
      
  }
  // console.log(history);

  const removehistory= async (id)=> {
    await deleteHistoryAPI(id)
    gethistory()
  }
  
  return (
    <>
     <div className="container mt-5 mb-5 d-flex justify-content-between">
      <h2>Watch-History</h2>
      <Link  style={{TextDecoration:"none",color:'blueviolet',fontsize:'25px'}}to={'../home'}
      >Back to Home <i class="fa-solid fa-arrow-rotate-left fa-beat-fade"></i></Link>
      </div>
      <table className='table mb-5 container shadow w-100'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>TimeStamb</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
          {
            history?.length>0?history.map((video,index)=>(

              <tr>
              <td>{index+1}</td>
              <td>{video.caption}</td>
              <td><a href={video.link} target='blank'>{video.link}</a></td>
              <td>{video.timestamb}</td>
              <td><button onClick={()=>removehistory(video?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
            </tr>
            )):<p className='text-danger'>Nothing to display</p>
           
          }
        </tbody>

      </table> 




      

      
     
      
   

    </>
  )
}

export default Watchhistory



