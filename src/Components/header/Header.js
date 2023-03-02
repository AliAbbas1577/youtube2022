import "./header.css";
import React, { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material";
// import Autocomplete from "@mui/material/Autocomplete";
import Record from "../..//..//src/cities.json";
import {
  faBed,
  faBus,
  faCab,
  faCalendar,
  faCalendarDay,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/system";
import { Autocomplete } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";
const state = ["Lahore", "Karachi", "Multan", "Islamabad"];
const CustomizedAutocomplete = styled(Autocomplete)`
  border: 1px solid green;
  width: 150px;
`;
const Header = ({type}) => {
  const navigate=useNavigate()
  //const [jsonResult, setJsonResult] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [departure,setDeparture] = useState([]);
  const [arrival,setArrival] = useState([]);
  console.log(startDate+" "+departure+" "+arrival);

  const {dispatch} = useContext(SearchContext)

  const handleBooked=()=>{
    dispatch({type:"NEW_SEARCH",payload:{startDate,departure,arrival}})
    navigate("/bus",{state:{startDate,departure,arrival}});
  }
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerlist">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBus} />
            <span>Buses</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCab} />
            <span>Book Cab</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Hotels</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi</span>
          </div>
        </div>
      { type!=="list" &&
       <>  <h2 className="headerTitle">A lifttime discount on Book Bus Us</h2>
        <p className="headerDesc">
          Get reward for your travels. Unlock instant saving of 40% of on all
          bookings
        </p>
        <Button color="inherit">SignIn / Register</Button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where you want to"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
            <Box>
              <CustomizedAutocomplete
                options={state}
                renderInput={(params) => (
                  <TextField {...params} label="Departure" />
                )}
                onInputChange={(event, newInputValue) => {
                  setDeparture(newInputValue);
                }}
              ></CustomizedAutocomplete>
            </Box>
            {/* <span className="headerSearchText">date to date</span>  */}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <Box>
              <CustomizedAutocomplete
                options={state}
                renderInput={(params) => (
                  <TextField {...params} label="Arrival" />
                )}
                onInputChange={(event, newInputValue) => {
                  setArrival(newInputValue);
                }}
              ></CustomizedAutocomplete>
            </Box>
          </div>
          <div className="headerSearchItem">
            <span className="headerSearchText">{`${format(
              startDate,
              "MM/dd/yyyy"
            )}`}</span>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            {/* <FontAwesomeIcon icon={faCalendar} className="headerIcon" /> */}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleBooked}>Book me</button>
          </div>
        </div></>}
      </div>
    </div>
  );
};

export default Header;
