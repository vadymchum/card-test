import React from 'react'
import {
  Box,
  Heading,
  Image,
  Stack,
  Text
} from "@chakra-ui/react"
import menu from "../public/Menu.svg"

export default function CardHeader ({ buttonName, buttonBg, avatar, username, time }) {

  return (
    <Stack px="32px"
           display="flex"
           flexDirection="row"
           justifyContent="space-between"
           pt="32px">
      <Box display="flex"
           justifyContent="flex-start"
           alignItems="center">
        <Box as="button"
             borderRadius="100px"
             fontSize='sm'
             bg={buttonBg}
             py="12px"
             px="20px"
             fontWeight="600">{buttonName}</Box>
        <Box w="44px"
             h="44px"
             align="center"
             borderRadius="50%"
             overflow="hidden"
             mx="12px">
          <Image src={avatar}/>
        </Box>
        <Heading as="h4"
                 size="sm"
                 fontSize="18px"
                 letterSpacing="0.45px"
                 lineHeight="2">
          {username}
        </Heading>
        <Text mx="14px"
              letterSpacing="0.3px"
              fontWeight="400"
              opacity="0.5"
              color="#FFFFFF"
              fontSize="12px">{time}</Text>
      </Box>
      <Box w="20px"
           h="20px"
           marginTop="13px !important">
        <Image src={menu}/>
      </Box>
    </Stack>
  )
};