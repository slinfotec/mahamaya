import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"

const Pricing = () => {
  return (
    <>
      <Back title='History' />
      
      <section className='price padding'>
        <div className='container'>
       <p> Mahamaya Girls’ College Kandy was founded in 1932 by the Sadhachara Kulangana Samithiya led by Lady Sarah Soysa and Chitravo Ratwatte. The first classroom was in the West Cliffe Bungalow which was bought from Anagarika Dharmapala together with 1 hectare (2.5 acres) of land adjoining the property which belonged to Arthur Fernando. National leaders like Anagarika Dharmapala, D. B. Jayatilaka, P. de S. Kularatne, G. P. Malalasekera and C. W. W. Kannangara contributed to the college.</p>
        </div>
        <div className='container'><h1>Principals</h1></div>
       
        <div className='container grid'>
        
          <PriceCard />
        </div>
        <div className='container'>
                 <h1>College today</h1>
                 <p>There are around 4500 students, 185 female teachers and 15 male teachers.[when?] Therevada Buddhism is an integral part of the school's education system, as it is in all Sri Lankan Buddhist public schools. Students are divided among four houses. The housing system is primarily used for sporting events and house debates.</p>

        </div>


        <div className='container'>
<h1>Education</h1>

<p>Mahamaya Girls' College is divided into a primary section and a secondary school section. The primary school which consists of grades 1 through 5 is located near the secondary school. The primary school looks over the Kandy Lake. The secondary school consists of grades 6 through 13. Each grade has seven classes, and each class consists of around forty students.

The school has facilities for science, commerce, mathematics, languages and biology A/L schemes. It produces nationally high-ranking students, evidenced by the all-island positions received by students who sit for the national Ordinary Level and Advanced Level examinations. It has been ranked in the top three over the years among all the girls' schools in Sri Lanka in the preference rankings based on year 5 scholarship examinees' demand.</p>
          </div>


          <div className='container'>
<h1>Sports and extracurricular activities</h1>

<p>The school has a number of nationally ranking student-athletes, who are involved in sports ranging from track and field to swimming. In addition to partaking in many national sporting events, the school holds an annual sports-meet, which is an intra-school competition.

The school has a Western music band, an Eastern music band, a Western music choir and a traditional Sri Lankan dance team. The award-winning Literary, Music and Drama Society of the school takes part in national drama competitions. The first Observational Astronomy Competition in South Asia was organised by the Anandian Astronomical Association of Ananda College, Colombo together with the Astronomical Society of Mahamaya Girls’ College.</p>
          </div>



          <div className='container'>
<h1>Notable alumnae</h1>

<h2>Nadeeka Gunasekara	<p>Actress</p></h2>
<h2>Thilini Jayasinghe	<p>Badminton player, Olympic representative</p></h2>
          </div>


      </section>
     
    </>
  )
}

export default Pricing
