import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME To මහාමායා බාලිකා විදුහල' title='විජ්ජා උප්පත්තං සෙට්ඨා' />
            <p>Mahamaya Girls’ College is a public girls' school in Kandy, Sri Lanka. Located in the centre of Kandy, overlooking the Kandy Lake, the school is named after Queen Mahamaya, the mother of Prince Siddhartha, the Buddha.</p>
          
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
