import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"


const Properties = () => {
  return (
    <>
      <section className='properties-out mb'>
        <Back name='Properties' title='Properties Grid - Our Properties'/>
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Properties
