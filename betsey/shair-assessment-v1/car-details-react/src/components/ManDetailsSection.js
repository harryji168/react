import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import images from "../data/cardImages"  // importing car Images

/*Selected Manufactuer details => 
renders cards with
1. manufacturer Name
2. car image displayed based on manufacturer name 
3. Make */
export default function ManDetailsSection(props) {
    const details = props.manDetails

    return (   
        <div id="man-details">
             <h1>Manufacturer Details</h1>

             <Card.Group centered>
            {details? details.map((item,i)=>{
                let src=""
                {images.forEach((image)=>{
                    let name=item["Mfr_Name"]&&item["Mfr_Name"].split(" ")

                   if(name[0].toLowerCase()===image["name"]){
                       src=image["src"]
                       
                   }
                }
                )}
                //for each make returns a Card with image, manufacturer name and make
                return(
                      <Card key={i} style={{
                        boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                      }}>
                            <Image src={src?src:images[0]["src"]}  />
                            <Card.Content>
                            <Card.Header>Make: {item["Make_Name"]} </Card.Header>
                            <Card.Meta>{details[0]["Mfr_Name"]}</Card.Meta>
                            </Card.Content>
    
                        </Card>

                )
            })
            :""}

            </Card.Group>
                    
        </div>
    )
}
