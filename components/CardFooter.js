import React from 'react'
import {
  Stack,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Image
} from '@chakra-ui/react'
import InputRightElement from "../public/InputRight.svg"

export default function CardFooter ({ question, placeholder, footerBg }) {

  const handleInputChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <Stack bg={footerBg}
           display="flex"
           flexDirection="column"
           pt="26px"
           px="24px"
           pb="14px">
      <Heading as="h4"
               fontSize="16px"
               lineHeight="24px"
               letterSpacing="0.4px">
        {question}
      </Heading>
      <InputGroup borderRadius="100px"
                  height="48px"
                  background="rgba(95, 116, 149, 0.2)"
                  py="12px"
                  alignItems="center"
                  my="10px !important">
        <Input placeholder={placeholder}
               onChange={(e) => handleInputChange(e)}
               background="transparent"
               borderRadius="100px"
               border="none"
               focusBorderColor="none"/>
        <InputRightAddon border="none"
                         cursor="pointer"
                         background="transparent"
                         borderRadius="100px">
          <Image src={InputRightElement}/>
        </InputRightAddon>
      </InputGroup>
    </Stack>
  )
};