import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='https://i.ytimg.com/vi/r_MAO4PGYPY/maxresdefault.jpg' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='About'  />
            <img src ='https://ceylonpages.lk/wp-content/uploads/listing-uploads/logo/2020/06/download.jpg' />
            <div className='items'>
              
               
                  <div className='item flexSB'>                  
                    <div className='text'>
                      <h2>Address: </h2>
                      <p>Sangaraja Mawatha, Kandy</p>
                    </div>
                  </div>

                  <div className='item flexSB'>                  
                    <div className='text'>
                      <h2>Phone: </h2>
                      <p>077 021 1819</p>
                    </div>
                  </div>
                

                  <div className='item flexSB'>                  
                    <div className='text'>
                      <h2>Principal:</h2>
                      <p>Lalitha Egodawela, Shashikala Senadheera</p>
                    </div>
                  </div>

                  <div className='item flexSB'>                  
                    <div className='text'>
                      <h2>Colors</h2>
                      <p>Blue, Gold</p>
                    </div>
                  </div>

                  <div className='item flexSB'>                  
                    <div className='text'>
                      <h2>Founded: </h2>
                      <p>January 14, 1932</p>
                    </div>
                  </div>


                  <div className='item flexSB'>                  
                    <div className='text'>
                      <h2>School type: </h2>
                      <p>State school</p>
                    </div>
                  </div>
             
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard
