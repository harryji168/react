import React, { useState,useEffect} from 'react'
import { Form, Select} from 'semantic-ui-react'
import {Details} from "../requests"
import VinDetailsSection from "./VinDetailsSection"
import ManDetailsSection from "./ManDetailsSection"
import AllManDetailsSection from "./AllManDetailsSection"
import IntroSection from './IntroSection'
import {Grid, Image} from "semantic-ui-react"

/*Search Section with Two Search bar
1. For Vin
2. For Manufacturers
Can only search for one parameter at a time

if VIN Search is done => Will render the VIN section only
if Manufacturer Search is done => Will render the particular Manufacturer section only
if the User searched for all manufactueres => Will render All Manufacturer section
if there is an error => renders the div with id=error and message = result
*/
const SearchBar = (props)=>{
  const [vin, setVin] = useState("")
  const [vinDetails,setVinDetails] = useState(undefined)
  const [manDetails,setManDetails] = useState(undefined)
  const [allManDetails,setAllManDetails] = useState(undefined)
  const [manufacturer, setManufacturer] = useState("")
  const [result, setResult] = useState("")

  useEffect(() => {
    let payment=document.getElementById("payment-menu")
    payment.classList.remove("active")

    let home=document.getElementById("home-menu")
    home.classList.add("active")
 }, [])

 /*Checking the pattern of the input Vin before making an API Call*/
  function validateVin(vin) {
    let re = new RegExp("^[A-HJ-NPR-Z\\d]{8}[\\dX][A-HJ-NPR-Z\\d]{2}\\d{6}$");
    return vin.match(re);
  }

  /*To reset all the States */
  function reset(){
    setAllManDetails(undefined)
    setVinDetails(undefined)
    setManDetails(undefined)
  }
 const handleSubmit = (event) => {   
    const params={
        vin: vin,
        manufacturer: manufacturer
    }
    if(vin==="" && manufacturer ===""){
      setResult("Please enter a VIN or select Manufacturer")
      reset()
    }
    else if(vin!==""&&!validateVin(vin)){
      setResult("Not a valid VIN")
      reset()
    }
    else{
    Details.index(params)
    .then((res)=>{
      
      if(res.Results[0]["ErrorCode"] && res.Results[0]["ErrorCode"]!=="0"){
        setResult("Not a valid VIN")
        reset()
      }
      else{
        
        if(res.Results&& vin.length>0){
          setVinDetails(res.Results)
          setManDetails(undefined)
          setAllManDetails(undefined)
        }
        else if(res.Results && manufacturer!=="0"){
          setManDetails(res.Results)
          setAllManDetails(undefined)
          setVinDetails(undefined)
        }
        else if(res.Results && manufacturer==="0"){
          setAllManDetails(res)
          setManDetails(undefined)
          setVinDetails(undefined)
        }
      }
    })
  }
  }
/*Change Handler for Manufacturer field*/
  const handleChange =(e,{value})=>{
    if(value){
    let searched = props.manuArr.filter(obj=>{
      return obj["value"]===value
    })
    if(searched.id === 0){
      setManufacturer("all")
    }
    else if(searched.id!==0){
      setManufacturer(searched[0].id)
    }
    setVin("")
    setResult("")
  }
  }

  /*VIN Change Handler*/
  const handleVinChange=(event)=>{
    setVin(event.target.value)
   }

  /*VIN field Click handle to clear state of manufacturer if set*/
  const handleVinClick =(event)=>{
    const clear_button = document.querySelector(".dropdown.icon.clear")
    clear_button && clear_button.click()
    setManufacturer("")
    setResult("")
  }

  /*Manufacturer field Click handle to clear state of VIN*/
  const handleManufacturerClick=()=>{
    setVin("") 
  }
    return (
      
      <>
      <IntroSection/>
      <Grid centered columns={2} id="search-tab">
          <Grid.Row centered columns={4}>
          <Form onSubmit={event=>handleSubmit(event)} id="search-form" className="search-sec">
            <Form.Group widths="equal">
              <Form.Input 
              color="black"
              label='Search by VIN' name="vin" id="vin" placeholder='Enter the VIN number' value={vin} onChange={(event)=>handleVinChange(event)} onClick={handleVinClick}  style={{
                width:"50%"
              }}/>         
              <span className="or"> OR </span>
              <Form.Select
                search
                clearable
                pointing='down'
                label='Search by Manufacturer'
                options={props.manuArr.map(item => ({
                  name: item.value,
                  key: item.key,
                  id:item["id"],
                  value: item.value,
                  text: item.text
                }))}
                placeholder='Select Manufacturer'
                onChange={handleChange}
                onClick={handleManufacturerClick}
                style={{
                  width:"50%"
                }}
              />
            </Form.Group>
            <Form.Button
            name="search"
            onClick={(event)=>handleSubmit(event)} 
            >Search</Form.Button>
          </Form>
          </Grid.Row>
        </Grid>
      {result.length>0? <div id="error">{result}</div>:""}
      
      {vinDetails?
        <VinDetailsSection vinDetails={vinDetails}/>
      :""}

      {manDetails?
        <ManDetailsSection manDetails={manDetails}/>
      :""}
      {allManDetails?
        <AllManDetailsSection allManDetails={allManDetails}/>
      :""}
        
      </>
    )
}


export default SearchBar
