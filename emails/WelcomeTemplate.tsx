import React from 'react'
import {Html, Body, Text,Container, Link, Preview, Tailwind } from "@react-email/components"

const WelcomeTemplate = ({name}: {name:string}) => {
  return (
    <Html>
        <Preview>Welcome to the board</Preview>
        <Tailwind>
        <Body className='bg-slate-400'>
            <Container>
                <Text className='font-bold text-3xl'>Hello, {name}</Text>
                <Text>Welcome to our board! We're excited to have you join us.</Text>
                <Link href="https://example.com">Visit our website</Link>
            </Container>
        </Body>
        </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate;