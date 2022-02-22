import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import imagesArr from "../data/cardImages"
const images = imagesArr

/*This component displays all manufacturers*/

export default function AllManDetailsSection(props) {
    const details = props.allManDetails.Results
    
    return (   
        <div id="all-man-details">
            
             <h1>All Manufacturers</h1>
             <Card.Group centered>
            {details? details.map((item,i)=>{
                let src="" 
                {images.forEach((image)=>{
                   let name=item["Mfr_Name"]&&item["Mfr_Name"].split(" ")
                   if(name[0].toLowerCase()===image["name"]){
                       src=image["src"]}
                }
                )}  
                return(

                      <Card key={i} style={{
                        boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                      }}>
         
                        <Image src={src?src:images[0]["src"]}  />
                        <Card.Content>
                        <Card.Header>{item["Mfr_Name"]}</Card.Header>
                        </Card.Content>
    
                    </Card>
              
                
                )
            })
            
            
            :""}
            
        
        
            </Card.Group>
        </div>
    )
}
