import React from "react"
import Heading from "../../common/Heading"
import "./Listing.css"
import RecentCard from "./ListingCard"

const Recent = ({location}) => {
  const title = `Properties in ${location}`
  function FilterLocation() {
    if(location !== null && location !== undefined) {
      return <Heading title={title} />;
    }else {
      return null;
    }
  }
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
        <FilterLocation />
          <RecentCard location={location} />
        </div>
      </section>
    </>
  )
}

export default Recent
