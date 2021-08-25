import React from 'react'
import {
  VStack,
  Link,
  Heading,
  Stack,
} from '@chakra-ui/react'

const base = process.env.REACT_APP_API_BASE_URL

const Login = () => (
  <VStack
    width="100vw"
    height="100vh"
    spacing={6}
  >
    <Heading>Inicia sesión</Heading>
    <Stack
      flex={{ base: 1 }}
      spacing={6}
    >
      <Link
        display={{ base: 'inline-flex' }}
        fontSize="sm"
        fontWeight={600}
        color="white"
        bg="blue.400"
        href={`${base}/auth/google`}
        _hover={{
          bg: 'blue.300',
        }}
      >
        Iniciar Sesión con Google
      </Link>
      <Link
        display={{ base: 'inline-flex' }}
        fontSize="sm"
        fontWeight={600}
        color="white"
        bg="blue.400"
        href={`${base}/auth/github`}
        _hover={{
          bg: 'blue.300',
        }}
      >
        Iniciar Sesión con Github
      </Link>
    </Stack>
  </VStack>
)

export default Login
