import React from 'react'
import { Stack, Text } from '@chakra-ui/react'

export default function CardContent ({columns}) {
  return (
    <Stack px="32px"
           pt="24px"
           pb="32px"
           display="flex"
           flexDirection="column"
           justifyContent="space-between"
           fontSize="18px"
           opacity="0.8"
           minHeight="256px">
      {
        columns.map(text => {
          return (
            <Text key={text.id} lineHeight="140%">
              {text.text}
            </Text>
          )
        })
      }
    </Stack>
  )
};