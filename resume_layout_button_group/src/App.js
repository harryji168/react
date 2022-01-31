import { Button } from "@material-ui/core";
import { ButtonGroup } from "./components/button-group/button-group";
import "./styles.css";
import React from "react";
import {ChatWidget} from "@papercups-io/chat-widget";

export default function App() {
  return (
    <>
      {/*
        Put <ChatWidget /> at the bottom of whatever pages you would
        like to render the widget on, or in your root/router component
        if you would like it to render on every page
      */}
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
    
  );
}
