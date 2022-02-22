import React, {useState,useEffect} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import typesObj from "../data/cardType"
const types = typesObj
/* list of all accepted cards and their pattern*/
let acceptedCreditCards = {
    amex: /^3[47][0-9]{13}$/,
    master: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
    diner: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    jcb: /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/
  };

const checkSupported=(value,type)=> {
    let accepted = false;
    // loop through the keys (visa, mastercard, amex, etc.) and check whether the pattern matches
    let key = `${type}`
      let regex = acceptedCreditCards[key];
      if (regex.test(value)) {
        accepted = true;
      }
    return accepted;
}

/*Luhns algorithm to check whether the card number is valid*/
const validateCard = value=> {
    let sum = 0;
    let shouldDouble = false;
    // loop through values starting at the rightmost side
    for (let i = value.length - 1; i >= 0; i--) {
      let digit = parseInt(value.charAt(i));
      if (shouldDouble) {
        if ((digit *= 2) > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    let valid = (sum % 10) === 0;  
    return valid;
  }

export default function CreditCardForm() {
    /* field variables*/
    const[cardNum, setCardNum] = useState()
    const[cardType, setCardType] = useState()
    const[cvvNum, setCvvNum] = useState()
    const[expiry, setExpiry] = useState()
    const[code, setCode] = useState()

    /*error variables for each field*/
    const[error, setError] = useState(undefined)
    const[typeError, setTypeError] = useState(undefined)
    const[cvvError, setCvvError] = useState(undefined)
    const[expiryError, setExpiryError] = useState(undefined)
    const[codeError, setCodeError] = useState(undefined)


    /*to set active menu element */
    useEffect(() => {
        let payment=document.getElementById("payment-menu")
        payment.classList.add("active")

        let home=document.getElementById("home-menu")
        home.classList.remove("active")
     }, []
     )
    
    /*Change handlers for each field*/
    //1. Card Type change handler 
    const handleType=(event,{value})=>{
        setCardType(value)
    }

    //2, Card Number change handler
    const handleCardNum=(event,{value})=>{
        let spacedNum=value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim()
        setCardNum(spacedNum)
    }

    //3. Card Cvv change Handler
    const handleCvv = (event,{value})=>{
        setCvvNum(value)  
    }
    //4. Card expiry date change handler
    const handleExpiry=(event,{value})=>{

       let format= value.replace(
            /[^0-9]/g, '' // To allow only numbers
        ).replace(
            /^([2-9])$/g, '0$1' // To handle 3 > 03
        ).replace(
            /^(1{1})([3-9]{1})$/g, '0$1/$2' // 13 > 01/3
        ).replace(
            /^0{1,}/g, '0' // To handle 00 > 0
        ).replace(
            /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2' // To handle 113 > 11/3
        );
        setExpiry(format)
        
    }

    //5. card Postal code change handler
    const handleCode=(event,{value})=>{
            setCode(value)
     }

    /*following are validations for each field*/
    //1. Validation for Card Type
    const validateCardType=()=>{
        if(!cardType){
            setTypeError("Select Card Type")
            return false
        }
        else{
            return true
        }
    }

    //2. Valudate card number
    const validateCardNum=()=>{
        if(cardType&&cardNum){
            let card = cardNum
            if(card.length===0){
                setCardNum(undefined)
                setError(undefined)
            }
            else if(card.length>0){
                
                card = card.replace(/\s/g, '')
                let check = isNaN(card)
                if(check){
                    setError("Please Enter a number")
                }
                else{
                    if(checkSupported(card,cardType)&&validateCard(card)){   
                        
                        setError(undefined)
                        return true
                    }
                    else{
                        setError("Invalid Card Number")
                        return false
                    }
                }
                
            }
        }
    }

    //3. Validate card cvv
    const validateCvv=()=>{
        let cvv = cvvNum
        if(cvv.length===0){
            setCvvError(undefined)
        }

        if(cardType==="amex" && cvv.length===4){
            setCvvError(undefined)
            return true
        }
        else if(cardType !=="amex" && cvv.length===3){
            setCvvError(undefined)
            return true
        }
        else{
            setCvvError("Invalid cvv")
            return false
        }

    }

    //4. Validate Card Expiry date     
    const validateExpiry=()=>{
        if(expiry){
        let month=expiry.slice(0,2)
        let year = expiry.slice(2)
        let date1 = `${month}/01/${year}`
        const given = new Date(date1)
        const current = new Date()
            if(given>current){
                setExpiryError(undefined)
                return true
            }
            else{
                setExpiryError("Invalid expiry date")
                return false
            }
        }
        else{
            setExpiryError("Invalid expiry date")
            return false
        }
    }
    //6. Card Postal Code
    const validateCode=()=>{
        let regex=/^[ABCEGHJ-NPRSTVXY]{1}[0-9]{1}[ABCEGHJ-NPRSTV-Z]{1}[ ]?[0-9]{1}[ABCEGHJ-NPRSTV-Z]{1}[0-9]{1}$/
        if(regex.test(code)){
            setCodeError(undefined)
            return true
            
        }
        else{
            setCodeError("Invalid postal Code")
            return false
        }
        
    }

    /*Form Submit Handler 
    Validating all the field input, if validation passes => window is refreshed,
    else the setError messages continue to be displayed
    */
    const handleSubmit =(event)=>{ 
        event.preventDefault();
    if(validateCardType()&&validateCardNum()&&validateCvv()&&validateExpiry()&&validateCode()){
        setCardNum(undefined)
        setCardType(undefined)
        setCvvNum(undefined)
        setExpiry(undefined)
        setCode(undefined)
        window.location.reload()
    } 
    }

    return (
        <div id="pay-wrapper">
            <div className="overlay">                
                <Grid textAlign='center'  verticalAlign='middle' >
                    <Grid.Column style={{ maxWidth: 500, marginTop:"5%" }} id="pay-wrapper-form">

                    <Form size='large' className="payment-form" onSubmit={handleSubmit} >
                        <Segment stacked style={{
                        backgroundColor:"grey",
                        opacity:"90%"
                    }}>
                        <Form.Input className="name" fluid icon='user' name="name" iconPosition='left' required placeholder='Name on Card' />
                        <Form.Select
                            required
                            name="type"
                            id="type"
                            options={types.map(item => ({
                            name: item.value,
                            key: item.key,
                            id:item["id"],
                            value: item.value,
                            text: item.text
                            }))}
                            placeholder='Select Card Type'
                            onChange={handleType}
                            error={typeError}
                        />
                        <Form.Input
                            id="number"
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Card Number'
                            type="text"
                            required
                            value={cardNum}
                            onChange={handleCardNum}
                            error={error}
                            
                        />
                        <Form.Input
                            id="cvv"
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='CVV'
                            type="text"
                            required
                            value={cvvNum}
                            onChange={handleCvv}
                            error={cvvError}
                            maxLength="4"
                        />
                        <Form.Input
                            id="expiry"
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Expiry Date'
                            type="text"
                            required
                            value={expiry}
                            onChange={handleExpiry}
                            error={expiryError}
                            maxLength="5"
                        />
                        <Form.Input
                            id="code"
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Postal Code'
                            type="text"
                            required
                            value={code}
                            onChange={handleCode}
                            error={codeError}
                            maxLength="6"
                        />

                        <Button 
                        id="pay"
                        fluid size='large'
                        style={{
                            backgroundColor:"#94cb00",
                        }}
                        >
                            Pay
                        </Button>
                        </Segment>
                    </Form>
                    
                    </Grid.Column>
                </Grid>
               
            </div>

        </div>
    
    )
}

