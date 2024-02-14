import React, { useEffect, useState } from 'react'
import myimg from '../Assets/myimage.jpg'
import stacks from '../Assets/stacklabs.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loader from '../Components/Loader'


const HomePage = () => {

    const [data,setData]=useState({})
    const [loading,setLoading]=useState(false)

    useEffect(()=>{

            const fetchData = async () => {
              try {
                setLoading(true)
                const response = await axios.get('http://localhost:9000/details');
                setLoading(false)
                setData(response.data);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
        
            fetchData();
    },[])


  return (
     <>
    {
        loading ? <Loader/>: 
    <>
    <section>
        <div className="container text-white text-opacity-75">
            <div className="row justify-content-center mt-3">
                <div className="col-4 rounded-4 text-center bgimg " >
                       <img className='rounded p-3 mt-2' src={stacks} alt="" style={{height : 150, width:300 }} />
                       <img className='rounded-circle p-3' src={myimg} alt="" style={{height : 220, width:220,}} />
                       <h2>{data.name}</h2>
                       <h6>{data.website}</h6>
                       <h6>{data.designation}</h6>
                       <hr />
                       <div className='d-flex mb-3 justify-content-evenly '>
                          <a href="tel:8888667432" className='text-white text-opacity-75 cursor-pointer' >
                            <div className='border rounded-circle p-2 ' style={{height:50 ,width:50 ,}}><i className='fa-solid fa-phone font fs-2'></i></div>
                          </a>
                          <a href="mailto:pritamzope72@gmail.com" className='text-white text-opacity-75 cursor-pointer'>
                            <div className='border rounded-circle p-2' style={{height:50 ,width:50}}><i className='fa-solid fa-envelope font fs-2'></i></div>
                          </a>
                          <a href=" https://wa.me/8888667432" className='text-white text-opacity-75 cursor-pointer'>
                             <div className='border rounded-circle p-2' style={{height:50 ,width:50}}><i className='fa-brands fa-whatsapp font fs-2'></i></div>
                          </a>
                          <a href="https://maps.app.goo.gl/w5tSgQMiEHKxXwCw7" className='text-white text-opacity-75 cursor-pointer'>
                             <div className='border rounded-circle p-2' style={{height:50 ,width:50}}><i className='fa-solid fa-location-dot fs-2'></i></div>
                          </a>
                       </div>
                </div>    
            </div>
        </div>  
     </section>

     <section>
        <div className="container text-white text-opacity-75">
            <div className="row justify-content-center mt-3">
                <div className="col-4 rounded-4 bgimg text-center">
                    <h3 className='mt-3'>About Me</h3>
                    <hr />
                    <p className='m-2 mb-4'>
                        {data.about}
                    </p>
                </div>
            </div>
        </div>
     </section>

     <section>
        <div className="container text-white text-opacity-75">
            <div className="row justify-content-center mt-3">
                <div className="col-4 rounded-4 bgimg text-center">
                    <div className="d-flex mt-3 justify-content-start">
                      <div className=' border rounded-circle p-2' style={{height:50 ,width:50}}><i className='fa-solid fa-phone font fs-2'></i></div>
                       <h3 className='mx-4 mt-2'>Contact us</h3>
                    </div>
                    <hr/>
                    <h3>Call Us</h3>
                    <p>{data.contact}</p>
                    <h3>Email</h3>
                    <p> {data.email}</p>
                    <h3>Address</h3>
                    <p>{data.address}</p>
                    <div className='m-3 d-flex cursor-pointer '>
                        <a href="https://maps.app.goo.gl/w5tSgQMiEHKxXwCw7">
                           <button className='rounded-pill opacity-75'><i className='p-1 fa-solid fa-location-arrow font fs-4'></i>Direction</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     </section>

     <section>
        <div className="container text-white text-opacity-75">
            <div className="row justify-content-center mt-3">
                <div className="col-4 rounded-4 bgimg text-center">
                    <h3 className='mt-3'>Find Me Here</h3>
                    <hr />
                    <ul className=' d-flex flex-row justify-content-around list-unstyled'>
                        <a href="https://www.instagram.com/pritam_4939/" className='text-white text-opacity-75 cursor-pointer' style={{textDecoration : 'none'}}>
                           <li className='p-3 mx-4'><i className='border p-2 rounded-circle fa-brands fa-instagram font fs-2'></i><h3>Instagram</h3></li>
                        </a>
                        <a href="https://www.linkedin.com/in/pritam-zope-42bb85239/" className='text-white text-opacity-75 cursor-pointer' style={{textDecoration : 'none'}}>
                           <li className='p-3 mx-4'><i className='border p-2 rounded-circle fa-brands fa-linkedin font fs-2'></i><h3>LinkeIn</h3></li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
     </section>

     <section className='mb-4'>
        <div className="container text-white text-opacity-75">
            <div className="row justify-content-center mt-3">
                <div className="col-4 rounded-4 bgimg text-center">
                    <h3 className='mt-3'>Links</h3>
                    <p>Find Us Here</p>
                    <hr />
                    <div className=''>
                         <a href='https://github.com/pritamzope72' className='text-white text-opacity-75 cursor-pointer' style={{textDecoration : 'none'}}>
                            <div className='d-flex flex-row'>  
                               <p><i className='border p-3 rounded-circle fa-brands fa-github font fs-2'></i></p>
                               <h3 className=' m-3'>Github<i className='mx-2 fa-thin fa-greater-than'></i></h3>                         
                            </div>
                          </a>
                          <Link to={'/qrcode'} className='text-white text-opacity-75 cursor-pointer' style={{textDecoration : 'none'}}>
                                <div className='d-flex flex-row'>  
                                    <p><i className='border p-3 rounded-circle fa-solid fa-qrcode fs-2'></i></p>
                                    <h3 className=' m-3'>Scanner<i className='mx-2 fa-thin fa-greater-than'></i></h3>                         
                                </div>
                           </Link>
                           <a href="tel:8888667432" className='text-white text-opacity-75 cursor-pointer' style={{textDecoration : 'none'}}>
                           <div className='d-flex'>
                                    <p><i className='border p-3 rounded-circle fa-solid fa-plus fs-2'></i></p>
                                    <h3 className=' m-3'>Add Contact<i className='mx-2 fa-thin fa-greater-than'></i></h3>
                                </div>
                           </a>              
                    </div>
                </div>
            </div>
        </div>
     </section>
</> 
    }
    </>
  )
}

export default HomePage
