import { Button,Icon } from 'semantic-ui-react'
import Aos from "aos"
import React, {useEffect } from 'react'
import "aos/dist/aos.css";

// const ButtonExampleButton = () => <Button>Grab a copy</Button>
export default function ResumeSection() {
    useEffect(() => {
        Aos.init({duration: 500})
    }, [])

    return (
            
                <div id="resume" className="resume start mt-4" style={{
                    paddingTop: "60px",
                    
               }}>
                    <div className="resumeoverlay">
                            <div>
                                <div className="resume-content" data-aos="fade-out">
                                    <p className="resumetext" >checkout my résumé!</p>    
                                        <a href="BetsyManuel_Resume.pdf" download="BetsyManuel_Resume.pdf"> 
                                        <Button animated="vertical" inverted >
                                            <Button.Content visible className="download">
                                                Grab a copy
                                            </Button.Content>
                                            <Button.Content hidden color="grey">
                                            <Icon name="download"></Icon>
                                            </Button.Content>
                                        </Button>
                                        
                                        </a> 
                                
                                </div>
                            </div>
                    </div>
                </div>
            

    )
}
