import Aos from "aos"
import React, {useEffect } from 'react'
import "aos/dist/aos.css";
import Grid from "@material-ui/core/Grid"
import { Button,Icon,Modal} from 'semantic-ui-react'
import EmailForm from "./EmailForm"
import FlashMessage from 'react-flash-message'

export default function ContactSection() {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    const [open, setOpen] = React.useState(false)
    const[message, showMessage] = React.useState(false)
    return (
        <div>
          <Grid container>
            <Grid item sm={12}>
             {/* <div className="techskills">
             <section"> */}
            <div  className="contact techskills" id="contact">
                <p className="title" >CONTACT</p>
               
                <p className="description">Have a question or want to work together?</p>
                <Modal
                closeIcon={{ style: { top: '0.8rem', right: '1rem' }, color: 'black', name: 'close'}}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                dimmer="blurring"
                trigger={
                <Button animated="vertical" className="contact_button">
                    <Button.Content visible >
                        Get in touch
                    </Button.Content>
                    <Button.Content hidden>
                    <Icon name="mail"></Icon>
                    </Button.Content>
                </Button>}
                >
                <Modal.Header className="text-center">CONTACT</Modal.Header>
                <Modal.Content>
                    
                    <Modal.Description>
                        <EmailForm setOpen={setOpen} showMessage={showMessage}/>
                    </Modal.Description>
                </Modal.Content>

                </Modal>

                { message ?  

                <FlashMessage duration={5000}>
                <strong>  Thank you for your email! </strong>
                </FlashMessage>
                :""}
            </div>


        {/* </section>
        </div> */}

        </Grid>
        </Grid>

     
        </div>
    )
}
