import React from 'react'
import { Flex } from "@chakra-ui/react"
import CardHeader from '../components/CardHeader'
import CardContent from '../components/CardContent'
import CardFooter from '../components/CardFooter'

export default function Card ({ button, buttonBg, avatar, username, question, placeholder, columns, cardBg, footerBg, time }) {

  return (
    <Flex bg={cardBg}
          color="white" w="640px"
          borderRadius="12px"
          direction="column">
      <CardHeader buttonName={button}
                  avatar={avatar}
                  username={username}
                  buttonBg={buttonBg}
                  time={time}/>
      <CardContent columns={columns}/>
      <CardFooter question={ question }
                  placeholder={placeholder}
                  footerBg={footerBg}/>
    </Flex>
  )
}
