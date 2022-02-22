import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Form } from 'semantic-ui-react'



class EmailForm extends Component {
 
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  handleSubmit(e) {
    
    e.preventDefault()    
    const { name, email, message } = this.state    
    let templateParams = {
      from_name: name,
      to_name: 'Harry',
      email:email,
      message: message,
     }      
     emailjs.send(
        'service_9ts8a5o',
        'template_yk1pgyy',
       templateParams,
       "user_9BH9p58zbegmGfuX442is"
     )     
     this.resetForm()
    //  this.props.close
    
    //  .then(()=>this.setState({ showMessage: true }))

    }
    resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
    })
    
    this.props.setOpen(false)
    console.log(this.props)
    this.props.showMessage(true)
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
    // console.log("props",this.props)
  }
  render() {
    return (
      <>
       
          <h1 className="p-heading1">Get in Touch</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>

            <Form.Field>
            <label> Name</label>
            <Form.Input placeholder='Name' name="name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
            </Form.Field>
            <Form.Field>
            <label>Email</label>
            <Form.Input placeholder='Email' name="email"  value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
            </Form.Field>
            <Form.Field>
            <label>Message</label>
            <Form.Input placeholder='message' name="message"  value={this.state.message} onChange={this.handleChange.bind(this, 'message')}/>
            </Form.Field>
            <Button type='submit'>Send</Button>
        </Form>
         
       
      </>
    )
  }
}

export default EmailForm