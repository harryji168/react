import { Collapse } from '@material-ui/core'
import Grid from "@material-ui/core/Grid"
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";

export default function Navigation() {
  return (
    <div id="nav-section">
      {/* <nav className="navbar navbar-dark navbar-expand-lg fixed-top navbar-other">
                <a className="navbar-brand" href="#intro">
                    
                </a>
                <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
                </button> */}


                <Navbar className="navbar navbar-dark fixed-top navbar-other">
                  <Grid container justify="space-between" >
                    <Grid item>
                      <Navbar.Brand href="#intro"><img src="logo1.png" alt="logo"/><span className="name">BETSY MANUEL</span></Navbar.Brand>
                    </Grid>
                    <Grid item style={{
                      marginTop:"1%"
                    }}>
                      
                      

  
                        <Nav className="mr-auto " style={{
                      color: "#dddddd",
                      fontFamily: "Lato sans-serif monospace",
                      fontSize:"110%",
                     }}>
                          <Nav.Link href="#about" className="nav-link about ml-4" >ABOUT</Nav.Link>
                          
                          <Nav.Link href="#resume" className="nav-link resume">RESUME</Nav.Link>
                          <Nav.Link href="#projects" className="nav-link project">PROJECTS</Nav.Link>
                          <Nav.Link href="#contact" className="nav-link contact">CONTACT</Nav.Link>
                          
                        </Nav>

                      </Grid>
                      </Grid>
                </Navbar>
          
            {/* <div className="collapse navbar-collapse navbar-dark navbar-other">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link href="#about">About</Link>
                 
                </li>
                <li className="nav-item">
                  <a className="nav-link projects" href="#projects"><span className="underline">Projects</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link resume" href="#resume"><span className="underline">Resume</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link contact" href="#contact"><span className="underline">Contact</span></a>
                </li>    
              </ul>
            </div> */}
          {/* </nav> */}

    </div>
  )
}
