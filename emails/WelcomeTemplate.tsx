import React from 'react'
import {Html, Body, Text,Container, Link, Preview } from "@react-email/components"

const WelcomeTemplate = ({name}: {name:string}) => {
  return (
    <Html>
        <Preview>Welcome to the board</Preview>
        <Body>
            <Container>
                <Text>Hello, {name}</Text>
                <Text>Welcome to our board! We're excited to have you join us.</Text>
                <Link href="https://example.com">Visit our website</Link>
            </Container>
        </Body>
        
    </Html>
  )
}

export default WelcomeTemplate;