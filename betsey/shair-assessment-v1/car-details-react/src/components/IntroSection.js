import React, { useState } from 'react'
import {Grid, Header, Button,Icon} from "semantic-ui-react"

/*Introduction/ Landing Page Section
 Has 2 buttons to navigate to Search section, Payment Form*/
export default function IntroSection(props) {
    return (
        <div id="intro">
            <div className="overlay">
            <Grid divided='vertically'>
                <Grid.Row columns={2} centered className="wel">
                    <Header as='h1'>Welcome! Looking for a Vehicle?</Header>
                </Grid.Row>
                <Grid.Row columns={2} >
                <Grid.Column floated='left'>
                    <div className="search-intro">
                    <Header as="h2">Use the Search Feature to find a Vehicle</Header>
                    <a href="#search-form">
                        <Button animated='fade' style={{
                        backgroundColor:"rgba(147,204,3, .5)",
                    }} size="huge">
                            <Button.Content visible >Search</Button.Content>
                            <Button.Content hidden>
                                <Icon name='searchengin' />
                            </Button.Content>
                        </Button>
                    </a>
                    </div>
                </Grid.Column>
                <Grid.Column floated='right'>
                    <div className="search-intro">
                    <Header as='h2'>Want to make a payment? </Header>
                    <a href="/payment">
                    <Button animated='fade'style={{
                        backgroundColor:"rgba(147,204,3, .5)",
                    }} size="huge">
                        <Button.Content visible >Click Here</Button.Content>
                        <Button.Content hidden>
                            <Icon name='payment' />
                        </Button.Content>
                    </Button>
                    </a>
                    </div>
                </Grid.Column>
                </Grid.Row>

            </Grid>

            </div>
        </div>
    )
}
