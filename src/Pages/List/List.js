import { Checkbox } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import React from "react";
import SearchItem from "../..//Components/searchItem/SearchItem.js";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import "./list.css";
import useFetch from "../../Hooks/useFetch.js";

const List = () => {
  const location=useLocation();
  const [startDate, setStartDate] = useState(location.state.startDate);
  const [departure,setDeparture] = useState(location.state.departure);
  const [arrival,setArrival] = useState(location.state.arrival);

  const [FairValue, setFairValue] = React.useState([1500, 6000]);

  const handleChange = (event, newValue) => {
    setFairValue(newValue);
  };
  console.log("==========="+FairValue);
  const {data,loading,error,refetch}=useFetch(`/bus/byDepartureCity?cities=${departure},${arrival}`);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Price (2000 to 6000)</label>
              {/* <label>{`${data?.Busd?.map(item=>item.fair)}`}</label> */}
              <Box sx={{ width: 200 }}>
                <Slider
                  getAriaLabel={() => "Price range"}
                  value={FairValue}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  min={1000}
                  max={6000}
                />
              </Box>
            </div>
            
            <div className="lsItem">
              <label>Bus Company</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <input
                    className="lsOptionInput"
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>
                  <span className="lsOptionText">Road Master Bus</span>
                </div>
                <div className="lsOptionItem">
                  <input
                    className="lsOptionInput"
                    type="checkbox"
                    id="premiumCruise"
                    name="premiumCruise"
                    value="premiumCruise"
                  ></input>
                  <span className="lsOptionText">Daewoo Express</span>
                </div>
                <div className="lsOptionItem">
                  <input
                    className="lsOptionInput"
                    type="checkbox"
                    id="hiRoof"
                    name="hiRoof"
                    value="hiRoof"
                  ></input>
                  <span className="lsOptionText">Bilal Travel</span>
                </div>
              </div>
            </div>

            <div className="lsItem">
              <label>Bus Type</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <input
                    className="lsOptionInput"
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>
                  <span className="lsOptionText">Luxury</span>
                </div>
                <div className="lsOptionItem">
                  <input
                    className="lsOptionInput"
                    type="checkbox"
                    id="premiumCruise"
                    name="premiumCruise"
                    value="premiumCruise"
                  ></input>
                  <span className="lsOptionText">Premium Cruise</span>
                </div>
                <div className="lsOptionItem">
                  <input
                    className="lsOptionInput"
                    type="checkbox"
                    id="hiRoof"
                    name="hiRoof"
                    value="hiRoof"
                  ></input>
                  <span className="lsOptionText">Hi-Roof</span>
                </div>
                <div className="lsOptionItem">
                  <input
                    className="lsOptionInput"
                    type="checkbox"
                    id="superLux"
                    name="superLux"
                    value="superLux"
                  ></input>
                  <span className="lsOptionText">Super Luxury</span>
                </div>
                <div className="lsOptionItem">
                  <input
                    className="lsOptionInput"
                    type="checkbox"
                    id="goldClass"
                    name="goldClass"
                    value="goldClass"
                  ></input>
                  <span className="lsOptionText">Gold Class</span>
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
         {loading ? "loading":<> 
         {data?.Busd?.map(item=><SearchItem item={item} key={item._id}/>
          )}
         </>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
