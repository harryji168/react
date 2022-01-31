import { Button } from "@material-ui/core";
import { ButtonGroup } from "./components/button-group/button-group";
import "./styles.css";
import React from "react";
import {ChatWidget} from "@papercups-io/chat-widget";

export default function App() {
  return (
    <>
    <ChatWidget
        // `accountId` is used instead of `token` in older versions
        // of the @papercups-io/chat-widget package (before v1.2.x).
        // You can delete this line if you are on the latest version.
        // accountId="989a572b-d8c9-4c08-a435-7324aafad69a"
        token="989a572b-d8c9-4c08-a435-7324aafad69a"
        inbox="dd9b7c98-92ce-4580-adc0-12ffe4eddf36"
        title="Welcome to harry"
        subtitle="Ask us anything in the chat window below 😊"
        primaryColor="#1890ff"
        newMessagePlaceholder="Start typing..."
        showAgentAvailability={false}
        agentAvailableText="We're online right now!"
        agentUnavailableText="We're away at the moment."
        requireEmailUpfront={false}
        iconVariant="outlined"
        baseUrl="https://app.papercups.io"
        // Optionally include data about your customer here to identify them
        // customer={{
        //   name: __CUSTOMER__.name,
        //   email: __CUSTOMER__.email,
        //   external_id: __CUSTOMER__.id,
        //   metadata: {
        //     plan: "premium"
        //   }
        // }}
      />
      </> 
    <div className="Login-component" >
      <div style={{
                height: '936px',
                  }}
      >
      </div>
      <div style={{
            width: "376px",
            height: '438px',
            backgroundColor: "#3B3C41",
            padding: "8px 30px",
            fontSize: "18px",
            opacity: "1"
          }}
         >
 {/*  Javascript  Node.js jquery */}
        <ButtonGroup 
        style={{ 
          padding: "8px 18px" 
        }}        
        >
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder",
            color:"#D9BD9C"
          }}
          variant="contained">Javascript</Button>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder",
            color:"#D9BD9C"
          }}
          variant="contained">Node.Js</Button>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder",
            color:"#D9BD9C"
          }}
          variant="contained">jQuery</Button>
        </ButtonGroup>
{/* React Next.js  jQuery  */}
        <ButtonGroup>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 26px",
            fontSize: "18px",
            fontWeight: "Bolder",
            color:"#D9BD9C"
          }}
          variant="contained">React</Button>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder",
            color:"#D9BD9C"
          }}
          variant="contained">Next.Js</Button>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder",
            color:"#D9BD9C"
          }}
          variant="contained">Vue.js</Button>
        </ButtonGroup>
{/* Ruby   Rails  Elixir  Phoenix */}
        <ButtonGroup>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder", 
            color:"#D9BD9C"
             
          }}
          variant="contained">Ruby</Button>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder", 
            color:"#D9BD9C"
          }}
          variant="contained">Rails</Button>

<Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder",  
            color:"#D9BD9C"
          }}
          variant="contained">Elixir</Button>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder",  
            color:"#D9BD9C"
          }}
          variant="contained">Phoenix</Button>
          
        </ButtonGroup>

        {/* HTML5 CSS3 BOOTSTRAP */}
<ButtonGroup>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder", 
            color:"#D9BD9C"
          }}
          variant="contained">HTML5</Button>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder", 
            color:"#D9BD9C"
          }}
          variant="contained">CSS3</Button>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder", 
            color:"#D9BD9C"
          }}
          variant="contained">Bootstrap</Button>
        </ButtonGroup>

{/* PostgreSQL  Vss Code Github  */}
<ButtonGroup>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 6px",
            fontSize: "18px",
            fontWeight: "Bolder", 
            color:"#D9BD9C"
          }}
          variant="contained">PostgreSQL</Button>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 6px",
            fontSize: "18px",
            fontWeight: "Bolder", 
            color:"#D9BD9C"
          }}
          variant="contained">VSS Code</Button>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 6px",
            fontSize: "18px",
            fontWeight: "Bolder", 
            color:"#D9BD9C"
          }}
          variant="contained">GitHub</Button>
        </ButtonGroup>


{/* PHP MySqL WordPress   */}
<ButtonGroup>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder", 
            color:"#D9BD9C"
          }}
          variant="contained">PHP</Button>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder", 
            color:"#D9BD9C"
          }}
          variant="contained">MySqL</Button>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder", 
            color:"#D9BD9C"
          }}
          variant="contained">WordPress</Button>
        </ButtonGroup>


{/* MVC Shell AWS NGINX  */}
<ButtonGroup>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder", 
            color:"#D9BD9C"
          }}
          variant="contained">MVC</Button>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder", 
            color:"#D9BD9C"
          }}
          variant="contained">Shell</Button>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder", 
            color:"#D9BD9C"
          }}
          variant="contained">AWS</Button>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder", 
            color:"#D9BD9C"
          }}
          variant="contained">NGINX</Button>
        </ButtonGroup>

       
{/* CMS Laravel OpenCart Magento */}
<ButtonGroup>
           
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder", 
            color:"#D9BD9C"
          }}
          variant="contained">Laravel</Button>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder", 
            color:"#D9BD9C"
          }}
          variant="contained">OpenCart</Button>
          <Button 
          style={{
            borderRadius: 13,
            backgroundColor: "#D9BD9C",
            padding: "8px 18px",
            fontSize: "18px",
            fontWeight: "Bolder", 
            color:"#D9BD9C"
          }}
          variant="contained">Magento</Button>
        </ButtonGroup> 
      </div>
    </div>
  );
}
