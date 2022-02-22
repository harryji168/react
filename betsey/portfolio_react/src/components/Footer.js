import Aos from "aos"
import React, {useEffect } from 'react'
import "aos/dist/aos.css";
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import { Icon } from 'semantic-ui-react'


export default function Footer() {

    useEffect(() => {
        Aos.init({duration: 500})
    }, [])

    return (
        <div>
              <Grid container 
            direction="column" 
            className="footer"
            alignItems="center"
            id="footer">
                <Grid item className="mt-4">
                         
                            <Link href="#intro" data-aos="fade-in">
                            <Icon name="angle double up" size="huge" id="rocket"/>
                            </Link>
          
                </Grid>
                <Grid item>
                    <Link href="https://github.com/betzmnl03" target="_blank" style={{paddingLeft: 13, textDecoration: 'none'}}  >
                        <Icon id="github" name="github" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/betsy-manuel-546910171" target="_blank" style={{paddingLeft: 13, textDecoration: 'none'}} >
                        <Icon id="linkedin" name="linkedin"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/betsy-manuel-546910171" target="_blank" style={{paddingLeft: 13, textDecoration: 'none'}}>
                        <Icon id="twitter" name="twitter"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/betsy-manuel-546910171" target="_blank" style={{paddingLeft: 13, textDecoration: 'none'}}>
                        <Icon id="facebook" name="facebook f"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/betsy-manuel-546910171" target="_blank" style={{paddingLeft: 13, textDecoration: 'none'}}>
                        <Icon id="instagram" name="instagram"/>
                    </Link>
                
                
    
                </Grid>
                <Grid item>
                    <Icon name="copyright outline"/>
                        Betsy Manuel 2021
                </Grid>
            </Grid>
        </div>
    )
}





