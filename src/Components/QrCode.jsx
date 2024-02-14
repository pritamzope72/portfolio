import React from 'react'
import { Link } from 'react-router-dom'
import myimage from '../Assets/myimage.jpg'
import github from '../Assets/Github.png'


const QrCode = () => {
  return (
    <>
      <div className="m-4">
           <Link to={'/'} className='text-white'>
                      <i className='border p-3 rounded-circle fa-solid fa-xmark fs-2'></i>  
          </Link>
      </div>    
     
     {/* Scanner  */}

       <section className=''>
        <div className="container">
          <div className="row justify-content-center text-center text-dark">
            <div className="col-4 justify-content-center">
              <img src={myimage} alt="" className='rounded-circle' style={{height : 150, width:150 }} />
              <h3>Pritam Zope</h3>
              <h6>STACKLABS.IN</h6>
              <h3>Software Developer</h3>
              <img src={github} alt="" className='mt-4'  style={{height : 200 , width : 200}} />
            </div>
          </div>
        </div>
       </section>
    
    </>
  )
}

export default QrCode
