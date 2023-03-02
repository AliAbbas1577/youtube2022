import './searchItem.css'
import { Link } from 'react-router-dom'
import React, { useContext } from "react";
import { SearchContext } from "../../Context/SearchContext";

 const SearchItem = ({item}) => {
     const {departure,arrival} = useContext(SearchContext)
    const handleAvailability=()=>{
        console.log(departure+arrival);
      }
    
  return (
    <div className="searchItem">
    <img
      src="https://bookmepk.s3.eu-central-1.amazonaws.com/static/custom/upload/transport/rm.png"
      alt=""
      className="siImg"
    />
    <div className="siDesc">
      <h1 className="siTitle">{item.company}</h1>
      <span className="siDistance">Type: {item.type} </span>
      <span className="siSubtitle">
        Luxury with Air conditioning
      </span>
      <span className="siFeatures">
        Enough Leg Space For Aged Persons
      </span>
      <span className="siCancelOp">Free cancellation </span>
      <span className="siCancelOpSubtitle">
        You can cancel later, you can cancel anytime!
      </span>
    </div>
    <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>{item.rating}</button>
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">{item.fair}</span>
        <span className="siTaxOp">Includes taxes and fees</span>

        <button onClick={handleAvailability} className="siCheckButton">Book Ticket</button>

      </div>
    </div>
  </div>
  )
}

export default SearchItem