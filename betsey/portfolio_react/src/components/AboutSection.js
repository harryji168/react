
import skillsImage from "../skillsImage"
import Grid from "@material-ui/core/Grid"
import Aos from "aos"
import React, {useEffect } from 'react'
import "aos/dist/aos.css";
import { Image } from 'semantic-ui-react'
import ResumeSection from "./ResumeSection"

export default function AboutSection() {
 
    useEffect(() => {
        Aos.init({duration: 500})
    }, [])

    return (  
        <>
        <Grid container>
            <Grid item sm={12}>
            <div id="about" style={{
                 paddingTop: "68px",
                 
            }}>
                <p className="title text" >A LITTLE ABOUT ME</p>
                <img className="mypic mb-4" src="./pic2.jpg" alt="mypic" data-aos="fade-in"/>
                <p className="description m-4" >Hey! My name is Betsy. I'm a multidisciplinary and solution-driven <strong> Full Stack Developer</strong>.Former Embedded Systems Tester with 2.5 years of experience in Manual Testing. <br/> I have always had a passion for technology and enjoy problem solving. I chose Web Application Development as my career path as it gives me the opportunity to solve complex real-worldproblems with innovative and intuitive software solutions. I find great joy in being able to see my work in action and directly impact users in a positive way</p>
                <p className="description m-4" >When I'm not on the computer, I enjoy cooking, reading and petting dogs. </p>
            </div>
            <div id="skills" className="skills" style={{
                 paddingTop: "68px",
                 
            }}>
            <p className="title text mt-4"  data-aos="flip-down" >SKILLS</p>

            <Grid container justify="center" >
                <Grid item alignItems="center" sm={6}>
                        <div className="row" data-aos="flip-down" >
                        <Image.Group  size='tiny' className="skill-icon" spaced="right" >
                        {skillsImage.map((skill,i)=>{
                            return(
                                <>
                            <Image src={skill.image} id={skill.title} alt="project_image" className="skill-icon image ml-3 mr-3" label={skill.title}/>
                            
                            </>
                            )
                        })}
                                        
                                    
                        </Image.Group>

                            
                        </div>
            </Grid>
            </Grid>
        </div>
       

        </Grid>
        
        </Grid>

        </>
    )
}
