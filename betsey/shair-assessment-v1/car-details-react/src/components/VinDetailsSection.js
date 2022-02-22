import React,{useState,useEffect} from 'react'
import { Card, Image } from 'semantic-ui-react'
import images from '../data/cardImages'

/*This section renders the Car Model, Year and Make for a particular VIN*/
export default function VinDetailsPage(props) {
    const details = props.vinDetails[0]
    let src=""
    images.forEach((image)=>{
        let name=details["Manufacturer"]&&details["Manufacturer"].split(" ")
        if(name[0].toLowerCase()===image["name"]){
            src=image["src"]
        }
    })
    return (   
        <div id="vin-details">
            {details?
            <>
                <h1>Vin Details</h1>
                <Card centered style={{
                        boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                      }}>
         
                        <Image src={src?src:images[0]["src"]}/>
                        <Card.Content>
                        <Card.Header>Make: {details["Make"]}</Card.Header>
                      
                        <Card.Description>Model: {details["Model"]} &nbsp;|&nbsp; Year: {details["ModelYear"]}</Card.Description>
                        
                        <Card.Meta>{details["Manufacturer"]}</Card.Meta>
                        </Card.Content>
    
                </Card>

                
            </>
            
            :""}
            
          
        
            
        </div>
    )
}
