import React from "react"
import Back from "../common/back/Back"
import TeamCard from "./achievementCard"
import "./achievement.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"

const Team = () => {
  return (
    <>
      <Back title='Achievement' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team
