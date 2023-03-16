import React from "react"
import RecentCard from "../home/listing/ListingCard"
import "../home/listing/Listing.css"
import './Properties.css'


const Properties = () => {
  return (
    <>
      <section className='properties-out sb'>
        <h1 className="content">Listed Properties</h1>
        
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Properties
