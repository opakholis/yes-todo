import * as React from 'react'
import { Box, Center, Text } from 'native-base'

export default function MainScreen() {
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      flex={1}
      p={4}
    >
      <Box>
        <Text>Hello World!</Text>
      </Box>
    </Center>
  )
}
